import type {
  AgentInsight,
  Finding,
  ReportSummary
} from "../types/accessibility";

export type AccessibilityScenarioKey =
  | "excellent"
  | "average"
  | "poor"
  | "codeSnippet";

export interface AccessibilityScenario {
  key: AccessibilityScenarioKey;
  summary: ReportSummary;
  findings: Finding[];
  insights: AgentInsight[];
}

export const SAMPLE_CODE_SNIPPET = `![](/banner.png)

<button>Enviar</button>

<input id="nome" />

<a href="/checkout">click here</a>

.muted-text {
  color: #94a3b8;
  background: #cbd5e1;
}`;

const scenarios: Record<
  Exclude<AccessibilityScenarioKey, "codeSnippet">,
  AccessibilityScenario
> = {
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

const snippetFindingTemplates: Finding[] = [
  {
    id: "CS-001",
    severity: "HIGH",
    wcagCriterion: "WCAG 1.1.1",
    description: "Image found without meaningful alternative text.",
    impact: "Screen reader users cannot understand what the image represents.",
    suggestedFix: "Provide a descriptive alt attribute for informative images.",
    beforeCode: "![](/banner.png)",
    suggestedCode: "![Banner principal](/banner.png)"
  },
  {
    id: "CS-002",
    severity: "HIGH",
    wcagCriterion: "WCAG 4.1.2",
    description: "Icon-only button is missing an accessible name.",
    impact:
      "Assistive technologies may announce the control as an unnamed button.",
    suggestedFix:
      "Add aria-label or visible text that clearly describes the action.",
    beforeCode: "<button>Enviar</button>",
    suggestedCode: '<button aria-label="Enviar formulário">Enviar</button>'
  },
  {
    id: "CS-003",
    severity: "MEDIUM",
    wcagCriterion: "WCAG 1.3.1",
    description: "Form input is missing a programmatically associated label.",
    impact:
      "Screen reader users may hear an unlabeled field and lose form context.",
    suggestedFix: "Associate a visible label using htmlFor/id.",
    beforeCode: '<input id="nome" />',
    suggestedCode: '<label htmlFor="nome">Nome</label>\n<input id="nome" />'
  },
  {
    id: "CS-004",
    severity: "LOW",
    wcagCriterion: "WCAG 2.4.4",
    description: "Generic link text such as click here was detected.",
    impact: "Users navigating by link lists lose context about destination.",
    suggestedFix:
      "Replace generic wording with destination-specific link text.",
    beforeCode: '<a href="/checkout">click here</a>',
    suggestedCode: '<a href="/checkout">View checkout details</a>'
  },
  {
    id: "CS-005",
    severity: "MEDIUM",
    wcagCriterion: "WCAG 1.4.3",
    description: "Potential low-contrast color combination detected in CSS.",
    impact: "Users with low vision may struggle to read foreground content.",
    suggestedFix:
      "Increase text-to-background contrast ratio to at least 4.5:1.",
    beforeCode: ".muted-text { color: #94a3b8; background: #cbd5e1; }",
    suggestedCode: ".muted-text { color: #334155; background: #f8fafc; }"
  }
];

const snippetInsightsTemplate: AgentInsight[] = [
  {
    id: "CS-I-001",
    title: "Critical semantic gaps found in interactive UI",
    detail:
      "The snippet includes controls that are not fully perceivable or operable with assistive technologies, requiring immediate fixes.",
    priority: "High"
  },
  {
    id: "CS-I-002",
    title: "Quick wins available with low implementation risk",
    detail:
      "Most issues can be resolved by adding semantic attributes and replacing non-semantic patterns with accessible HTML elements.",
    priority: "Medium"
  },
  {
    id: "CS-I-003",
    title: "Recommended next step",
    detail:
      "Add a snippet-level accessibility checklist in code review to prevent recurring keyboard and label issues.",
    priority: "Low"
  }
];

const snippetPatternRules: Array<{ id: string; pattern: RegExp }> = [
  { id: "CS-001", pattern: /!\[[^\]]*\]\([^)]*\)|<img\b(?![^>]*\balt=)/i },
  {
    id: "CS-002",
    pattern:
      /<button\b(?![^>]*(aria-label|aria-labelledby))[^>]*>[\s\S]*?<\/button>/i
  },
  {
    id: "CS-003",
    pattern: /<input\b(?![^>]*(aria-label|aria-labelledby))[^>]*>/i
  },
  {
    id: "CS-004",
    pattern: />\s*(click here|clique aqui|haz clic aqu[ií])\s*</i
  },
  {
    id: "CS-005",
    pattern:
      /(color\s*:\s*#(?:9[0-9a-f]{5}|a[0-9a-f]{5}|b[0-9a-f]{5})\s*;[^\n{}]*background\s*:\s*#(?:c[0-9a-f]{5}|d[0-9a-f]{5}|e[0-9a-f]{5}|f[0-9a-f]{5}))|(text-(slate|gray)-[34]00)/i
  }
];

