# AGENTS.md

You are implementing the Wuhan Huazhiyu Intellectual Property Agency website homepage.

## Read first

Read all files in `docs/design/` in numeric order before making homepage changes.

## Non-negotiable rules

- Implement one phase at a time.
- Do not invent copy, people, metrics, case names, partner names, colors, or visual motifs.
- Preserve the approved six-section information architecture.
- Do not turn the inquiry form into a chatbot.
- Do not introduce Angular Material visual components unless explicitly approved.
- Prefer SCSS and CSS custom properties over utility-class-heavy styling.
- Prefer CSS for hover and focus effects; use JavaScript only where CSS cannot express the interaction cleanly.
- Keep amber/champagne accents sparse and semantic.
- Do not use large yellow card backgrounds.
- Do not add generic legal imagery such as gavels, scales, shields, globes, DNA, robots, or stock “AI orbs”.
- Every animation must have a reduced-motion fallback.
- Do not implement later phases early.

## Before coding

1. Inspect the existing repository.
2. Report Angular version, build tooling, current rendering mode, routing, form approach, backend integration, and any existing design system.
3. Compare the repository with `docs/design/01-architecture-decisions.md`.
4. Report conflicts and propose the minimum migration path.
5. Do not rewrite working infrastructure without a concrete reason.

## After each phase

- List changed files.
- Explain implementation decisions.
- Report build, lint, and test results.
- Include screenshots at required breakpoints.
- Stop for review before starting the next phase.
