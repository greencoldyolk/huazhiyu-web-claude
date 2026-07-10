# 华之喻官网首页完整设计与 Angular 实现手册

# 00. Project context

## Business goal

The homepage must help a potential client understand the agency quickly and submit a new matter with minimal friction.

## Design goal

The approved direction is:

> modern technology company × professional service firm × editorial brand website

The page should feel designed and premium, but not flashy, gimmicky, or like a generic AI startup.

## Existing brand anchor

The current logo uses navy and yellow. The logo geometry can remain recognizable, but the website should reinterpret the palette as:

- deep ink indigo
- muted blue-violet
- soft amber/champagne accent

The amber accent is a small complementary signal, not a second dominant theme.

## Content discipline

The homepage information architecture is fixed at six sections. Existing university origins, team experience, business data, and partnership needs are evidence that content exists; they are not instructions to display all of it on the homepage.

Use placeholders until content is approved.

## Reference assets

- `assets/reference/current-logo.png`
- `assets/reference/approved-direction-mock.png`
- `assets/reference/wireframe-reference.png`

The mock is a visual direction reference, not a pixel-perfect implementation contract.


---

# 01. Architecture decisions

## Recommended frontend

Use the repository's existing Angular version if it is supported and healthy. Do not upgrade merely to match this document.

For a new project, use the current stable Angular release with:

- standalone components
- Angular Router
- Signals for local UI state
- strictly typed Reactive Forms for the inquiry form
- Angular SSR/hybrid rendering or prerendering for public routes
- SCSS plus CSS custom properties
- Angular CDK only when a behavior genuinely needs it

## Why Angular

The primary developer is experienced with Angular and TypeScript. The page does not gain enough from switching to React/Next.js to justify framework churn.

## Styling

Use:

- global CSS custom properties for design tokens
- SCSS for composition, pseudo-elements, masks, gradients, and responsive rules
- component-scoped styles
- a small number of global layout utilities

Do not combine Angular Material visual components, Tailwind, and large custom SCSS systems unless the repository already depends on them and migration is impractical.

## Component boundaries

Recommended granularity:

- one component per homepage section
- shared components only for repeated behavior or visual contracts
- do not split every title, subtitle, and icon into separate components
- do not build the whole page in a single oversized component

Suggested structure:

```text
src/app/
├── core/
│   ├── api/
│   ├── config/
│   ├── models/
│   └── services/
├── shared/
│   ├── components/
│   ├── directives/
│   └── icons/
├── layout/
│   ├── site-header/
│   └── site-footer/
├── pages/home/
│   ├── home.component.*
│   └── sections/
│       ├── hero-section/
│       ├── services-section/
│       ├── advantages-section/
│       ├── evidence-section/
│       ├── work-section/
│       └── inquiry-section/
└── app.routes.ts
```

## Rendering strategy

Public, mostly static routes should be prerendered where possible. Routes requiring request-time data may use SSR. Client hydration enables normal interaction after initial HTML delivery.

## State strategy

- Signals: transient UI state, e.g. header scrolled state, active advantage item, upload progress display, motion preference
- Reactive Forms: inquiry form model and validation
- Services: API communication, upload orchestration, configuration
- Avoid global state libraries for this homepage unless the existing app already requires one

## Animation strategy

1. CSS transitions/keyframes first
2. IntersectionObserver directive for viewport entry
3. GSAP only for a small number of coordinated sequences, such as the Hero layered visual

Do not introduce multiple animation libraries.

## Backend boundary

Preferred upload flow:

1. frontend requests a presigned upload target
2. browser uploads directly to OSS/object storage
3. frontend submits inquiry metadata and object key
4. database stores inquiry data and file metadata, not file binary

Do not proxy large files through the Angular rendering server.


---

# 02. Design tokens

Values below are implementation starting points. Final values must be tuned against browser screenshots.

## Color roles

