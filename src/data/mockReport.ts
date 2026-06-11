import type {
  AgentInsight,
  Finding,
  ReportSummary
} from "../types/accessibility";

export const analysisSteps = [
  "Cloning repository",
  "Scanning source code",
  "Running WCAG analysis",
  "Generating accessibility report"
];

export const reportSummary: ReportSummary = {
  score: 84,
  criticalIssues: 5,
  mediumIssues: 12,
  lowIssues: 18,
  analyzedFiles: 87
};

export const findings: Finding[] = [
  {
    id: "F-000",
    severity: "HIGH",
    wcagCriterion: "WCAG 2.1.1 Keyboard",
    description:
      "Interactive menu cannot be accessed using keyboard navigation.",
    impact:
      "Users who cannot use a mouse are blocked from accessing primary navigation.",
    suggestedFix:
      "Enable keyboard support for all menu interactions and preserve a visible focus state in each navigation step."
  },
  {
    id: "F-001",
    severity: "HIGH",
    wcagCriterion: "WCAG 1.1.1",
    description: "Image missing alt text.",
    impact: "Screen reader users cannot understand product images.",
    suggestedFix:
      "Add an alt attribute with meaningful context for each product image."
  },
  {
    id: "F-002",
    severity: "HIGH",
    wcagCriterion: "WCAG 2.4.7",
    description: "Missing visible focus indicator.",
    impact: "Keyboard users cannot navigate the interface.",
    suggestedFix:
      "Apply a clear, high-contrast focus ring to all interactive elements."
  },
  {
    id: "F-003",
    severity: "MEDIUM",
    wcagCriterion: "WCAG 1.4.3",
    description: "Insufficient color contrast.",
    impact: "Low vision users may not read content.",
    suggestedFix:
      "Adjust colors to maintain at least a 4.5:1 contrast ratio for normal text."
  },
  {
    id: "F-004",
    severity: "MEDIUM",
    wcagCriterion: "WCAG 3.3.2",
    description: "Form field lacks clear input guidance.",
    impact:
      "Increases input errors and task abandonment during submission flows.",
    suggestedFix: "Add helper text and attach a descriptive label to the field."
  },
  {
    id: "F-005",
    severity: "LOW",
    wcagCriterion: "WCAG 2.4.4",
    description: "Generic link text without context.",
    impact:
      "Screen readers announce ambiguous links, reducing clarity and navigation speed.",
    suggestedFix:
      'Replace labels like "click here" with meaningful, descriptive link text.'
  }
];

export const agentInsights: AgentInsight[] = [
  {
    id: "I-001",
    title: "Immediate risk for keyboard navigation",
    detail:
      "Missing visible focus indicators in key components can block critical flows such as login and checkout for users who do not use a mouse.",
    priority: "High"
  },
  {
    id: "I-002",
    title: "Visual content without textual equivalent",
    detail:
      "Images without alt text remove context and can hide essential information needed for user decision-making.",
    priority: "High"
  },
  {
    id: "I-003",
    title: "Recommended high-impact action for the next sprint",
    detail:
      "Standardize an automated accessibility checklist in CI to prevent regressions and reduce rework before release.",
    priority: "Medium"
  }
];
