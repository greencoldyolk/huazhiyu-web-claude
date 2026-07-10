# 10. New full-stack developer audit

This section reviews the plan as if the developer has never seen the project.

## What is immediately clear

- The homepage has one business goal: new-matter submission.
- The six-section structure is fixed.
- The design direction is defined without requiring final copy.
- Angular remains the frontend framework.
- Styling and interaction priorities are clear.
- Upload architecture avoids sending large files through the rendering server.

## What a new developer still needs from the repository owner

1. Existing repository URL and branch strategy
2. Current Angular/Node versions
3. Current hosting and deployment topology
4. Whether SSR is currently supported by the host
5. Existing API and authentication conventions
6. OSS provider, region, bucket, custom domain, CORS, and credential strategy
7. Database choice and schema ownership
8. Who receives inquiry notifications
9. Exact form fields and validation rules, including whether the 500-character matter description is required
10. File count, size, retention, malware scanning, and privacy policy
11. Approved final copy, metrics, and representative work
12. Final logo assets in SVG and monochrome variants
13. Browser support floor
14. Analytics/consent requirements
15. Whether Chinese-only or bilingual pages are required

## Risks found

### 1. Mock-derived overimplementation
Risk: treating generated mock details as exact design requirements.

Mitigation: use token and behavior documents as source of truth; treat mock as direction only.

### 2. Premature framework migration
Risk: upgrading Angular or introducing new libraries before inspecting existing code.

Mitigation: Phase 0 is mandatory.

### 3. Over-animation
Risk: using GSAP for ordinary hover states or adding continuous effects.

Mitigation: CSS first; one main Hero effect.

### 4. Amber misuse
Risk: turning “premium accent” into widespread gold/yellow theming.

Mitigation: explicit amber area limits and allowed locations.

### 5. Upload security gap
Risk: direct upload implemented without server-side validation, private ACL, retention, scanning, or rate limiting.

Mitigation: Phase 5 security checklist is blocking.

### 6. SSR/browser API conflicts
Risk: Hero or pointer code directly accesses `window` during server render.

Mitigation: isolate browser-only behavior, guard execution, and test prerender/SSR.

### 7. Mobile simplification too late
Risk: desktop visual is built first in a way that cannot degrade gracefully.

Mitigation: Phase 2 requires desktop and mobile before effects.

### 8. Content dependency
Risk: layout depends on unrealistic placeholder lengths.

Mitigation: define copy-length budgets and test long Chinese strings.

## Architecture verdict

The proposed Angular approach is appropriate and proportionate. It avoids framework churn, keeps visual control in SCSS, limits animation dependencies, and separates the upload system from the public rendering layer.

The project is ready to enter Phase 0, but not Phase 5, until operational and security decisions are supplied.

## Recommended first Codex prompt

```text
Read AGENTS.md and docs/design/00 through 11.

Perform Phase 0 only.

Inspect the current repository and report:
- Angular, TypeScript, Node and build versions
- standalone vs NgModule structure
- rendering strategy
- route structure
- styling dependencies
- animation dependencies
- form approach
- backend/API structure
- existing upload/storage implementation
- build, lint and test status

Compare the repository against docs/design/01-architecture-decisions.md.
Propose the minimum-change Phase 1 plan.
Do not change code yet.
```