```scss
:root {
  --ink-950: #071638;
  --ink-850: #12244d;
  --ink-700: #314164;
  --ink-550: #687493;

  --brand-indigo-950: #07164a;
  --brand-indigo-800: #122d78;
  --brand-blue-600: #315fd6;
  --brand-blue-500: #4e7cf0;
  --brand-violet-500: #7659e8;

  --surface-white: #ffffff;
  --surface-cool-50: #f8f9fd;
  --surface-cool-100: #f2f5fc;
  --surface-blue-100: #edf2ff;

  --amber-text: #a96d1f;
  --amber-line: #d6a14a;
  --amber-soft: #edca88;
  --amber-glow: rgb(222 165 70 / 0.20);
  --champagne-50: #fdfaf4;
  --champagne-100: #faf3e7;

  --border-soft: rgb(18 45 120 / 0.10);
  --border-medium: rgb(18 45 120 / 0.18);
  --focus-ring: rgb(78 124 240 / 0.30);

  --text-on-dark: #ffffff;
  --text-on-dark-muted: rgb(255 255 255 / 0.72);
}
```

## Amber boundary rules

Amber/champagne is a sparse accent.

Allowed:

- one Hero node or endpoint
- the special service card's small badge, line, local glow, or icon detail
- one timeline dot
- a subtle arc in the dark evidence section
- upload-zone hover sweep
- CTA highlight or button sheen

Not allowed:

- a full saturated yellow card
- yellow section backgrounds
- amber body copy
- amber borders on every card
- amber applied to all icons
- multiple large amber gradients in the same viewport

For the special service card, warm color should visually occupy no more than approximately 20% of the card. Most of the card remains white, warm white, or transparent.

## Typography

Use a modern Chinese sans-serif stack compatible with the deployment environment. Do not ship proprietary font files without explicit licensing.

```scss
:root {
  --font-sans: "Noto Sans SC", "PingFang SC", "Microsoft YaHei",
               system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  --font-size-hero: clamp(2.7rem, 5vw, 4.5rem);
  --font-size-h2: clamp(2rem, 3.2vw, 3rem);
  --font-size-card-title: clamp(1.2rem, 1.5vw, 1.5rem);
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
}
```

## Spacing

Use an 8px base rhythm.

```scss
:root {
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 3rem;
  --space-6: 4rem;
  --space-7: 6rem;
  --space-8: 8rem;
}
```

## Radius

- controls: 10–12px
- cards: 14–18px
- large CTA panel: 24–32px
- avoid pill shapes except small status chips or compact CTA

## Shadows

Keep shadows cool, broad, and low-opacity. Use at most three levels:

- subtle border lift
- card hover lift
- major form panel elevation

Avoid dark floating-box shadows.

## Motion constants

```scss
:root {
  --ease-standard: cubic-bezier(.2, .8, .2, 1);
  --ease-emphasized: cubic-bezier(.16, 1, .3, 1);
  --duration-fast: 160ms;
  --duration-standard: 240ms;
  --duration-reveal: 480ms;
}
```


---

# 03. Global layout

## Container

```scss
.site-container {
  width: min(1240px, calc(100% - 96px));
  margin-inline: auto;
}
```

Responsive side padding:

- desktop: 48–72px
- tablet: 32px
- mobile: 20px

Do not stretch content indefinitely on ultrawide screens.

## Header

Desktop height: 72–76px.  
Mobile height: approximately 64px.

Default:
- visually quiet
- white or nearly transparent background
- full logo on desktop
- no heavy shadow

Scrolled:
- 88–92% opaque white
- `backdrop-filter: blur(18px) saturate(140%)`
- one subtle bottom divider
- no size jump

## Section rhythm

Desktop vertical padding:
- ordinary section: 96–128px
- evidence section: 88–104px
- CTA section: 104–128px

Mobile:
- 64–80px

Internal relationships:
- heading to body: 16–24px
- intro to main content: 40–56px desktop, 28–36px mobile
- card gaps: 24–32px desktop, 12–16px mobile

## Background rhythm

