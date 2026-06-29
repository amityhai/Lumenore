# Lumenore — Design Style Guidelines

> Extracted from `home.html` and `assets/css/v2o/index.css` (last updated June 2026).
> This document records the **existing** design system as built — colors, type, spacing, components, and patterns — so it can be reused consistently across all pages. It is documentation, not a redesign proposal.

---

## 1. Overall Design Style & Visual Tone

A modern **enterprise SaaS / BI** aesthetic with a premium, editorial feel.

- **Dark-first hero, light mid-page, dark finale.** The page opens on a deep royal navy canvas (`#051A3C`) with layered gradient orbs and particle animations. Mid-page sections (Personas, Pricing, Success, Testimonials) use clean white. The page closes on a violet-to-navy gradient finale.
- **Layered ambient glow.** Hero uses radial-gradient orbs (violet, cyan, blue) with `filter: blur(40–125px)`, a grain texture overlay at 6% opacity, and 12 small floating particles — all `aria-hidden`. Product and persona sections have their own contained ambient glows.
- **Editorial serif headlines** (Fraunces, light weight) paired with a **clean sans body** (Inter). The serif/sans contrast is the core brand typographic signature.
- **Subtle motion.** Infinite logo marquee, scroll-driven product switching, hover lifts, `orbFloat` keyframe animations, and staggered persona scene card entries.
- **Color-coded products.** Each product gets its own CSS accent trio: Violet = Ask Me · Royal Blue = Insights · Turquoise = Data Magnet. All three are driven by `--pd-accent`, `--pd-accent-bg`, `--pd-accent-border` CSS variables on `.product-detail`.
- **Navigation is static (not sticky).** `.site-top` uses `position: relative` — the hello bar and nav scroll away with the page.

**Tone keywords:** trustworthy, intelligent, premium, calm, data-driven.

---

## 2. Color Palette

All colors are defined as CSS custom properties on `:root` using the Figma-export pattern `var(--Name, #fallback)`.

### Royal Blue ramp (primary brand)
| Token | HEX | Usage |
|---|---|---|
| `--Royal-Blue-Blue-50` | `#e7eef8` | Icon tile bg, pill bg, active testimonial bg |
| `--Royal-Blue-Blue-150` | `#b8d0fd` | Quote-mark accent |
| `--Royal-Blue-Blue-200` | `#9fbae4` | Arc/divider lines at low opacity |
| `--Royal-Blue-Blue-350` | `#5886d0` | Gradient bridge stop |
| `--Royal-Blue-Blue-400` | `#4075c9` | Gradient mid-stops, `--Explore-Button` center |
| `--Royal-Blue-Blue-450` | `#2863c3` | Insights product accent (`--pd-accent`) |
| `--Royal-Blue-Blue-500` | `#0e48a5` | Primary action / link / accent |
| `--Royal-Blue-Blue-750` | `#07214b` | Hello bar background |
| `--Royal-Blue-Blue-850` | `#04142d` | Dark gradient stops |
| `--Royal-Blue-Blue-900` | `#051A3C` | **Page base background / nav / hero stage** |

> **Note:** The hero and site-top background is `#051A3C` (Royal Navy), not the deeper `#030d1e` used in older builds.

### Violet ramp (secondary brand / Ask Me)
| Token | HEX | Usage |
|---|---|---|
| `--Violet-Violet-50` | `#f0ebf7` | Ask Me pill bg |
| `--Violet-Violet-250` | `#b499d7` | Feature-card border |
| `--Violet-Violet-450` | `#7747b6` | Ask Me product accent, `--Explore-Button` start, `Request a Demo` border |
| `--Violet-Violet-500` | `#55298e` | Active product accent, stat block, bottom glow |
| `--Violet-Violet-550` | `#4d2580` | Page-finale gradient top |

