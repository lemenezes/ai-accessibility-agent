import { ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface HeroHeaderProps {
  chip: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  footnote: string;
  controls?: ReactNode;
}

export function HeroHeader({
  chip,
  titleLine1,
  titleLine2,
  subtitle,
  footnote,
  controls
}: HeroHeaderProps) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 sm:p-10">
      <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6">
        {controls && (
          <div className="flex justify-end">
            <div className="rounded-xl border border-slate-700 bg-slate-950/65 p-2">
              {controls}
            </div>
          </div>
        )}

        <div className="hero-chip inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {chip}
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-4xl leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            {titleLine1}
            <br />
            {titleLine2}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-200">
          <ShieldCheck className="h-4 w-4 text-cyan-300" aria-hidden="true" />
          {footnote}
        </div>
      </div>
    </header>
  );
}
