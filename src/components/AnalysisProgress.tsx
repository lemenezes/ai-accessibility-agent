import { CheckCircle2, LoaderCircle } from "lucide-react";

interface AnalysisProgressProps {
  steps: string[];
  currentStep: number;
  isComplete: boolean;
}

export function AnalysisProgress({
  steps,
  currentStep,
  isComplete
}: AnalysisProgressProps) {
  const completedSteps = isComplete
    ? steps.length
    : Math.max(0, Math.min(currentStep, steps.length));
  const progress = Math.round((completedSteps / steps.length) * 100);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.12),transparent_35%)]" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl text-slate-100">
            Live analysis pipeline
          </h2>
          <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-cyan-100">
            {isComplete ? "Completed" : "In Progress"}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-300">
          {isComplete
            ? "Repository scan finished. Accessibility report generated."
            : "Executing repository scan and accessibility checks..."}
        </p>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.08em] text-slate-300">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-cyan-200 to-emerald-300 transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}>
              <div className="progress-sheen h-full w-full" />
            </div>
          </div>
        </div>

        <ul className="mt-4 space-y-3">
          {steps.map((step, index) => {
            const isDone = isComplete || index < currentStep;
            const isActive = !isComplete && index === currentStep;

            return (
              <li
                key={step}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition ${
                  isActive
                    ? "border-cyan-300/35 bg-cyan-300/10"
                    : "border-slate-800 bg-slate-950/70"
                }`}>
                <span className="inline-flex h-6 w-6 items-center justify-center">
                  {isDone ? (
                    <CheckCircle2
                      className="h-5 w-5 animate-fade-in text-emerald-300"
                      aria-hidden="true"
                    />
                  ) : isActive ? (
                    <LoaderCircle
                      className="h-5 w-5 animate-spin text-cyan-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-slate-600"
                      aria-hidden="true"
                    />
                  )}
                </span>
                <span
                  className={`text-sm ${
                    isDone
                      ? "text-emerald-200"
                      : isActive
                        ? "text-cyan-100"
                        : "text-slate-400"
                  }`}>
                  {isDone ? "✓ " : ""}
                  {step}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
