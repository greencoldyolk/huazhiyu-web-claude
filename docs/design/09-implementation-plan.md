# 09. Detailed implementation plan

## Phase 0 — Repository audit

### Goal
Understand the existing Angular and backend project before changing architecture.

### Tasks
- identify Angular and Node versions
- inspect standalone/NgModule structure
- inspect SSR/CSR/prerender configuration
- inspect routes and hosting constraints
- inspect existing CSS, Material, Tailwind, or animation dependencies
- inspect backend, API, and OSS code
- run current build/tests

### Deliverable
Audit report and minimum-change migration proposal.

### Prohibited
No visual redesign.

## Phase 1 — Foundation

### Goal
Establish stable design and project foundations.

### Tasks
- tokens
- reset
- typography
- container
- breakpoints
- motion constants
- Header/Footer shells
- route rendering decision

### Acceptance
- blank/skeleton page renders at all target widths
- no horizontal overflow
- token demo or story page optional
- build passes

### Prohibited
No final sections, Hero visual, form logic, or upload.

## Phase 2 — Static responsive homepage

### Goal
Implement the six sections with placeholders.

### Acceptance
- layout matches section specifications
- desktop and mobile screenshots supplied
- card/container count remains controlled
- no invented content

### Prohibited
No signature animation, API calls, or upload.

## Phase 3 — Shared interactions

### Goal
Implement consistent states.

### Tasks
- buttons
- links
- service card
- advantages list
- form fields
- upload-zone shell
- header scroll state
- reveal directive
- focus-visible and errors

### Acceptance
Keyboard and pointer states work. Reduced motion fallback exists.

## Phase 4 — Signature effects

### Goal
Add visual polish without damaging performance or hierarchy.

### Tasks
- Hero layered CSS/SVG visual
- optional pointer parallax
- evidence material
- work-panel texture
- amber accents

### Acceptance
Static screenshots still look complete. Effects remain subtle. No large yellow surfaces.

## Phase 5 — Inquiry and OSS

### Goal
Implement production-ready submission.

### Acceptance
- typed form
- client and server validation
- direct upload
- progress, retry, cancel/remove
- safe error handling
- no file binary stored in app database
- security checklist reviewed

## Phase 6 — QA

### Required viewports
390, 768, 1024, 1440, 1920 widths.

### Required checks
- Chrome, Safari, Edge
- keyboard
- screen-reader basics
- reduced motion
- slow network
- upload failure
- SSR/SSG HTML
- performance and layout shifts
- production logging and error visibility