const excellentKeywords = ["accessible", "a11y", "inclusive"];
const poorKeywords = ["legacy", "old", "admin"];

export function resolveScenarioKeyByUrl(
  url: string
): Exclude<AccessibilityScenarioKey, "codeSnippet"> {
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

function buildSnippetFindings(snippet: string): Finding[] {
  const normalizedSnippet = snippet.trim();

  const matchedIds = snippetPatternRules
    .filter(rule => rule.pattern.test(normalizedSnippet))
    .map(rule => rule.id);

  if (!matchedIds.length) {
    return [
      {
        id: "CS-006",
        severity: "LOW",
        wcagCriterion: "WCAG 2.4.6",
        description: "No high-risk issue pattern was detected in this snippet.",
        impact:
          "The code appears healthier, but manual review is still needed for complete accessibility coverage.",
        suggestedFix:
          "Keep semantic HTML and run automated checks before merging.",
        beforeCode: normalizedSnippet.slice(0, 240),
        suggestedCode:
          "Continue enforcing semantic markup and add automated accessibility checks in CI."
      }
    ];
  }

  return snippetFindingTemplates
    .filter(item => matchedIds.includes(item.id))
    .map(item => {
      if (item.id === "CS-001") {
        const markdownImage =
          normalizedSnippet.match(/!\[[^\]]*\]\([^)]*\)/i)?.[0];
        const markdownImageSuggested = markdownImage
          ? markdownImage.replace(/!\[[^\]]*\]/, "![Banner principal]")
          : undefined;

        return {
          ...item,
          beforeCode:
            markdownImage ??
            normalizedSnippet.match(/<img\b[^>]*>/i)?.[0] ??
            item.beforeCode,
          suggestedCode: markdownImageSuggested ?? item.suggestedCode
        };
      }

      if (item.id === "CS-002") {
        return {
          ...item,
          beforeCode:
            normalizedSnippet.match(/<button\b[\s\S]*?<\/button>/i)?.[0] ??
            item.beforeCode
        };
      }

      if (item.id === "CS-003") {
        return {
          ...item,
          beforeCode:
            normalizedSnippet.match(/<input\b[^>]*>/i)?.[0] ?? item.beforeCode
        };
      }

      if (item.id === "CS-004") {
        return {
          ...item,
          beforeCode:
            normalizedSnippet.match(/<a\b[\s\S]*?>([\s\S]*?)<\/a>/i)?.[0] ??
            item.beforeCode
        };
      }

      return item;
    });
}

export function getScenarioBySnippet(snippet: string): AccessibilityScenario {
  const findings = buildSnippetFindings(snippet);
  const criticalIssues = findings.filter(
    item => item.severity === "HIGH"
  ).length;
  const mediumIssues = findings.filter(
    item => item.severity === "MEDIUM"
  ).length;
  const lowIssues = findings.filter(item => item.severity === "LOW").length;

  const weightedPenalty =
    criticalIssues * 12 + mediumIssues * 6 + lowIssues * 2;
  const score = Math.max(42, 98 - weightedPenalty);

  return {
    key: "codeSnippet",
    summary: {
      score,
      criticalIssues,
      mediumIssues,
      lowIssues,
      analyzedFiles: 1
    },
    findings,
    insights: snippetInsightsTemplate
  };
}

export const defaultScenario = scenarios.average;
