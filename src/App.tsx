import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Languages, Moon, Sun } from "lucide-react";
import { AgentInsightsPanel } from "./components/AgentInsightsPanel";
import { AnalysisProgress } from "./components/AnalysisProgress";
import { FindingsList } from "./components/FindingsList";
import { HeroHeader } from "./components/HeroHeader";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { RepositoryInput } from "./components/RepositoryInput";
import { StoryFlow } from "./components/StoryFlow";
import { TrustSignals } from "./components/TrustSignals";
import {
  defaultScenario,
  getScenarioByUrl
} from "./data/mockReport";
import { getTranslations, languageOptions } from "./i18n/translations";
import { useLanguage } from "./i18n/useLanguage";
import { useTheme } from "./theme/useTheme";
import type { Language } from "./types/ui";

function App() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = useMemo(() => getTranslations(language), [language]);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  const [repoUrl, setRepoUrl] = useState("https://github.com/example/app-web");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [activeScenario, setActiveScenario] = useState(defaultScenario);
  const [pendingScenario, setPendingScenario] = useState(defaultScenario);

  const analysisSteps = t.pipeline.steps;

  const localizedFindings = useMemo(
    () =>
      activeScenario.findings.map(item => {
        const localizedItem = t.findings.findingById[item.id];

        if (!localizedItem) {
          return item;
        }

        return {
          ...item,
          wcagCriterion: localizedItem.wcagCriterion ?? item.wcagCriterion,
          description: localizedItem.description,
          impact: localizedItem.impact,
          suggestedFix: localizedItem.suggestedFix,
          beforeCode: localizedItem.beforeCode ?? item.beforeCode,
          suggestedCode: localizedItem.suggestedCode ?? item.suggestedCode
        };
      }),
    [activeScenario.findings, t.findings.findingById]
  );

  const localizedInsights = useMemo(
    () =>
      activeScenario.insights.map(item => {
        const localizedItem = t.insights.insightById[item.id];

        if (!localizedItem) {
          return item;
        }

        return {
          ...item,
          title: localizedItem.title,
          detail: localizedItem.detail
        };
      }),
    [activeScenario.insights, t.insights.insightById]
  );

  const isValidGithubUrl = useMemo(
    () => /^https:\/\/github\.com\/.+\/.+/i.test(repoUrl.trim()),
    [repoUrl]
  );

  useEffect(() => {
    if (!isLanguageMenuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isLanguageMenuOpen]);

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
          setActiveScenario(pendingScenario);
          setAnalysisComplete(true);
        }

        return nextStep;
      });
    }, 1100);

    return () => window.clearTimeout(timeoutId);
  }, [analysisSteps.length, currentStep, isAnalyzing, pendingScenario]);

  const handleAnalyze = () => {
    if (!isValidGithubUrl || isAnalyzing) {
      return;
    }

    const nextScenario = getScenarioByUrl(repoUrl);

    setPendingScenario(nextScenario);
    setAnalysisComplete(false);
    setCurrentStep(0);
    setIsAnalyzing(true);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="app-atmosphere absolute inset-0" />
      </div>

      <div className="space-y-6 sm:space-y-8">
        <HeroHeader
          chip={t.hero.chip}
          titleLine1={t.hero.titleLine1}
          titleLine2={t.hero.titleLine2}
          subtitle={t.hero.subtitle}
          footnote={t.hero.footnote}
          controls={
            <div className="flex items-center gap-2">
              <div className="relative" ref={languageMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsLanguageMenuOpen(previous => !previous)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/70 px-2 py-1 text-[11px] font-medium text-slate-100"
                  aria-haspopup="listbox"
                  aria-expanded={isLanguageMenuOpen}
                  aria-label={t.controls.language}>
                  <Languages
                    className="h-3.5 w-3.5 text-cyan-300"
                    aria-hidden="true"
                  />
                  {language.toUpperCase()}
                  <ChevronDown
                    className="h-3.5 w-3.5 text-slate-300"
                    aria-hidden="true"
                  />
                </button>

                {isLanguageMenuOpen && (
                  <div
                    className="absolute right-0 z-30 mt-1.5 w-28 rounded-lg border border-slate-700 bg-slate-950/95 p-1 shadow-xl"
                    role="listbox"
                    aria-label={t.controls.language}>
                    {languageOptions.map(option => {
                      const isSelected = option.value === language;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setLanguage(option.value as Language);
                            setIsLanguageMenuOpen(false);
                          }}
                          className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[11px] font-medium transition ${
                            isSelected
                              ? "bg-cyan-300/15 text-cyan-100"
                              : "text-slate-200 hover:bg-slate-800/70"
                          }`}
                          role="option"
                          aria-selected={isSelected}>
                          <span className="inline-flex h-3.5 w-3.5 items-center justify-center">
                            {isSelected ? (
                              <Check
                                className="h-3.5 w-3.5 text-cyan-300"
                                aria-hidden="true"
                              />
                            ) : null}
                          </span>
                          <span>{option.value.toUpperCase()}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/70 px-2 py-1 text-[11px] font-medium text-slate-100"
                aria-label={t.controls.theme}>
                <Sun
                  className={`h-3.5 w-3.5 ${
                    theme === "dark" ? "text-amber-300" : "text-slate-400"
                  }`}
                  aria-hidden="true"
                />
                <span className="relative h-3.5 w-7 rounded-full bg-slate-700/80">
                  <span
                    className={`absolute top-0.5 h-2.5 w-2.5 rounded-full bg-cyan-200 transition-transform duration-200 ${
                      theme === "dark" ? "translate-x-0.5" : "translate-x-4"
                    }`}
                  />
                </span>
                <Moon
                  className={`h-3.5 w-3.5 ${
                    theme === "light" ? "text-cyan-300" : "text-slate-400"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          }
        />
        <TrustSignals signals={t.trustSignals} />
        <StoryFlow
          title={t.story.title}
          description={t.story.description}
          steps={t.story.steps}
        />

        <RepositoryInput
          url={repoUrl}
          onUrlChange={setRepoUrl}
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
          title={t.repository.title}
          description={t.repository.description}
          inputLabel={t.repository.inputLabel}
          placeholder={t.repository.placeholder}
          analyzeLabel={t.repository.buttonAnalyze}
          analyzingLabel={t.repository.buttonAnalyzing}
        />

        {!isValidGithubUrl && (
          <p className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            {t.app.invalidUrl}
          </p>
        )}

        {(isAnalyzing || analysisComplete) && (
          <AnalysisProgress
            steps={analysisSteps}
            currentStep={Math.min(currentStep, analysisSteps.length - 1)}
            isComplete={analysisComplete}
            title={t.pipeline.title}
            statusCompleted={t.pipeline.statusCompleted}
            statusRunning={t.pipeline.statusRunning}
            summaryCompleted={t.pipeline.summaryCompleted}
            summaryRunning={t.pipeline.summaryRunning}
            progressLabel={t.pipeline.progress}
          />
        )}

        {analysisComplete && (
          <section className="space-y-6 animate-fade-in sm:space-y-8">
            <MetricsDashboard
              summary={activeScenario.summary}
              labels={{
                title: t.dashboard.title,
                metricBadge: t.dashboard.metricBadge,
                scoreLabel: t.dashboard.scoreLabel,
                criticalIssues: t.dashboard.criticalIssues,
                mediumIssues: t.dashboard.mediumIssues,
                lowIssues: t.dashboard.lowIssues,
                filesAnalyzed: t.dashboard.filesAnalyzed
              }}
            />
            <FindingsList
              findings={localizedFindings}
              title={t.findings.title}
              impactLabel={t.findings.impact}
              suggestedFixLabel={t.findings.suggestedFix}
              beforeCodeLabel={t.findings.beforeCode}
              suggestedCodeLabel={t.findings.suggestedCode}
              criticalLabel={t.findings.critical}
              mediumLabel={t.findings.medium}
              lowLabel={t.findings.low}
            />
            <AgentInsightsPanel
              insights={localizedInsights}
              title={t.insights.title}
              description={t.insights.description}
              priorityLabel={t.insights.priorityLabel}
              priorityMap={t.insights.priority}
            />
          </section>
        )}

        {!analysisComplete && !isAnalyzing && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="font-display text-xl text-slate-100">
              {t.app.readyTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              {t.app.readyDescription}
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
