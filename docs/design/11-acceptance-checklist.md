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