### Sky Blue / Turquoise (highlight / Data Magnet)
| Token | HEX | Usage |
|---|---|---|
| `--SkyBlue-SkyBlue-500` | `#12b6f8` | Hover/link highlight, footer headings, hello bar hover |
| `--Turquoise-SkyBlue-500` | `#1ca9c9` | Data Magnet accent (`--pd-accent`), search border, `--Explore-Button` end |

### Core / Neutrals
| Token | HEX | Usage |
|---|---|---|
| `--Base-White` | `#fcfcfc` | Primary text on dark / white surfaces |
| `--Grey-Grey-200` | `#f7f7f7` | Feature-card bg |
| `--Grey-Grey-600` | `#bbbbbb` | Tab borders |
| `--Grey-Grey-800` | `#5e5e5e` | Muted text |
| `--Map-Grey` | `#eaeaea` | Card borders, chip text, FAQ answer text |
| `--cool-101828` | `#101828` | Default heading color on light backgrounds |
| `#4a5568` | — | **Section subtitle text** (`section-sub`). Replaces former `#6a7282` — passes WCAG AA 4.5:1 on white. |

> **Contrast note:** `#6a7282` (the former cool-grey) was ~4.36:1 on white and fails WCAG AA. All `section-sub` instances now use `#4a5568` (~6.5:1). Do not revert to `#6a7282` for body/subtitle text on white backgrounds.

### Blue-grey (hero search / dashboard mock)
| Token | HEX | Usage |
|---|---|---|
| `--blueGray-200` | `#E2E8F0` | Placeholder text |
| `--blueGray-600` | `#475569` | Source bubble bg |
| `--blueGray-700` | `#334155` | Icon/tools button bg |

### Gradient tokens
| Token | Definition | Usage |
|---|---|---|
| `--AI-Agents-Text` | `linear-gradient(83.02deg, #4AE7FF 51.42%, #4075C9 63.25%, #E879F9 76.03%)` | "AI Agents" gradient headline text |
| `--Explore-Button` | `linear-gradient(270deg, #7747b6 0%, #4075c9 50.7%, #1ca9c9 100%)` | **All primary gradient buttons** |
| `--Search-Glow` | `linear-gradient(86.83deg, #22d3ee 0.77%, #3b82f6 50%, #e879f9 99.23%)` | Blurred glow behind hero search |

**Page backgrounds:** Hero is `#051A3C`. The `page-finale` block uses `linear-gradient(180deg, #4D2580 0%, #031430 30%, #000D22 100%)`.

---

## 3. Typography

Two families loaded from Google Fonts:

```
Fraunces  — opsz 9..144, weights 300/400/500/600  (serif, headings)
Inter     — weights 300/400/500/600/700           (sans, body/UI)
```

### Family assignment
- **`h1–h4`** → `'Fraunces', serif`, `font-weight: 300`, default color `#101828` on light / `#fcfcfc` on dark.
- **`h5, h6, p, a, li, button`** → `'Inter', sans-serif`.
- **`body`** → Inter, color `--Base-White`, `-webkit-font-smoothing: antialiased`.

### Type scale (as used in home.html)
| Role | Font | Size | Line-height | Weight | Notes |
|---|---|---|---|---|---|
| Hero H1 | Fraunces | 52px | 62px | 300 | On dark hero bg |
| Section H2 | Fraunces | 44px | 54px | 300 | All section headings |
| H3 / product heading | Fraunces | 28–32px | 36–40px | 300 | Product, pricing, footer CTA |
| H4 / card title | Inter | 18–20px | 28px | 600 | Pricing aside, footer CTA sub |
| H5 / feature title | Inter | 16–17px | 24px | 600 | Feature cards |
| H6 / nav section title | Inter | 11px | 16px | 700 uppercase | Mega menu column headers |
| Section sub (`section-sub`) | Inter | 15–17px | 28–30px | 400 | Color `#4a5568`. Slightly larger than body for hierarchy. |
| Hero sub | Inter | 18–20px | 30px | 400 | On dark bg, `rgba(255,255,255,.8)` |
| Body / paragraph | Inter | 15px | 26px | 400 | — |
| Eyebrow labels | Inter | 11–12px | 16.5px | 700 | Uppercase, `letter-spacing: .12em`, brand color |
| Buttons | Inter | 13.5–15px | 1.2–25px | 700 | All CTA buttons |
| Nav links | Inter | 15px | 26px | 400 | `rgba(255,255,255,.9)` |
| Chips / pills | Inter | 13px | 16px | 500 | `pd-chip` uses weight 500 for readability at small size |
| Captions / labels | Inter | 12px | 16px | 400 | — |
| Legal / footer small | Inter | 13–14px | 20px | 400 | — |

