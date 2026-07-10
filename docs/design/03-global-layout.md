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
