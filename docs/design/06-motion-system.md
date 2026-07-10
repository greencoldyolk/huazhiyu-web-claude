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
