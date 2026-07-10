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