**Letter-spacing:** Eyebrows/uppercase labels use `letter-spacing: .12em`. Most body text uses default or slight negative (`-.15px` to `-.5px`).

---

## 4. Layout & Grid System

- **Container:** `.container { max-width: 1500px; margin: 0 auto; padding: 0 32px; }`
- **Inner content blocks** cap at ~1280px where specified; the container itself is 1500px.
- **Full-bleed bars** (hello bar, header, footer) use background full-width while content aligns to the container.

### CSS Grid columns per section
| Section | `grid-template-columns` | Gap |
|---|---|---|
| Product stage | `1fr 1fr` (detail + visual) | 48–64px |
| Personas explorer | `1fr 1fr` (content + stage) | 64px |
| Pricing grid | `1fr auto` (main + aside) | 32px |
| Trust row | `1fr auto` | 64px |
| Before-you-decide | `370px 590px` | 64px |
| Footer nav | `1.3fr repeat(5, 1fr)` | 32–48px |
| Stories carousel | `40px 1fr 40px` | 16px |

**Flexbox** drives bars, tab lists, chip rows, logo track, and feature card marquee.

---

## 5. Spacing & Padding Scale

Broadly an **8px-based scale** with large editorial values for section separation.

`4 · 6 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 56 · 64 · 80 · 120` (px)

- **Container gutters:** 32px desktop / 24px (≤991px) / 20px (≤575px).
- **Section vertical padding:** ~80–120px desktop. Reduces to ~56–80px on tablet, ~40–56px on mobile.
- **Common gaps:** card internals `16px`; chip rows `8–10px`; grid columns `48–64px`; tab lists `8–20px`.
- **Card padding:** feature card `32px 24px 24px`; story body `24px`; testimonial card `64px 32px`; product detail `32–40px`.

---

## 6. Border Radius

| Radius | Where used |
|---|---|
| `4px` | Hello badge, micro tags |
| `6px` | Request a Demo button (`btn-demo`) |
| `8px` | Primary buttons (`btn-start`, `btn-primary--sm`), product tabs, feature cards |
| `10px` | Pricing inner tabs |
| `12px` | Hero search shell, footer ask-AI box, contact CTA, pricing aside card |
| `16px` | Persona tabs, story cards, testimonial card |
| `24px` | Persona dashboard scene card |
| `50px` | Chips and pills (fully rounded) — `pd-chip`, `persona-chips`, `search-tags` |
| `50%` | Circular: nav arrows, social icons, source bubbles, avatar |

**Rule:** pills/chips = `50px`; content cards step up `8 → 12 → 16 → 24px` by elevation.

---

## 7. Shadows & Elevation

| Token | Value | Usage |
|---|---|---|
| `--Card-Shadow` | `0 4px 14px 0 rgba(0,0,0,.25)` | Story card hover, footer CTA |
| `--Card-Shadow-Soft` | `0 2px 6px rgba(0,0,0,.08)` | Light soft elevation |
| `--Tab-Active-Shadow` | `0 10px 15px rgba(0,0,0,.1), 0 4px 6px rgba(0,0,0,.1)` | Active persona tab |
| `--Dash-Card-Shadow` | `0 20px 25px -5px rgba(16,24,40,.05), 0 8px 10px -6px rgba(16,24,40,.05)` | Dashboard mock cards |

