import type {
  AgentInsight,
  Finding,
  ReportSummary
} from "../types/accessibility";

export type AccessibilityScenarioKey = "excellent" | "average" | "poor";

export interface AccessibilityScenario {
  key: AccessibilityScenarioKey;
  summary: ReportSummary;
  findings: Finding[];
  insights: AgentInsight[];
}

const scenarios: Record<AccessibilityScenarioKey, AccessibilityScenario> = {
  excellent: {
    key: "excellent",
    summary: {
      score: 96,
      criticalIssues: 0,
      mediumIssues: 2,
      lowIssues: 5,
      analyzedFiles: 142
    },
    findings: [
      {
        id: "EX-001",
        severity: "MEDIUM",
        wcagCriterion: "WCAG 1.4.3",
        description:
          "Secondary badges have borderline contrast in disabled state.",
        impact:
          "Low-vision users may struggle to read less prominent status labels.",
        suggestedFix:
          "Increase text color contrast for disabled badge variants to remain above 4.5:1."
      },
      {
        id: "EX-002",
        severity: "MEDIUM",
        wcagCriterion: "WCAG 3.3.2",
        description: "Search input helper text appears only after blur.",
        impact:
          "Users with cognitive load may miss expected format until after an error.",
        suggestedFix:
          "Display helper guidance before input interaction and keep it visible."
      },
      {
        id: "EX-003",
        severity: "LOW",
        wcagCriterion: "WCAG 2.4.4",
        description: "One link in footer uses generic wording.",
        impact:
          "Screen reader users lose context when navigating by link list.",
        suggestedFix:
          "Rename the link with a descriptive destination-specific label."
      },
      {
        id: "EX-004",
        severity: "LOW",
        wcagCriterion: "WCAG 1.3.1",
        description: "A decorative icon lacks aria-hidden in one card.",
        impact: "Assistive technologies may announce non-informative content.",
        suggestedFix:
          "Set aria-hidden=true for icons that do not convey semantic meaning."
      },
      {
        id: "EX-005",
        severity: "LOW",
        wcagCriterion: "WCAG 2.4.6",
        description: "Heading hierarchy skips one level in optional modal.",
        impact:
          "Screen reader heading navigation becomes slightly less predictable.",
        suggestedFix:
          "Align heading levels sequentially from h2 to h3 where appropriate."
      }
    ],
    insights: [
      {
        id: "EX-I-001",
        title: "Strong baseline with low remediation cost",
        detail:
          "The repository already follows robust semantic and keyboard practices. Remaining issues are mostly polish-level and can be addressed within one sprint.",
        priority: "Low"
      },
      {
        id: "EX-I-002",
        title: "Prevent regression through CI safeguards",
        detail:
          "Add contrast and aria lint checks to CI to preserve current quality as the codebase scales.",
        priority: "Medium"
      },
      {
        id: "EX-I-003",
        title: "Promote this repo as internal reference",
        detail:
          "Use this implementation as a blueprint for new teams adopting shift-left accessibility practices.",
        priority: "Low"
      }
    ]
  },
  average: {
    key: "average",
    summary: {
      score: 84,
      criticalIssues: 5,
      mediumIssues: 12,
      lowIssues: 18,
      analyzedFiles: 87
    },
    findings: [
      {
        id: "F-000",
        severity: "HIGH",
        wcagCriterion: "WCAG 2.1.1 Keyboard",
        description:
          "Interactive menu cannot be accessed using keyboard navigation.",
        impact:
          "Users who cannot use a mouse are blocked from accessing primary navigation.",
        suggestedFix:
          "Enable keyboard support for all menu interactions and preserve a visible focus state in each navigation step.",
        beforeCode:
          '<button onClick={openMenu}>Menu</button>\n<div className="menu">...</div>',
        suggestedCode:
          '<button\n  onClick={openMenu}\n  aria-haspopup="true"\n  aria-expanded={isOpen}\n  onKeyDown={handleMenuKeyDown}\n>\n  Menu\n</button>\n<div role="menu">...</div>'
      },
      {
        id: "F-001",
        severity: "HIGH",
        wcagCriterion: "WCAG 1.1.1",
        description: "Image missing alt text.",
        impact: "Screen reader users cannot understand product images.",
        suggestedFix:
          "Add an alt attribute with meaningful context for each product image.",
        beforeCode: "<img src={product.image} />",
        suggestedCode:
          '<img src={product.image} alt={product.name + " package photo"} />'
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
        suggestedFix:
          "Add helper text and attach a descriptive label to the field."
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
    ],
    insights: [
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
    ]
  },
  poor: {
    key: "poor",
    summary: {
      score: 48,
      criticalIssues: 18,
      mediumIssues: 27,
      lowIssues: 11,
      analyzedFiles: 203
    },
    findings: [
      {
        id: "PO-001",
        severity: "HIGH",
        wcagCriterion: "WCAG 2.1.1 Keyboard",
        description: "Primary sidebar cannot be opened or closed via keyboard.",
        impact:
          "Keyboard-only and switch-device users are blocked from accessing core sections.",
        suggestedFix:
          "Support Enter, Space and Escape for sidebar toggle and trap focus only when expanded."
      },
      {
        id: "PO-002",
        severity: "HIGH",
        wcagCriterion: "WCAG 1.3.1",
        description:
          "Form controls are visually labeled but not programmatically associated.",
        impact:
          "Screen reader users hear unlabeled inputs, making form completion unreliable.",
        suggestedFix:
          "Link each input to a unique label using htmlFor/id pairs.",
        beforeCode: '<label>Email</label>\n<input type="email" name="email" />',
        suggestedCode:
          '<label htmlFor="email">Email</label>\n<input id="email" type="email" name="email" />'
      },
      {
        id: "PO-003",
        severity: "HIGH",
        wcagCriterion: "WCAG 1.1.1",
        description:
          "Dashboard charts are rendered as images without text alternatives.",
        impact:
          "Assistive technology users miss critical performance information entirely.",
        suggestedFix:
          "Provide equivalent summary tables or aria-describedby references for every chart."
      },
      {
        id: "PO-004",
        severity: "HIGH",
        wcagCriterion: "WCAG 2.4.7",
        description: "Focus indicator is fully removed on all button variants.",
        impact:
          "Users navigating by keyboard cannot determine current interaction target.",
        suggestedFix:
          "Restore visible focus styles using :focus-visible with strong contrast."
      },
      {
        id: "PO-005",
        severity: "MEDIUM",
        wcagCriterion: "WCAG 1.4.3",
        description:
          "Body text contrast falls below minimum in multiple screens.",
        impact: "Low-vision users experience fatigue and incomplete reading.",
        suggestedFix:
          "Adopt tokenized color pairs validated against WCAG AA thresholds."
      },
      {
        id: "PO-006",
        severity: "MEDIUM",
        wcagCriterion: "WCAG 4.1.2",
        description:
          "Custom dropdowns lack role, state, and keyboard semantics.",
        impact:
          "Assistive technologies cannot interpret expanded/collapsed state reliably.",
        suggestedFix:
          "Apply ARIA combobox pattern and announce state changes properly."
      }
    ],
    insights: [
      {
        id: "PO-I-001",
        title: "Critical barriers impact primary navigation",
        detail:
          "Keyboard inaccessibility is preventing complete task flows, creating immediate exclusion risk and potential compliance exposure.",
        priority: "High"
      },
      {
        id: "PO-I-002",
        title: "Accessibility debt is concentrated in shared UI primitives",
        detail:
          "Fixing labels, focus, and semantic roles in core components will remove a large portion of repeated failures across screens.",
        priority: "High"
      },
      {
        id: "PO-I-003",
        title: "Recommended recovery plan",
        detail:
          "Create an accessibility hardening sprint: patch keyboard blockers first, then automate semantic and contrast checks in CI.",
        priority: "Medium"
      }
    ]
  }
};

const excellentKeywords = ["accessible", "a11y", "inclusive"];
const poorKeywords = ["legacy", "old", "admin"];

export function resolveScenarioKeyByUrl(url: string): AccessibilityScenarioKey {
  const normalizedUrl = url.toLowerCase();

  if (excellentKeywords.some(keyword => normalizedUrl.includes(keyword))) {
    return "excellent";
  }

  if (poorKeywords.some(keyword => normalizedUrl.includes(keyword))) {
    return "poor";
  }

  return "average";
}

export function getScenarioByUrl(url: string): AccessibilityScenario {
  return scenarios[resolveScenarioKeyByUrl(url)];
}

export const defaultScenario = scenarios.average;
