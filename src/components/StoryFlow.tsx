import {
  ArrowDown,
  Bot,
  Link2,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";

interface StoryFlowProps {
  title: string;
  description: string;
  steps: Array<{ title: string; description: string }>;
}

const storyIcons = [Link2, Bot, ShieldCheck, Wrench];

export function StoryFlow({ title, description, steps }: StoryFlowProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7">
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl text-slate-100">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-6 flex flex-col items-stretch">
        {steps.map((step, index) => {
          const Icon = storyIcons[index] ?? Link2;
          const isLast = index === steps.length - 1;
          const isAgentStep = index === 1;

          return (
            <div key={step.title} className="flex flex-col items-center">
              <article
                className={`w-full rounded-xl border p-4 sm:p-5 ${
                  isAgentStep
                    ? "agent-step-card border-cyan-300/60 bg-gradient-to-r from-cyan-400/20 to-slate-950 shadow-[0_0_50px_rgba(34,211,238,0.25)]"
                    : "border-slate-700 bg-slate-950/70"
                }`}>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border text-cyan-100 ${
                      isAgentStep
                        ? "agent-step-icon border-cyan-200/70 bg-cyan-300/30"
                        : "border-cyan-300/30 bg-cyan-300/10"
                    }`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3
                      className={`text-sm font-semibold uppercase tracking-[0.08em] sm:text-base ${
                        isAgentStep
                          ? "agent-step-title text-cyan-100"
                          : "text-slate-100"
                      }`}>
                      {isAgentStep && (
                        <Sparkles
                          className="-mt-0.5 mr-1 inline h-4 w-4"
                          aria-hidden="true"
                        />
                      )}
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>

              {!isLast && (
                <span className="my-2 inline-flex h-8 items-center justify-center text-cyan-200/80">
                  <ArrowDown className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
