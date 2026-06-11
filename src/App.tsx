import { useEffect, useMemo, useState } from "react";
import { AgentInsightsPanel } from "./components/AgentInsightsPanel";
import { AnalysisProgress } from "./components/AnalysisProgress";
import { FindingsList } from "./components/FindingsList";
import { HeroHeader } from "./components/HeroHeader";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { RepositoryInput } from "./components/RepositoryInput";
import { StoryFlow } from "./components/StoryFlow";
import { TrustSignals } from "./components/TrustSignals";
import {
  agentInsights,
  analysisSteps,
  findings,
  reportSummary
} from "./data/mockReport";

function App() {
  const [repoUrl, setRepoUrl] = useState("https://github.com/example/app-web");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const isValidGithubUrl = useMemo(
    () => /^https:\/\/github\.com\/.+\/.+/i.test(repoUrl.trim()),
    [repoUrl]
  );

  useEffect(() => {
    if (!isAnalyzing) {
      return;
    }

    if (currentStep >= analysisSteps.length) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCurrentStep(previous => {
        const nextStep = previous + 1;

        if (nextStep >= analysisSteps.length) {
          setIsAnalyzing(false);
          setAnalysisComplete(true);
        }

        return nextStep;
      });
    }, 1100);

    return () => window.clearTimeout(timeoutId);
  }, [currentStep, isAnalyzing]);

  const handleAnalyze = () => {
    if (!isValidGithubUrl || isAnalyzing) {
      return;
    }

    setAnalysisComplete(false);
    setCurrentStep(0);
    setIsAnalyzing(true);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(251,191,36,0.12),transparent_40%),linear-gradient(180deg,#05080f,#02040a)]" />
      </div>

      <div className="space-y-6 sm:space-y-8">
        <HeroHeader />
        <TrustSignals />
        <StoryFlow />

        <RepositoryInput
          url={repoUrl}
          onUrlChange={setRepoUrl}
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
        />

        {!isValidGithubUrl && (
          <p className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            Enter a valid GitHub repository URL to start the analysis.
          </p>
        )}

        {(isAnalyzing || analysisComplete) && (
          <AnalysisProgress
            steps={analysisSteps}
            currentStep={Math.min(currentStep, analysisSteps.length - 1)}
            isComplete={analysisComplete}
          />
        )}

        {analysisComplete && (
          <section className="space-y-6 animate-fade-in sm:space-y-8">
            <MetricsDashboard summary={reportSummary} />
            <FindingsList findings={findings} />
            <AgentInsightsPanel insights={agentInsights} />
          </section>
        )}

        {!analysisComplete && !isAnalyzing && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="font-display text-xl text-slate-100">
              Ready to scan
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Click Analyze Repository to run the simulated flow and open the
              full dashboard with findings and AI insights.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
