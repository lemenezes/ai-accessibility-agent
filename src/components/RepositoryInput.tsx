import { Link2, Search } from "lucide-react";

interface RepositoryInputProps {
  mode: "url" | "snippet";
  onModeChange: (mode: "url" | "snippet") => void;
  url: string;
  onUrlChange: (value: string) => void;
  snippet: string;
  onSnippetChange: (value: string) => void;
  onAnalyze: () => void;
  onUseDemoRepository: () => void;
  onUseSampleCode: () => void;
  onSelectQuickScenario: (scenario: "excellent" | "average" | "poor") => void;
  isAnalyzing: boolean;
  title: string;
  description: string;
  tabRepositoryLabel: string;
  tabSnippetLabel: string;
  inputLabel: string;
  placeholder: string;
  snippetLabel: string;
  snippetPlaceholder: string;
  useDemoRepositoryLabel: string;
  useSampleCodeLabel: string;
  quickDemoLabel: string;
  quickExcellentLabel: string;
  quickAverageLabel: string;
  quickPoorLabel: string;
  analyzeLabel: string;
  analyzingLabel: string;
}

export function RepositoryInput({
  mode,
  onModeChange,
  url,
  onUrlChange,
  snippet,
  onSnippetChange,
  onAnalyze,
  onUseDemoRepository,
  onUseSampleCode,
  onSelectQuickScenario,
  isAnalyzing,
  title,
  description,
  tabRepositoryLabel,
  tabSnippetLabel,
  inputLabel,
  placeholder,
  snippetLabel,
  snippetPlaceholder,
  useDemoRepositoryLabel,
  useSampleCodeLabel,
  quickDemoLabel,
  quickExcellentLabel,
  quickAverageLabel,
  quickPoorLabel,
  analyzeLabel,
  analyzingLabel
}: RepositoryInputProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="font-display text-xl text-slate-100">{title}</h2>
      <div className="mt-4 inline-flex rounded-xl border border-slate-700 bg-slate-950/70 p-1">
        <button
          type="button"
          onClick={() => onModeChange("url")}
          disabled={isAnalyzing}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
            mode === "url"
              ? "bg-cyan-400/20 text-cyan-100"
              : "text-slate-300 hover:bg-slate-800/80"
          }`}>
          {tabRepositoryLabel}
        </button>
        <button
          type="button"
          onClick={() => onModeChange("snippet")}
          disabled={isAnalyzing}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
            mode === "snippet"
              ? "bg-cyan-400/20 text-cyan-100"
              : "text-slate-300 hover:bg-slate-800/80"
          }`}>
          {tabSnippetLabel}
        </button>
      </div>

      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">{description}</p>
        {mode === "url" ? (
          <button
            type="button"
            onClick={onUseDemoRepository}
            disabled={isAnalyzing}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60">
            {useDemoRepositoryLabel}
          </button>
        ) : (
          <button
            type="button"
            onClick={onUseSampleCode}
            disabled={isAnalyzing}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60">
            {useSampleCodeLabel}
          </button>
        )}
      </div>

      {mode === "url" ? (
        <>
          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <label className="sr-only" htmlFor="repo-url">
              {inputLabel}
            </label>

            <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
              <Link2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
              <input
                id="repo-url"
                type="url"
                value={url}
                onChange={event => onUrlChange(event.target.value)}
                placeholder={placeholder}
                className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>

            <button
              type="button"
              onClick={onAnalyze}
              disabled={isAnalyzing}
              className="cta-analyze-button inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/20 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30 disabled:cursor-not-allowed disabled:opacity-60">
              <Search className="h-4 w-4" aria-hidden="true" />
              {isAnalyzing ? analyzingLabel : analyzeLabel}
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
              {quickDemoLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onSelectQuickScenario("excellent")}
                disabled={isAnalyzing}
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300/40 bg-emerald-300/15 px-3 py-1.5 text-xs font-semibold text-emerald-100 disabled:cursor-not-allowed disabled:opacity-60">
                <span aria-hidden="true">🟢</span>
                {quickExcellentLabel}
              </button>
              <button
                type="button"
                onClick={() => onSelectQuickScenario("average")}
                disabled={isAnalyzing}
                className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300/40 bg-amber-300/15 px-3 py-1.5 text-xs font-semibold text-amber-100 disabled:cursor-not-allowed disabled:opacity-60">
                <span aria-hidden="true">🟡</span>
                {quickAverageLabel}
              </button>
              <button
                type="button"
                onClick={() => onSelectQuickScenario("poor")}
                disabled={isAnalyzing}
                className="inline-flex items-center gap-1.5 rounded-lg border border-rose-300/40 bg-rose-300/15 px-3 py-1.5 text-xs font-semibold text-rose-100 disabled:cursor-not-allowed disabled:opacity-60">
                <span aria-hidden="true">🔴</span>
                {quickPoorLabel}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-5 space-y-3">
          <label
            className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400"
            htmlFor="snippet-code">
            {snippetLabel}
          </label>
          <textarea
            id="snippet-code"
            value={snippet}
            onChange={event => onSnippetChange(event.target.value)}
            placeholder={snippetPlaceholder}
            className="min-h-48 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />
          <button
            type="button"
            onClick={onAnalyze}
            disabled={isAnalyzing}
            className="cta-analyze-button inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/20 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30 disabled:cursor-not-allowed disabled:opacity-60">
            <Search className="h-4 w-4" aria-hidden="true" />
            {isAnalyzing ? analyzingLabel : analyzeLabel}
          </button>
        </div>
      )}
    </section>
  );
}