1. Hero: white / very light atmospheric background
2. Services: light cool background
3. Advantages: white
4. Evidence: dark ink-indigo
5. Work: white / cool white
6. Inquiry: strong indigo-violet field with restrained amber highlight
7. Footer: dark

Do not place two heavy dark sections directly adjacent except CTA to Footer, where the CTA must still have a distinct internal panel and gradient boundary.

## Section transitions

Allowed:
- very light gradient fade
- curved or diagonal mask
- a thin line extending between sections
- a glow continuing across a boundary
- controlled overlap

Avoid decorative dividers that become a repeated motif in every section.


---

# 04. Shared components

Each component must implement default, hover, focus-visible, active, disabled, mobile, reduced-motion, and error states where relevant.

## Primary button

### Default
- ink-indigo background
- white label
- subtle inner highlight
- 10–12px radius
- no amber fill by default

### Hover
- translate up 1–2px
- slightly brighter edge or inner highlight
- arrow moves 3–4px
- no large glow

### Focus-visible
- 3px visible focus ring
- must remain visible on light and dark backgrounds

### Active
- return toward baseline
- reduce shadow

### Disabled
- no movement
- lower contrast
- clear disabled cursor and semantics

### Unique variation
The final submit button may use a restrained champagne-to-amber sheen, provided the surrounding CTA area already contains amber accents.

### Prohibited
- continuous shine animation
- orange/yellow button used as the site's general primary button
- pill shape with excessive radius

## Secondary text link

### Default
Plain text plus arrow or underline cue.

### Hover
Arrow shifts 3–4px or underline extends.

### Focus-visible
Visible outline or underline, not color-only.

## Service card

### Default
- white or translucent cool-white surface
- soft border
- no generic large icon
- number/category label, title, brief description, arrow
- subtle local geometry allowed

### Hover
- translate up 3px
- border becomes slightly more visible
- local highlight appears
- bottom line extends
- arrow shifts 4px
- duration 220–260ms

### Special card
The “patent application” placeholder card is the warm variation:
- champagne-white base, not yellow
- amber appears only in a local radial glow, small badge/icon detail, number, or bottom line
- warm area ≤ ~20% of visible card
- the card still reads as part of the cool system

### Prohibited
- full yellow background
- saturated orange border
- large gold icon
- making the special card look selected when it is not

## Form field

### Default
- translucent or white surface depending on section
- soft border
- label remains readable
- 50–54px control height desktop

### Hover
Slight border contrast increase.

### Focus
- clear focus ring
- border shifts to brand blue
- label and error remain stable; no layout jump

### Error
- accessible message text
- icon optional
- not color-only
- no shaking animation

### Disabled
Readable but clearly inactive.


## Textarea / matter description

### Default
- supports up to 500 Chinese characters
- visible label such as “事项说明” or placeholder text until final copy is approved
- desktop minimum height: 140–168px
- mobile minimum height: 132–152px
- resize behavior may be vertical only, or disabled if the layout already provides enough space
- character counter appears at the lower-right, e.g. `0 / 500`
- counter remains visually secondary

### Hover
Slight border contrast increase, consistent with other form fields.

### Focus
- clear brand-blue focus ring
- counter becomes slightly more visible
- no layout jump
- preserve line breaks

### Near limit
At approximately 450 characters, the counter may increase contrast.

### Limit reached
- prevent additional input beyond 500 characters
- do not show an error merely for reaching exactly 500
- if pasted content exceeds 500, truncate or reject consistently and explain the behavior accessibly

### Error
Use only for required/invalid business rules. Do not treat ordinary punctuation or line breaks as errors.

### Mobile
Full width; avoid a short single-line-height box. Keep the counter visible without covering content.

### Prohibited
- auto-growing to an unbounded height
- showing the 500-character field as a chat composer
- hiding the counter until an error occurs
- using placeholder text as the only accessible label

## Upload zone

### Default
- dashed or soft bordered region
- Word/PDF support placeholder
- no chatbot appearance
- clear optional status

