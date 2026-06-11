export type Severity = "HIGH" | "MEDIUM" | "LOW";

export interface AnalysisMetric {
  label: string;
  value: string;
  tone: "accent" | "critical" | "warning" | "neutral" | "success";
}

export interface Finding {
  id: string;
  severity: Severity;
  wcagCriterion: string;
  description: string;
  impact: string;
  suggestedFix: string;
  beforeCode?: string;
  suggestedCode?: string;
}

export interface ReportSummary {
  score: number;
  criticalIssues: number;
  mediumIssues: number;
  lowIssues: number;
  analyzedFiles: number;
}

export interface AgentInsight {
  id: string;
  title: string;
  detail: string;
  priority: "High" | "Medium" | "Low";
}
