import { Link2, Search } from "lucide-react";

interface RepositoryInputProps {
  url: string;
  onUrlChange: (value: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  title: string;
  description: string;
  inputLabel: string;
  placeholder: string;
  analyzeLabel: string;
  analyzingLabel: string;
}

export function RepositoryInput({
  url,
  onUrlChange,
  onAnalyze,
  isAnalyzing,
  title,
  description,
  inputLabel,
  placeholder,
  analyzeLabel,
  analyzingLabel
}: RepositoryInputProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="font-display text-xl text-slate-100">{title}</h2>
      <p className="mt-2 text-sm text-slate-400">{description}</p>

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
    </section>
  );
}
