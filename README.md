# AI Accessibility Agent

AI Accessibility Agent is a hackathon project focused on Shift-Left Accessibility.

The app simulates an AI agent that analyzes a GitHub repository URL and returns an accessibility report before code reaches production.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS v4

## Current Product Capabilities

- Dark and light themes with persistence
- Internationalization (English, Portuguese, Spanish) with persistence
- Modern analysis flow with animated progress pipeline
- Scenario-based mock analysis by repository URL
- Executive-style results dashboard
- Detailed findings with impact and remediation guidance
- Optional code remediation snippets (`Before` and `Suggested Fix`)
- AI insights panel with prioritized recommendations
- Custom project branding and favicons (no Vite branding)

## Scenario Routing by URL

The mock engine selects analysis profiles automatically based on the typed repository URL:

- Excellent Accessibility (`score 96`)
  - If URL contains: `accessible`, `a11y`, `inclusive`
- Poor Accessibility (`score 48`)
  - If URL contains: `legacy`, `old`, `admin`
- Average Accessibility (`score 84`)
  - Default when no keyword matches

## Analysis Pipeline Messages

During analysis, the UI runs progressive steps:

1. Reading repository structure...
2. Detecting React components...
3. Checking semantic HTML...
4. Evaluating keyboard navigation...
5. Validating color contrast...
6. Analyzing ARIA attributes...
7. Generating remediation guidance...

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

## Validation

Lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

## Demo Tips

- Open with theme set to dark for maximum visual impact.
- Use keyword-based URLs to quickly demo scenario switching:
  - `https://github.com/org/accessible-ui`
  - `https://github.com/org/legacy-admin-portal`
  - `https://github.com/org/product-web`