### Hover
- border contrast increases
- one restrained amber/champagne sweep may pass once
- upload icon lifts 2px

### Drag active
- stronger brand-blue border
- local surface tint
- clear “drop here” message

### Uploading
- progress indicator
- prevent duplicate submission
- retain file name and size

### Success
- file name, type, size, remove/replace action

### Error
- reason and retry
- preserve form data

### Prohibited
- continuous scanning animation
- uploading directly through the Angular SSR process
- accepting unsupported types silently

## Section number

### Default
Large, low-contrast editorial number.

### Hover/active
May gain slight contrast only where the section is interactive.

### Prohibited
Do not make all section numbers bright amber.

## Evidence metric

### Default
Large fact/value, short explanation, vertical separators.

### Reveal
One-time count or fade if the content is genuinely numeric.

### Prohibited
Do not animate fabricated data or use counters merely for spectacle.

## Case panel

### Default
One large featured panel plus weaker secondary text entries.

### Hover
- local background texture shifts subtly
- detail line extends
- arrow shifts
- no large scale zoom

### Unique accent
A single amber timeline dot may connect featured and secondary work entries.


---

# 05. Homepage sections

## 01 Hero

### Purpose
State what kind of agency Huazhiyu is and lead to “submit a new matter”.

### Desktop layout
Approximately 6–7 columns for copy and 5–6 columns for the visual. Hero height roughly 640–720px depending on header and viewport.

### Default
- large two-line title
- one short phrase may use blue-to-violet gradient
- one short body paragraph
- one primary CTA and one low-emphasis text link at most
- right-side abstract layered information visual
- large quiet background area

### Pointer interaction
The layered visual may move 4–8px in coordinated depth layers. No dramatic rotation.

### Reveal
Copy and visual enter once with short stagger. Avoid long loading sequences.

### Unique visual
Layered translucent planes, thin paths, one or two nodes, local blur, restrained grid.

### Amber placement
One endpoint/node and one small base highlight only.

### Prohibited
- stock patent document illustration
- globe, shield, scale, gavel, DNA, robot, glowing orb
- visual heavier than the title
- more than one strongly colored phrase

## 02 Core services

### Purpose
Show what the agency can handle.

### Layout
Three columns × two rows on desktop; one column on mobile.

### Default
Six wide service cards with enough spacing.

### Hover
See service-card contract.

### Unique card
The first card uses the warm champagne variation.

### Amber placement
Only inside the special card's local details; no section-wide amber wash.

### Prohibited
- six cards compressed into one row
- six unrelated icons
- full yellow special card

## 03 Why Huazhiyu

### Purpose
Explain three differentiators.

### Layout
Left editorial intro, right interactive list. No three-card grid.

### Default
Three rows with numbers and separators.

### Hover
- current row gains contrast
- local horizontal light appears
- number shifts from outline/low contrast to solid
- other rows may reduce slightly, but remain readable

### Scroll behavior
Desktop intro may be sticky for 200–300px. Disable sticky behavior on narrow screens.

### Amber placement
None required. A tiny active marker is allowed but blue-violet is preferred.

## 04 Professional evidence

### Purpose
Provide 2–3 real facts supporting credibility.

### Layout
Full-width dark section; content remains within the global container.

### Default
Deep ink-indigo material background with very subtle noise, grid/coordinate lines, and three fact columns.

### Reveal
One-time stagger. Numeric count-up is optional and only for real numbers.

### Unique visual
A restrained large arc or horizon line in one corner.

### Amber placement
The arc may transition through muted amber at its endpoint.

### Prohibited
- bright sci-fi star field
- fake numbers
- three floating glass cards
- too many icons

## 05 Representative work

### Purpose
Show one featured work item and two weaker secondary items.

### Layout
8-column featured panel + 4-column secondary list, or comparable asymmetry.

### Default
Featured editorial panel with large number, category placeholder, title placeholder, short summary, detail link.

### Hover
Local texture shift, line extension, arrow movement.

### Unique element
One vertical timeline and one amber dot.