Other elevation effects:
- Feature card resting: `filter: drop-shadow(0 4px 4px rgba(0,0,0,.12))`; hover: `box-shadow: 0 8px 16px rgba(85,41,142,.18)` (violet-tinted).
- `Request a Demo` hover: `box-shadow: 0 8px 24px -8px rgba(64,117,201,.55), 0 2px 10px -2px rgba(119,71,182,.4)`.
- Glows use `filter: blur(40–125px)` rather than box-shadow.

**Elevation ladder:** flat (borders only) → soft card (`.08`) → hover lift (`.18–.25`) → floating glow (blur, no shadow).

---

## 8. Buttons & CTA Styling

### Primary gradient button (`.btn-start`, `.btn-primary`, `.explore-btn`, `.pd-cta`, `.pm-cta`)
```css
background: var(--Explore-Button);   /* linear-gradient(270deg, #7747b6, #4075c9, #1ca9c9) */
color: #fcfcfc;
font: 700 15px/25px Inter;
padding: 8px 16px–20px;
border-radius: 8px;
border: none;
transition: filter .22s ease, transform .22s cubic-bezier(.22,.61,.36,1);
hover: filter: brightness(1.1); transform: translateY(-1px);
```

### Inverted gradient-border button (`.btn-demo` — "Request a Demo")
```css
background:
  linear-gradient(#051A3C, #051A3C) padding-box,
  var(--Explore-Button) border-box;
border: 2px solid transparent;
color: #fcfcfc;
font: 700 13.5px/1.2 Inter;
padding: 8px 18px;
border-radius: 6px;
hover background:
  linear-gradient(rgba(255,255,255,.07), rgba(255,255,255,.07)) padding-box,
  var(--Explore-Button) border-box;
hover: transform: translateY(-1px); box-shadow: violet/blue glow;
```
> This gradient-border technique uses `padding-box / border-box` background layers with `border: 2px solid transparent` to produce a gradient border that respects `border-radius`.

### Text / link CTAs (hello bar, mega menu, footer)
- Default: `rgba(255,255,255,.9)`, `font-weight: 700`, `font-size: 15px`.
- Hover: `color: #12b6f8`.
- Separator between adjacent link CTAs: `border-left: 1px solid rgba(255,255,255,.18)` + `padding-left: 16px` + `margin-left: 8px`.

### Circular nav arrows (`.stories-arrow`)
`40×40px`, `border-radius: 50%`, 1px border. Hover inverts fill to brand gradient. `transition: all .25s ease`.

---

## 9. Cards & Container Styles

