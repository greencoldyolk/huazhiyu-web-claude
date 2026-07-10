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