### Prohibited
- three equal case cards
- stock AI/legal photos
- carousel by default

## 06 Submit a new matter

### Purpose
Primary conversion function.

### Layout
Full-width focus background; one internal form panel. Desktop split approximately 4 columns intro / 8 columns form.

### Default
- strong indigo-to-violet field
- white or translucent form panel
- matter type
- contact fields
- one free-text matter description field, maximum 500 Chinese characters
- optional upload
- one submit button

### Focus/hover
Use shared form, textarea, and upload contracts.

### Unique visual
Subtle background lines and local glow; no extra content modules inside.

### Amber placement
- one corner glow
- optional submit-button sheen
- upload hover sweep
- not all three at maximum intensity simultaneously

### Prohibited
- chatbot bubbles
- FAQ inside form
- testimonials inside form
- step cards nested inside the form panel


---

# 06. Motion system

## Principles

- motion supports hierarchy and feedback
- static design must already look complete
- no motion should be required to understand content
- avoid continuous decorative loops
- all nonessential motion must respect reduced-motion preferences

## Level 1: global micro-interactions

Use CSS:
- card lift: 2–3px
- arrow shift: 3–5px
- border/background change
- button press
- focus ring
- header scroll state

## Level 2: viewport reveal

Use one IntersectionObserver-based Angular directive.

Suggested API:

```html
<section hzyReveal="fade-up">
<div hzyReveal="stagger-item">
```

Default:
- translateY 12–20px
- opacity 0 to 1
- 400–550ms
- stagger 50–80ms
- play once

Do not reveal every small line independently.

## Level 3: signature effects

Only:
- Hero layered visual/parallax
- evidence sequence/background
- work-panel local texture
- upload interaction

GSAP is optional. Add it only if timelines remain hard to maintain in CSS and plain TypeScript.

## Reduced motion

When `prefers-reduced-motion: reduce`:
- remove pointer parallax
- remove animated path drawing
- replace transforms with opacity-only changes or no reveal
- disable scanning sweeps
- keep focus and hover state changes immediate and accessible

## Performance

- animate transform and opacity where possible
- avoid layout-thrashing scroll handlers
- use passive listeners
- stop pointer work when Hero is offscreen
- do not load a large animation library for simple card hovers


---

# 07. Responsive and accessibility rules

## Breakpoints

Use content-driven breakpoints rather than device names. Starting points:

- compact mobile: < 480px
- mobile/tablet: 480–767px
- tablet: 768–1023px
- desktop: 1024–1439px
- wide desktop: ≥ 1440px

## Mobile transformations

### Header
Full logo only if legible; otherwise use an approved compact logo asset. Do not shrink bilingual logo text until unreadable.

### Hero
Stack copy above visual. Reduce visual complexity and pointer behavior. Keep title dominant.

### Services
Single column. Do not use two narrow cards per row.

### Advantages
Stack intro and list. Remove sticky behavior.

### Evidence
Stack facts with horizontal separators.

### Work
Featured panel first, secondary list after.

### Inquiry
Single-column form. Full-width submit button. Keep 20px outer padding and 20–24px panel padding.

## Accessibility

- semantic headings in correct order
- real buttons and links, not clickable divs
- keyboard-operable navigation and file picker
- `:focus-visible` for all interactive elements
- sufficient contrast
- errors linked with `aria-describedby`
- drag-and-drop upload must also have a standard file input
- progress must be announced appropriately
- motion preference respected
- no essential meaning conveyed only by amber/blue color
- ensure Chinese and English logo alt text is appropriate


---

# 08. Inquiry and upload flow

## Scope

The homepage supports:
- matter type selection
- contact information
- a free-text matter description of up to 500 Chinese characters
- optional Word/PDF upload
- submission
- confirmation or error

It is not an AI chatbot.

## Frontend form

Use strictly typed Reactive Forms.

Suggested model:

