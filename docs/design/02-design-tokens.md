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
