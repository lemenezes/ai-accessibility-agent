import { Bot, TriangleAlert } from "lucide-react";
import type { AgentInsight } from "../types/accessibility";

interface AgentInsightsPanelProps {
  insights: AgentInsight[];
}

function priorityColor(priority: AgentInsight["priority"]) {
  if (priority === "High") {
    return "text-rose-300";
  }

  if (priority === "Medium") {
    return "text-amber-300";
  }

  return "text-emerald-300";
}

export function AgentInsightsPanel({ insights }: AgentInsightsPanelProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
      <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-cyan-300" aria-hidden="true" />
          <h2 className="font-display text-xl text-slate-100">
            AI Accessibility Agent Insights
          </h2>
        </div>

        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
          Natural-language recommendations that highlight risk, user impact, and
          the highest-priority actions for your team.
        </p>

        <div className="mt-5 grid gap-3">
          {insights.map(insight => (
            <article
              key={insight.id}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-100">
                  {insight.title}
                </h3>
                <span
                  className={`inline-flex items-center gap-1 text-xs ${priorityColor(insight.priority)}`}>
                  <TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />
                  Priority {insight.priority}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {insight.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