```ts
export interface InquiryFormValue {
  matterType: string;
  contactName: string;
  phone?: string;
  email?: string;
  description: string; // max 500 Chinese characters
  uploadedFiles: UploadedFileRef[];
}
```

At least one reliable contact method must be required; exact rule must be approved.


## Matter description field

- maximum length: 500 Chinese characters
- use a multiline textarea, not a chat-style composer
- preserve line breaks in the submitted payload
- show a live character counter
- exact required/optional status must be confirmed before production
- trim leading and trailing whitespace on submit, but do not collapse internal line breaks
- backend must enforce the same 500-character limit
- store as plain text; escape on output and never render as trusted HTML
- include the field in staff notifications and inquiry detail views

## Upload validation

Validate before upload:
- extension and MIME type
- file size
- file count
- duplicate file
- empty or corrupted filename
- user cancellation

Do not rely only on browser-supplied MIME type; backend must also validate metadata and storage callbacks.

## Preferred API flow

```text
POST /api/inquiries/uploads/presign
browser -> OSS/object storage
POST /api/inquiries
```

Presign response should include:
- upload URL or form fields
- object key
- expiration
- permitted content type
- maximum size

Final inquiry payload includes:
- form data
- object key
- original file name
- MIME type
- size
- optional checksum
- upload completion token if used

## Security and operations

To decide before production:
- maximum upload size
- allowed file count
- antivirus/malware scanning
- encryption and private ACL
- signed download access
- retention/deletion policy
- access logs
- rate limiting
- spam protection
- consent/privacy text
- staff notification route
- failure reconciliation when upload succeeds but inquiry save fails

## UX states

- idle
- validating
- requesting upload target
- uploading
- uploaded
- submitting inquiry
- success
- recoverable error
- terminal error

Preserve entered text when upload or submit fails.


---

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


---

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


---

# 11. Acceptance checklist

## Information architecture

- [ ] Exactly six main homepage sections
- [ ] Inquiry is the primary conversion action
- [ ] Inquiry is not a chatbot
- [ ] No invented metrics, cases, or people

## Visual hierarchy

- [ ] One primary focus per section
- [ ] Hero title remains stronger than visual
- [ ] Adjacent sections do not repeat identical layouts
- [ ] No more than two strong dark/gradient moments
- [ ] Static page works without motion

## Amber usage

- [ ] Amber appears only in approved small locations
- [ ] Special service card is warm white/champagne, not yellow
- [ ] Warm area on special card remains approximately ≤20%
- [ ] No large yellow section or generic gold theme
- [ ] Amber is echoed across the page, not isolated

## Components

- [ ] Every interactive component has default, hover, focus-visible, active, disabled states as applicable
- [ ] Error states do not cause layout jumps
- [ ] Keyboard interactions work
- [ ] Mobile states are deliberate, not scaled desktop states

## Motion

- [ ] CSS used for normal interaction
- [ ] Reveal runs once
- [ ] Pointer behavior stops offscreen
- [ ] Reduced motion supported
- [ ] No continuous decorative loops

## Responsive

- [ ] No horizontal overflow at 390px
- [ ] Services become one column
- [ ] Sticky advantage intro disabled on small screens
- [ ] Evidence facts stack cleanly
- [ ] Inquiry form becomes one column
- [ ] Logo remains legible

## Inquiry/upload

- [ ] Typed Reactive Forms
- [ ] Clear validation
- [ ] At least one contact method required
- [ ] Matter description supports up to 500 Chinese characters with frontend and backend enforcement
- [ ] Character counter is visible and accessible
- [ ] Direct object-storage upload
- [ ] Progress, retry, remove/replace
- [ ] Metadata saved separately from file binary
- [ ] Private access and retention reviewed
- [ ] Rate limiting and abuse handling reviewed

## Engineering

- [ ] Phase 0 audit completed
- [ ] Build/lint/tests pass
- [ ] Browser-only APIs are SSR-safe
- [ ] No unnecessary framework/library migration
- [ ] Required screenshots attached
- [ ] Changes committed at each phase boundary


---