| Card | Background | Border | Radius | Shadow | Notes |
|---|---|---|---|---|---|
| Feature card | `#f7f7f7` | 1px `#b499d7` (violet) | 8px | drop-shadow → violet hover glow | Marquee strip, icon + h5 + p |
| Product detail | transparent on dark | none | — | — | `--pd-accent` variables drive color |
| `pd-chip` | `var(--pd-accent-bg)` at **22% opacity** | 1px `var(--pd-accent-border)` at **55% opacity** | 50px | none | White text (#fcfcfc), weight 500, 13px |
| Story card | `#fcfcfc` | 1px `#e5e7eb` | 16px | hover `--Card-Shadow` | Image top + body |
| Testimonial card | `#fcfcfc` | 1px `#eaeaea` | 16px | none | Outer wrapper |
| Persona scene card | `#fcfcfc` | 1px `#e5e7eb` | 24px | `--Dash-Card-Shadow` | Animated, layered depth |
| Pricing aside | `#fcfcfc` | 1px `#eaeaea` | 12px | none | GIF + checklist + KPI stat |
| Ask-AI box (footer) | `rgba(252,252,252,.04)` | 1px `rgba(159,186,228,.15)` | 12px | none | Glass on dark |
| Footer CTA banner | blue gradient | none | 16px | `--Card-Shadow` | Full-width |

**Pattern:** light cards = white bg + 1px light-grey border + medium radius + hover lift. Dark/glass cards = low-alpha white bg + low-alpha blue-grey border.

---

## 10. Navigation Styling

### Hello bar (`.hello-bar`)
- Background: `#07214b`, full-width, `padding: 10px 48px`, bottom border `rgba(255,255,255,.2)`.
- **Badge (`.hello-badge`):** white bg, `#0e48a5` text, 700/14px, `border-radius: 4px`, animated pulse.
- **Message (`.hello-message`):** `rgba(255,255,255,.8)`, 14px/22px.
- **Register Now CTA (`.hello-cta`):** underlined, white → `#12b6f8` hover, nudging arrow SVG.
- **Free Consultation (`.hello-consult`):** `rgba(255,255,255,.9)`, 700/15px, no border/background — matches Log in styling.
- **Log in (`.hello-login`):** same weight/size as Free Consultation; separated by `border-left: 1px solid rgba(255,255,255,.18)` + `padding-left: 16px` + `margin-left: 8px`.
- Mobile (≤575px): `.hello-cta` and `.hello-consult` hidden; `.hello-login` remains.

### Main header (`.site-header.headerTop`)
- Background: `#051A3C`, height 81px, `padding: 20px 48px 21px`, flex space-between.
- Bottom border: `rgba(255,255,255,.1)`, `z-index: 20`.
- **Position:** `static` (not sticky) — scrolls away with page.
- **Logo:** SVG img, `height: 36px`.
- **Nav links (`.nav-links`):** Inter 15px/26px, `rgba(255,255,255,.9)` → `#12b6f8` hover, 32px gap, caret SVGs on dropdown items, sparkle SVG on AI item.
- **CTA actions:** "Request a Demo" (inverted gradient-border) + "Start for Free" (primary gradient).

### Mega menus (`.nav-mega`)
Three wide menus: Platform (3-col), Solutions (3-col), Resources (2-col), Company (3-col).
- `position: absolute; top: 100%` — positioned against `.site-header` (which is the containing block because all `.nav-item--*` are `position: static`).
- Background: dark navy with glass frosting, `border-radius: 0 0 12px 12px`, box-shadow.
- Column 1 (`.np-nav`): nav section groups with h6 titles and `<ul>` link lists.
- Column 2 (`.np-detail`): product pane (tagline + h4 + desc + CTAs) OR capability/industry/department grid.
- Column 3 (`.np-releases`): Recent Releases or Recent Blogs sidebar.
- Triggered by `hover` / `focus-within` on the parent `li`.

### Footer (`.site-footer`)
- Transparent on finale gradient, 6-column grid (`1.3fr repeat(5,1fr)`).
- Column headings: Inter 700/16px, `#12b6f8`, bottom border.
- Links: `rgba(255,255,255,.75)` → `#12b6f8` hover, `transition: color .2s`.
- Social icons: 36px circles, low-alpha bg, hover brighten.
- Copyright line: centered, `rgba(255,255,255,.45)`.

---

## 11. Icon & Image Treatment

- **Icons:** inline SVGs, `stroke="currentColor"`, typically `stroke-width: 1.7–2`, `stroke-linecap/linejoin: round`. Sized 12–24px contextually.
- **Icon tiles (nav grid cards):** rounded squares with pale bg, brand-color glyph. Background + color shift on hover.
- **Logo marquee:** images display in **original colors** (no filter). `max-height: 48–52px`, `max-width: 180px`, `object-fit: contain`. Container: `margin: 0 56px` per logo, flex centered, no fixed width (prevents cropping wide wordmarks).
- **Product GIF previews:** `object-fit: contain` inside `.product-visual`, ambient orb glows (`pv-orb-a`, `pv-orb-b`) behind the image. No browser chrome frame currently.
- **Story images:** `object-fit: cover` inside fixed-height, overflow-hidden, rounded top of card.
- **Compliance badges (HIPAA/GDPR/SOC2):** `object-fit: contain`, displayed in `.trust-badges` row.
- Global: `img { max-width: 100%; }`, `loading="lazy"` on all below-fold images.

---

## 12. Reusable Component Patterns

### 1. Pill / chip
`border-radius: 50px`, `padding: 7px 14px`, 13px/500 Inter, semi-transparent brand bg at **22% opacity**, brand border at **55% opacity**, white text. Active = solid brand fill.
Variants: `.pd-chip` (product section) · `.persona-chips .chip` · `.hero-search-tag` · `.pd-pill` (eyebrow pill).

### 2. Eyebrow + dot separator
```html
<p class="features-eyebrow"><span class="fe-dot"></span>Features & Capabilities</p>
```
11–12px, 700, uppercase, `letter-spacing: .12em`, brand-color dot (`::before` pseudo or inline `<span>`). Used consistently at the top of every section.

### 3. Tab component
Bordered rounded card; `.is-active` → brand background + stronger border + optional left-border accent + tab shadow. `role="tablist"` + `aria-selected` + `tabindex` management required.
Instances: `.product-tab` · `.px-tab` (personas) · `.pm-plan` (pricing) · `.testimonial-tab`.

### 4. Product accent trio
Three CSS variables scoped to `.product-detail` that drive all product-keyed colors:
```css
--pd-accent:         /* solid brand color */
--pd-accent-bg:      /* brand at 22% opacity — chip/card background */
--pd-accent-border:  /* brand at 55% opacity — chip/card border */
```
Swap the trio via `:has()` selectors on `.product-detail.is-insights` and `.product-detail.is-datamagnet`.

### 5. Animated persona scene
Each persona has a `.persona-scene` with three `.scene-card` elements at different `z-index` and `data-parallax` values. On persona switch, the outgoing scene fades out (`aria-hidden="true"`) and the incoming scene stagger-animates cards in sequence. Scene cards contain real data mock-ups (sparkline, bar chart, KPI grid, etc.).

### 6. Scroll-driven product switcher
`.section-products` is a tall `position: relative` track (3× viewport height on desktop). `.products-sticky` is `position: sticky; top: 0`. JS maps scroll progress across the pinned range to `productOrder` (askme → insights → datamagnet), calling `activateProduct(key)` which fades out the old content and fades in the new.
Mobile: auto-rotates every 6s with `setInterval`. Always check `prefers-reduced-motion`.

### 7. Infinite logo marquee
`.logo-track` is a duplicated set of logos (16 × 2 = 32 items) animated with `@keyframes scroll-left { from: translateX(0); to: translateX(-50%) }` at 50s linear infinite. The `-50%` shift moves to the duplicate mid-point, creating a seamless loop.
> **Improvement pending:** Add `mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)` to `.logo-slider` for fade-edge effect.

### 8. FAQ accordion
`.faq-item`: `<button class="faq-q">` + `.faq-answer` hidden by `max-height: 0; overflow: hidden`. `.is-open` expands to `max-height: 400px`. The `+` icon in `.faq-toggle::before/after` animates: vertical bar fades, horizontal rotates to become `—`. Requires `aria-expanded` toggled on the button.

### 9. Stories carousel
`overflow: hidden` viewport + `.stories-track` translated via `transform: translateX()` with `transition: transform .55s cubic-bezier(.4,0,.2,1)`. Driven by `#storiesPrev` / `#storiesNext` buttons (circular, 40px, `aria-label`). No position indicator currently.

### 10. Section bridge gradient
White-to-transparent or transparent-to-white gradient pseudo-elements between dark and light sections. `.personas-fade` is a standalone `aria-hidden` div with a vertical gradient that bridges the dark feature section into the white persona canvas.

---

## 13. Hover Effects, Transitions & Animations

**Standard transition:** `.25s ease` for most interactive elements. Carousels: `.55s cubic-bezier(.4,0,.2,1)`. CTA buttons: `.22s cubic-bezier(.22,.61,.36,1)`.

| Effect | Detail |
|---|---|
| Card lift | `transform: translateY(-4px)` + shadow (feature, story cards) |
| Primary button hover | `filter: brightness(1.1)` + `translateY(-1px)` |
| Inverted button hover | Glass tint overlay + `translateY(-1px)` + violet/blue box-shadow |
| Link hover | color → `#12b6f8` (on dark) or darker blue (on light) |
| Nav arrow hover | Invert fill/color to brand |
| FAQ toggle | `+` icon: vertical bar fades, horizontal rotates; answer: `max-height` + `padding` expands |
| Persona / product tab switch | outgoing: `.is-leaving` (opacity 0 + translateY up), incoming: `.is-entering` (opacity 0 + translateY down → settled) |

### Keyframe animations
| Name | Duration | Effect |
|---|---|---|
| `scroll-left` | 50s linear infinite | Logo marquee — `translateX(0 → -50%)` |
| `orbFloat` | 11–15s ease-in-out infinite | Product/persona ambient orbs — `translate3d(0, -28px, 0) scale(1.06)` at 50% |
| `glowBreathe` | 7s ease-in-out infinite alternate | Scene glow orbs — `scale(1.08)` + `opacity .8` |
| `badgePulse` | 2.4s infinite | Hello bar badge — scale + box-shadow ring |
| `shimmer` | 4s linear infinite | Hello bar message — light sweep gradient |
| `arrowNudge` | 1.6s infinite | CTA arrow — `translateX(3px)` |

**`prefers-reduced-motion`:** Badge pulse, shimmer, arrow nudge, and product auto-rotate all check this media query and disable or simplify. Any new animation must include a `prefers-reduced-motion: reduce` rule.

---

## 14. Responsive Behavior

Breakpoints (max-width):

### `≤ 1199px` (small desktop / large tablet)
- Footer nav → 4 columns, brand col spans full row.
- Section padding tightens ~10–20%.

### `≤ 991px` (tablet)
- Hello bar message hidden.
- Nav links + "Request a Demo" hidden — **mobile nav not yet implemented**.
- Header height → auto.
- Hero H1 → 40px/50px, sub → 17px.
- Products / personas / pricing collapse to single column.
- Product visual hidden on tablet.
- Footer → 2 columns; trust row + before-decide stack.

### `≤ 575px` (mobile)
- Container padding → 20px.
- `.hello-cta` and `.hello-consult` hidden.
- Hero H1 → 32px/40px, sub → 15px.
- All section H2 → 26px/36px.
- Persona tabs → 1-up.
- Pricing tabs → stack vertically.
- Footer → 1 column; legal links wrap.

> **Gap to address:** There is currently no hamburger/mobile nav implementation. On ≤ 991px, the site navigation is completely inaccessible to users. This should be the highest-priority responsive work item.

---

## 15. Accessibility Notes

Present in the current build:
- Semantic elements: `<header>`, `<nav>`, `<section>`, `<footer>`, `<article>`, `<aside>`, `<figure>`, `<blockquote>`.
- `aria-label` on icon-only controls (brand mark, nav arrows, search icon buttons).
- `aria-hidden="true"` on all decorative SVGs, orb/particle spans, and quote-mark spans.
- `role="tablist"` + `aria-selected` + `tabindex` management on product, persona, pricing, and testimonial tab groups.
- `loading="lazy"` on all below-fold images.
- `prefers-reduced-motion` check in JS for auto-rotate and in CSS for animations.

Gaps to address when extending:
- No `<main>` landmark and no skip-navigation link.
- No `aria-label` on the primary `<nav>` element.
- `<nav>` mega items use `role="menu"` without `role="menuitem"` on children — either fix the ARIA or remove `role="menu"`.
- Arrow-key navigation not implemented for tab groups (required by ARIA authoring practices).
- GIFs autoplay without a pause control (WCAG 2.1 SC 2.2.2).
- Logo marquee has no pause control (same).
- Several `href="#"` placeholder links.
- No visible `:focus-visible` custom styling — consider adding for keyboard users.

---

## 16. CSS Variables / Design Tokens (Quick Reference)

```css
:root {
  /* Royal Blue */
  --Royal-Blue-Blue-50:  #e7eef8;
  --Royal-Blue-Blue-150: #b8d0fd;
  --Royal-Blue-Blue-200: #9fbae4;
  --Royal-Blue-Blue-350: #5886d0;
  --Royal-Blue-Blue-400: #4075c9;
  --Royal-Blue-Blue-450: #2863c3;
  --Royal-Blue-Blue-500: #0e48a5;
  --Royal-Blue-Blue-750: #07214b;
  --Royal-Blue-Blue-850: #04142d;
  --Royal-Blue-Blue-900: #051A3C;   /* page base background */

  /* Violet */
  --Violet-Violet-50:  #f0ebf7;
  --Violet-Violet-250: #b499d7;
  --Violet-Violet-450: #7747b6;
  --Violet-Violet-500: #55298e;
  --Violet-Violet-550: #4d2580;

  /* Sky Blue / Turquoise */
  --SkyBlue-SkyBlue-50:    #e7f8fe;
  --SkyBlue-SkyBlue-500:   #12b6f8;
  --Turquoise-SkyBlue-50:  #e8f6fa;
  --Turquoise-SkyBlue-500: #1ca9c9;

  /* Neutrals */
  --Penn-Blue:       #001040;
  --Absolute-Black:  #212121;
  --Base-White:      #fcfcfc;
  --Grey-Grey-100:   #fbfbfb;
  --Grey-Grey-200:   #f7f7f7;
  --Grey-Grey-600:   #bbbbbb;
  --Grey-Grey-700:   #8c8c8c;
  --Grey-Grey-800:   #5e5e5e;
  --Grey-Grey-900:   #2f2f2f;
  --Map-Grey:        #eaeaea;

  /* Blue-grey */
  --blueGray-50:  #F8FAFC;
  --blueGray-200: #E2E8F0;
  --blueGray-400: #94A3B8;
  --blueGray-500: #64748B;
  --blueGray-600: #475569;
  --blueGray-700: #334155;

  /* Cool greys */
  --cool-101828: #101828;
  --cool-99a1af: #99a1af;
  --cool-e5e7eb: #e5e7eb;
  --cool-f9fafb: #f9fafb;
  --cool-d1d5dc: #d1d5dc;
  /* NOTE: --cool-6a7282 (#6a7282) is no longer used for text —
     replaced by #4a5568 for WCAG compliance. */

  /* Gradients */
  --AI-Agents-Text:  linear-gradient(83.02deg, #4AE7FF 51.42%, #4075C9 63.25%, #E879F9 76.03%);
  --Search-Glow:     linear-gradient(86.83deg, #22d3ee 0.77%, #3b82f6 50%, #e879f9 99.23%);
  --Explore-Button:  linear-gradient(270deg, #7747b6 0%, #4075c9 50.7%, #1ca9c9 100%);

  /* Shadows */
  --Card-Shadow:       0 4px 14px 0 rgba(0,0,0,.25);
  --Card-Shadow-Soft:  0 2px 6px rgba(0,0,0,.08);
  --Tab-Active-Shadow: 0 10px 15px 0 rgba(0,0,0,.1), 0 4px 6px 0 rgba(0,0,0,.1);
  --Dash-Card-Shadow:  0 20px 25px -5px rgba(16,24,40,.05), 0 8px 10px -6px rgba(16,24,40,.05);
}
```

**Token conventions**
- Color tokens follow Figma export naming `--<Family>-<Family>-<step>` with a fallback hex: `var(--Royal-Blue-Blue-500, #0e48a5)`. Always pass the fallback.
- Numeric steps (50–900) map light → dark; `500` is the canonical brand value per family.
- Use `--Explore-Button` for all primary gradient buttons — never re-declare the gradient inline.
- Use shadow tokens for elevation — never write ad-hoc `box-shadow` values in component CSS.
- `#4a5568` for subtitle/secondary text on white. Never use `#6a7282` for body-size text on white backgrounds.

---

*Generated from `home.html` + `assets/css/v2o/index.css` — June 2026.*
