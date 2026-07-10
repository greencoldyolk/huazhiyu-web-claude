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
