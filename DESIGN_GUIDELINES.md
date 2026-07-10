# Lumenore — Design Style Guidelines

> Extracted from `index.html` + `assets/css/v2o/final-home-bundle.css` + `assets/js/index.js` (last updated July 2026).
> This document records the **current** design system as built — colors, type, spacing, components, and patterns — so it can be reused consistently across all pages.

---

## 1. Overall Design Style & Visual Tone

A modern **enterprise SaaS / BI** aesthetic with a premium, editorial feel.

- **Dark-first hero, light mid-page, dark finale.** The page opens on a deep royal navy canvas (`#051A3C`) with layered gradient orbs and particle animations. Mid-page sections (Personas, Pricing, Success, Testimonials) use clean white (`#fcfcfc`). The page closes on a violet-to-navy gradient finale.
- **Layered ambient glow.** Hero uses radial-gradient orbs (violet, cyan, blue) with `filter: blur(40–125px)`, a grain texture overlay at 6% opacity, and small floating particles — all `aria-hidden`. Product and persona sections have their own contained ambient glows.
- **Geometric sans headlines** (Space Grotesk, light weight 300) paired with a **clean sans body** (Inter). All `h1–h4` use Space Grotesk — no exceptions.
- **Subtle motion.** Infinite logo marquee, scroll-driven product switching, hover lifts, `orbFloat` keyframe animations, hero word-stagger entrance animation, and staggered persona scene card entries.
- **Color-coded products.** Each product gets its own CSS accent trio: Violet = Ask Me · Royal Blue = Insights · Turquoise = Data Magnet. Driven by `--pd-accent`, `--pd-accent-bg`, `--pd-accent-border` CSS variables on `.product-detail`.
- **Navigation is static (not sticky).** `.site-top` uses `position: relative` — the hello bar and nav scroll away with the page.
- **Single CSS bundle per page.** All styles for `index.html` live in `assets/css/v2o/final-home-bundle.css`. All JS lives in `assets/js/index.js`. No inline or `<style>` blocks in the HTML.

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

### Violet ramp (secondary brand / Ask Me)
| Token | HEX | Usage |
|---|---|---|
| `--Violet-Violet-50` | `#f0ebf7` | Ask Me pill bg |
| `--Violet-Violet-250` | `#b499d7` | Feature-card border |
| `--Violet-Violet-450` | `#7747b6` | Ask Me product accent, `--Explore-Button` start |
| `--Violet-Violet-500` | `#55298e` | Active product accent, stat block, bottom glow |
| `--Violet-Violet-550` | `#4d2580` | Page-finale gradient top |

### Sky Blue / Turquoise (highlight / Data Magnet)
| Token | HEX | Usage |
|---|---|---|
| `--SkyBlue-SkyBlue-500` | `#12b6f8` | Hover/link highlight, footer headings, hello bar hover |
| `--Turquoise-SkyBlue-500` | `#1ca9c9` | Data Magnet accent, `--Explore-Button` end |

### Core / Neutrals
| Token | HEX | Usage |
|---|---|---|
| `--Base-White` | `#fcfcfc` | Primary text on dark / white surfaces |
| `--Grey-Grey-200` | `#f7f7f7` | Feature-card bg |
| `--Grey-Grey-600` | `#bbbbbb` | Tab borders |
| `--Grey-Grey-800` | `#5e5e5e` | Muted text |
| `--Map-Grey` | `#eaeaea` | Card borders, chip text, FAQ answer text |
| `--cool-101828` | `#101828` | Default heading color on light backgrounds |
| `#4a5568` | — | **Section subtitle / body text on light backgrounds** (`section-sub`). Passes WCAG AA 4.5:1 on white. |

> **Contrast rule:** Never use `#6a7282` or `#475467` for body-size text on white — both fail WCAG AA. Always use `#4a5568`.

### Body text on dark backgrounds
| Context | Value |
|---|---|
| Hero sub, product detail `p`, cm-item-desc | `rgba(252, 252, 252, 0.72)` |
| Features section `.fc-sub` | `rgba(252, 252, 252, 0.72)` |

> All dark-section body text uses **`rgba(252,252,252, 0.72)`** — do not use `rgba(255,255,255, 0.82)` or other variants.

### Gradient tokens
| Token | Definition | Usage |
|---|---|---|
| `--AI-Agents-Text` | `linear-gradient(83.02deg, #4AE7FF 51.42%, #4075C9 63.25%, #E879F9 76.03%)` | Hero H1 gradient span |
| `--Explore-Button` | `linear-gradient(270deg, #7747b6 0%, #4075c9 50.7%, #1ca9c9 100%)` | **All primary gradient buttons** |
| `--Search-Glow` | `linear-gradient(86.83deg, #22d3ee 0.77%, #3b82f6 50%, #e879f9 99.23%)` | Blurred glow behind hero search |

**Page backgrounds:** Hero is `#051A3C`. The `page-finale` block uses `linear-gradient(180deg, #4D2580 0%, #031430 30%, #000D22 100%)`.

---

## 3. Typography

Three families loaded from Google Fonts:

```
Space Grotesk — weights 300–700                     (sans, ALL headings h1–h4)
Inter         — weights 300/400/500/600/700          (sans, body/UI/buttons)
```

### Family assignment
- **`h1–h4`** → `'Space Grotesk', sans-serif`, `font-weight: 300`.
- **Body, buttons, nav, chips** → `'Inter', sans-serif`.
- **`body`** → Inter, color `--Base-White`, `-webkit-font-smoothing: antialiased`.

> **Rule:** All headings (h1–h4) use Space Grotesk 300. No heading may use Fraunces or Inter.

### Type scale
| Role | Font | Size | Line-height | Weight | Letter-spacing | Notes |
|---|---|---|---|---|---|---|
| Hero H1 | Space Grotesk | **64px** | **74px** | 300 | -0.8px | Dark hero bg · `font-weight: 300` |
| Section H2 | Space Grotesk | **44px** | **54px** | 300 | -0.6px | All section headings — unified |
| H3 / sub-heading | Space Grotesk | **19px** | **28px** | 500 | -0.3px | Products, personas, pricing, trust, footer CTA — unified |
| H4 / card title | Space Grotesk | **22px** | **30px** | 500 | -0.2px | Pricing right panel, nav product pane — unified |
| Footer nav col H4 | Inter | 16px | — | 700 | — | Utility label only — exception to Space Grotesk rule |
| Section sub (`section-sub`) | Inter | 15–17px | 28–30px | 400 | — | `#4a5568` on light · `rgba(252,252,252,0.72)` on dark |
| Hero sub | Inter | 17px | 27px | 400 | — | `rgba(252, 252, 252, 0.72)` |
| Body / paragraph | Inter | 15px | 26px | 400 | — | — |
| Eyebrow labels | Inter | 11px | 16px | 500–700 | 1.6px | Uppercase, pill-shaped, brand color |
| Buttons | Inter | 15px | 25px | 700 | — | All CTA buttons |
| Nav links | Inter | 15px | 26px | 400 | — | `rgba(255,255,255,.9)` |
| Chips / pills | Inter | 12–13px | 1 | 500 | — | — |
| Legal / footer small | Inter | 13–14px | 20px | 400 | — | — |

### Responsive H1 scale
| Breakpoint | Size | Line-height |
|---|---|---|
| Desktop (>991px) | 64px | 74px |
| Tablet (≤991px) | 48px | 58px |
| Mobile (≤575px) | 36px | 46px |

### Responsive H2 scale
| Breakpoint | Size | Line-height |
|---|---|---|
| Desktop | 44px | 54px |
| ≤991px | 34px | 44px |
| ≤575px | 26px | 36px |

---

## 4. Layout & Grid System

- **Container:** Bootstrap-style breakpoint ladder capped at `1320px` — `540px → 720px → 960px → 1140px → 1320px`. Padding `0 1rem` base, section-level overrides permitted for hero only.
- All sections standardised to **1320px** container width. Do not use `1500px` or `1280px` for new sections.
- This container standard applies to **all pages** — `index.html` (via `final-home-bundle.css`), `pricing.html` (via `pricing.css`), `partners.html` (via `partners.css`), `privacy.html` and `terms.html` (via `legal.css`).

**Container CSS (copy verbatim into every page's stylesheet):**
```css
.container { width: 100%; max-width: 100%; margin-right: auto; margin-left: auto; padding-right: 1rem; padding-left: 1rem; }
@media (min-width: 576px)  { .container { max-width: 540px; } }
@media (min-width: 768px)  { .container { max-width: 720px; } }
@media (min-width: 992px)  { .container { max-width: 960px; } }
@media (min-width: 1200px) { .container { max-width: 1140px; } }
@media (min-width: 1400px) { .container { max-width: 1320px; } }
```
- **Full-bleed bars** (hello bar, header, footer) use background full-width while content aligns to the container.

### CSS Grid columns per section
| Section | Layout | Gap |
|---|---|---|
| Hero | Flex — text `flex: 0 0 36%` + visual `flex: 1` | 40px |
| Product stage | `1fr 1fr` (detail + visual) | 48–64px |
| Personas explorer | `minmax(320px,.95fr) minmax(0,1.15fr)` | 80px |
| Pricing grid | `1fr auto` (main + aside) | 32px |
| Trust row | `1fr auto` | 64px |
| Before-you-decide | `370px 590px` | 64px |
| Footer nav | `1.3fr repeat(5, 1fr)` | 32–48px |
| Stories carousel | `40px 1fr 40px` | 16px |

**Flexbox** drives bars, tab lists, chip rows, logo track, and feature card marquee.

### Hero visual bleed
The hero visual column uses `margin-right: -80px` to bleed past the container right edge — intentional design to maximise the Lottie animation size on large screens. Reset to `margin-right: 0` on mobile.

---

## 5. Spacing & Padding Scale

Broadly an **8px-based scale** with large editorial values for section separation.

`4 · 6 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 56 · 64 · 80 · 96` (px)

### Section vertical padding — standard
| Rule | Value |
|---|---|
| **All content sections** | `padding-top: 96px; padding-bottom: 96px` |
| Hero section | `padding: 96px 0` |
| Trusted logos strip | compact — not 96px (intentional exception) |
| Testimonial bottom | 180px (intentional gradient runway) |

> **Rule:** Every new section must use `96px` top and bottom padding. Do not use 80px, 120px, or other values.

### Intro → content gap — standard
| Rule | Value |
|---|---|
| All section intros (`.cm-intro`, `.personas-intro`, `.pricing-intro`, `.success-intro`, `.testimonial-intro`, `.fc-header`) | `margin-bottom: 60px` |

> **Rule:** The gap between a section's intro block (eyebrow + heading + sub) and its main content is always **60px**. Do not use 48px, 72px, 96px, or other values for this gap.

### Common internal gaps
| Context | Value |
|---|---|
| Card internals | 16px |
| Chip rows | 8–10px |
| Grid columns | 40–80px |
| Tab lists | 8–20px |
| Card padding | feature `32px 24px 24px` · story `24px` · testimonial `64px 32px` |

---

## 6. Border Radius

| Radius | Where used |
|---|---|
| `4px` | Hello badge, micro tags |
| `6px` | **All action buttons** — `.btn-primary`, `.btn-start`, `.btn-demo`, `.ps-cta`, `.explore-btn` |
| `10px` | Pricing inner tabs |
| `12px` | Hero search shell, footer ask-AI box, contact CTA |
| `18px` | Feature cards, persona scene cards |
| `20px` | Story cards |
| `24px` | Pricing left panel |
| `28px` | Testimonial card |
| `50px` | **All chips and pills** — eyebrow labels, persona chips, product chips, hero search tags |
| `50%` | Circular: nav arrows, social icons, source bubbles, avatar |

**Rules:**
- All buttons = `6px`. Never use 8px, 10px, or 12px on buttons.
- All pills/chips = `50px`. Never use `999px` (same visual effect but inconsistent).
- Content cards graduate `12 → 18 → 20 → 24 → 28px` by elevation/prominence.

---

## 7. Shadows & Elevation

| Token | Value | Usage |
|---|---|---|
| `--Card-Shadow` | `0 4px 14px 0 rgba(0,0,0,.25)` | Story card hover, footer CTA |
| `--Card-Shadow-Soft` | `0 2px 6px rgba(0,0,0,.08)` | Light soft elevation |
| `--Tab-Active-Shadow` | `0 10px 15px rgba(0,0,0,.1), 0 4px 6px rgba(0,0,0,.1)` | Active persona tab |
| `--Dash-Card-Shadow` | `0 20px 25px -5px rgba(16,24,40,.05), 0 8px 10px -6px rgba(16,24,40,.05)` | Dashboard mock cards |

Other elevation effects:
- Feature card hover: `box-shadow: 0 8px 16px rgba(85,41,142,.18)` (violet-tinted).
- `Request a Demo` hover: `box-shadow: 0 8px 24px -8px rgba(64,117,201,.55), 0 2px 10px -2px rgba(119,71,182,.4)`.
- Glows use `filter: blur(40–125px)` rather than box-shadow.

**Elevation ladder:** flat (borders only) → soft card (`.08`) → hover lift (`.18–.25`) → floating glow (blur, no shadow).

---

## 8. Buttons & CTA Styling

### Primary gradient button (`.btn-primary`, `.btn-start`, `.explore-btn`, `.pd-cta`, `.ps-cta`)
```css
background: var(--Explore-Button);   /* linear-gradient(270deg, #7747b6, #4075c9, #1ca9c9) */
color: #fcfcfc;
font: 700 15px/25px Inter;
padding: 8px 16px–22px;
border-radius: 6px;
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
```
> Uses `padding-box / border-box` background layers with `border: 2px solid transparent` to produce a gradient border that respects `border-radius`.

### Text / link CTAs (hello bar, mega menu, footer)
- Default: `rgba(255,255,255,.9)`, `font-weight: 700`, 15px.
- Hover: `color: #12b6f8`.
- Separator: `border-left: 1px solid rgba(255,255,255,.18)` + `padding-left: 16px` + `margin-left: 8px`.

---

## 9. Section Backgrounds & Dot-grid Texture

| Section | Background | Dot-grid `::before` |
|---|---|---|
| Hero stage | `#051A3C` | No (uses orbs/particles instead) |
| Trusted logos | `#051A3C` | Light dots, radial mask |
| Products | `#051A3C !important` | — |
| Features / FC | Dark gradient | Light dots, fade-in from top |
| Personas | `#fcfcfc` | Blue dots `rgba(40,99,195,.14)`, no mask |
| Pricing | `#fcfcfc` | Blue dots `rgba(40,99,195,.14)`, no mask |
| Success | `#fcfcfc` | Blue dots `rgba(40,99,195,.14)`, no mask |
| Testimonial | `#fcfcfc` | Blue dots `rgba(40,99,195,.14)`, no mask |
| Trust | Dark | Light dots, ellipse mask |
| Page finale | `linear-gradient(180deg, #4D2580 0%, #031430 30%, #000D22 100%)` | — |

> **Rule:** All white (`#fcfcfc`) sections share the same dot-grid texture — `background-image: radial-gradient(rgba(40,99,195,.14) 1px, transparent 1px); background-size: 24px 24px`. Apply it via `::before` with `position: absolute; inset: 0; z-index: 0` and ensure `.container` has `position: relative; z-index: 1`.

---

## 10. Cards & Container Styles

| Card | Background | Border | Radius | Shadow |
|---|---|---|---|---|
| Feature card | `#f7f7f7` | 1px `#b499d7` (violet) | 18px | drop-shadow → violet hover glow |
| Product detail | transparent on dark | none | — | — |
| `pd-chip` | `var(--pd-accent-bg)` at 22% | 1px `var(--pd-accent-border)` at 55% | 50px | none |
| Story card | `#fcfcfc` | 1px `#e5e7eb` | 20px | hover `--Card-Shadow` |
| Testimonial card | `#fcfcfc` | 1px `#eaeaea` | 28px | none |
| Stacked testimonial card (`.ts-pcard`) | `#fcfcfc` | none | 12px | `0 8px 16px rgba(0,0,0,0.06)` |
| Persona scene card | `#fcfcfc` | 1px `#e5e7eb` | 18px | `--Dash-Card-Shadow` |
| Pricing left panel | `#fcfcfc` | — | 24px | — |
| Ask-AI box (footer) | `rgba(252,252,252,.04)` | 1px `rgba(159,186,228,.15)` | 12px | none |

---

## 11. Navigation Styling

### Hello bar (`.hello-bar`)
- Background: `#07214b`, full-width, `padding: 10px 48px`.
- **Badge:** white bg, `#0e48a5` text, animated pulse.
- **Links:** `rgba(255,255,255,.8–.9)` → `#12b6f8` hover.
- Mobile (≤575px): only Log In remains.

### Main header (`.site-header`)
- Background: `#051A3C`, height ~81px, `padding: 20px 48px`.
- **Position:** `static` — scrolls away with page.
- **Logo:** SVG, `height: 36px`.
- **Nav links:** Inter 15px, `rgba(255,255,255,.9)` → `#12b6f8` hover, 32px gap.
- **CTAs:** "Request a Demo" (inverted gradient-border, `border-radius: 6px`) + "Start for Free" (primary gradient, `border-radius: 6px`).

### Mega menus
- `position: absolute; top: 100%`, dark navy frosted glass, `border-radius: 0 0 12px 12px`.
- Triggered by hover/focus-within on parent `<li>`.

> **Gap:** No mobile hamburger nav implemented. On ≤991px the navigation is inaccessible — highest-priority responsive work item.

### Footer
- Transparent on finale gradient, 6-column grid.
- Column H4: Inter 700/16px, `#12b6f8`, bottom border.
- Links: `rgba(255,255,255,.75)` → `#12b6f8` hover.

---

## 12. Reusable Component Patterns

### 1. Eyebrow label (dark backgrounds)
```html
<p class="fc-eyebrow"><span class="fc-dot" aria-hidden="true"></span>Section Name</p>
```
11px, 500 Inter, uppercase, `letter-spacing: 1.6px`, `color: #67d3ff`, `border: 1px solid rgba(255,255,255,0.14)`, `background: rgba(255,255,255,0.06)`, `backdrop-filter: blur(6px)`, `border-radius: 50px`, `padding: 7px 16px`.

### 2. Eyebrow label (light backgrounds)
```html
<span class="personas-eyebrow"><span class="pe-dot" aria-hidden="true"></span>Section Name</span>
```
11px, 500 Inter, uppercase, `letter-spacing: 1.6px`, `color: #0e48a5`, brand gradient bg at 8%, brand border at 14%, `border-radius: 50px`, `padding: 7px 16px`, `margin-bottom: 24px`.

### 3. Tab component
Bordered rounded card; `.is-active` → brand background + stronger border + tab shadow. Always use `role="tablist"` + `aria-selected` + `tabindex` management.

### 4. Product accent trio
```css
--pd-accent:        /* solid brand color */
--pd-accent-bg:     /* brand at 22% opacity */
--pd-accent-border: /* brand at 55% opacity */
```
Swap via `:has()` selectors on `.product-detail.is-insights` and `.product-detail.is-datamagnet`.

### 5. Hero word-stagger animation
JS (`assets/js/index.js`) splits `.hero-split__text h1` child nodes into `.hw-outer > .hw` spans with staggered `animation-delay` values. Spaces between words are plain ` ` text — do not use inline-block spacer spans. Sub and CTA animate in after the last word with additional delay.

### 6. Scroll-driven product switcher
`.section-products` is a tall `position: relative` track (3× viewport height). `.products-sticky` is `position: sticky; top: 0`. JS maps scroll progress to `productOrder`, calling `activateProduct(key)`. Mobile: auto-rotates every 6s. Always check `prefers-reduced-motion`.

### 7. Infinite logo marquee
`.logo-track` duplicated (32 total items). `@keyframes scroll-left { from: translateX(0); to: translateX(-50%) }` at 50s linear infinite.

### 8. FAQ accordion
`.faq-item`: `<button class="faq-q">` + `.faq-answer` with `max-height: 0` → `max-height: 400px`. `+` icon animates via `::before/::after`. Toggle `aria-expanded` on the button.

### 9. Section bridge gradient
`.personas-fade` bridges the dark Features section into the white Personas canvas — a standalone `aria-hidden` div with a vertical gradient. Apply similar bridges wherever dark meets light sections.

---

## 13. Hover Effects, Transitions & Animations

**Standard transition:** `.25s ease`. Carousels: `.55s cubic-bezier(.4,0,.2,1)`. CTA buttons: `.22s cubic-bezier(.22,.61,.36,1)`.

| Effect | Detail |
|---|---|
| Card lift | `transform: translateY(-4px)` + shadow |
| Primary button hover | `filter: brightness(1.1)` + `translateY(-1px)` |
| Inverted button hover | Glass tint + `translateY(-1px)` + violet/blue box-shadow |
| Link hover | `color: #12b6f8` (dark bg) |
| Hero H1 entrance | Word-by-word stagger, 0.08s per word, `heroWordIn` keyframe (fade + translateY 20px) |
| Sub / CTA entrance | `heroFadeUp` keyframe, delay = (wordCount × 0.08 + 0.12/0.32)s |

### Keyframe animations
| Name | Duration | Effect |
|---|---|---|
| `scroll-left` | 50s linear infinite | Logo marquee |
| `orbFloat` | 11–15s ease-in-out infinite | Ambient orbs |
| `glowBreathe` | 7s ease-in-out infinite alternate | Scene glow orbs |
| `badgePulse` | 2.4s infinite | Hello bar badge |
| `shimmer` | 4s linear infinite | Hello bar message sweep |
| `arrowNudge` | 1.6s infinite | CTA arrow nudge |
| `heroWordIn` | 0.60s ease forwards | Hero H1 word entrance |
| `heroFadeUp` | 0.55–0.60s cubic-bezier forwards | Hero sub/CTA/visual entrance |

**`prefers-reduced-motion`:** All auto-rotate, pulse, shimmer, and marquee animations disable or simplify. Any new animation must include a `prefers-reduced-motion: reduce` rule.

---

## 14. Responsive Behavior

Breakpoints (max-width): `1199px · 991px · 767px · 575px`

### `≤ 1199px` (small desktop / large tablet)
- Footer nav → 4 columns, brand col spans full row.
- Section padding tightens ~10–20%.
- Hero H3 products: 32px → 30px.

### `≤ 991px` (tablet)
- **Hero:** stacks to single column — text centred, visual below, `margin-right: 0`.
- Hero H1 → 48px / 58px.
- Hello bar message hidden.
- Nav links + "Request a Demo" hidden.
- Products / personas / pricing collapse to single column.
- All sections: container padding → 24px.

### `≤ 575px` (mobile)
- Hero H1 → 36px / 46px.
- Container padding → 20px.
- `.hello-cta` and `.hello-consult` hidden.
- All section H2 → 26px / 36px.
- Pricing tabs → stack vertically.
- Footer → 1 column.

> **Gap:** No hamburger/mobile nav. On ≤ 991px the site navigation is inaccessible — highest-priority responsive work item.

---

## 15. Accessibility Notes

Present in the current build:
- Semantic elements: `<header>`, `<nav>`, `<section>`, `<footer>`, `<article>`, `<aside>`, `<figure>`, `<blockquote>`.
- `aria-label` on icon-only controls.
- `aria-hidden="true"` on all decorative elements, orbs, and quote-mark spans.
- `role="tablist"` + `aria-selected` + `tabindex` management on all tab groups.
- `loading="lazy"` on all below-fold images.
- `prefers-reduced-motion` checked in JS and CSS.

Gaps to address:
- No `<main>` landmark and no skip-navigation link.
- No mobile nav (≤ 991px navigation inaccessible).
- Arrow-key navigation not implemented for tab groups.
- GIFs and logo marquee autoplay without pause controls (WCAG 2.1 SC 2.2.2).
- Several `href="#"` placeholder links.
- No visible `:focus-visible` custom styling.

---

## 16. File Structure

```
index.html                          ← Main home page (single HTML, no inline/internal CSS or JS)
assets/
  css/
    v2o/
      final-home-bundle.css         ← All styles for index.html (single file)
      ask-me-bundle.css             ← All styles for lumenore-ask-me.html
  js/
    index.js                        ← All JS for index.html (single file)
  images/
    AI/                             ← AI provider logos (claude, gemini, grok, openai, perplexity)
    askme-resources/                ← Blog/resource images for ask-me page
    Case-study/                     ← Case study images
    GIf/                            ← Animated GIFs (Ask Me page)
    homeV2o/
      Logo section/                 ← Client logo PNGs (PNG, used in trusted strip)
      pricing/                      ← Pricing plan GIFs (Free1, enterprise-1, enterprise-2)
      [root SVGs]                   ← Compliance, GPTW, Lumenore logo SVGs
    Json/
      New/                          ← Lottie JSON JS files (LandingPage, AskMe, DataMagnet, Insights)
      Dashboard-Animation-1.js
      Data-Magnet_Animation-1.js
    personas/                       ← Persona PNG images + bullet-check-icon.svg
    products/                       ← Product SVG icons
```

> **Rule:** No loose CSS or JS files. Each page has exactly one CSS bundle and one JS file. No inline `<style>` or `<script>` blocks in HTML.

---

## 17. CSS Variables / Design Tokens (Quick Reference)

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
  --Royal-Blue-Blue-900: #051A3C;

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
  --Base-White:      #fcfcfc;
  --Grey-Grey-200:   #f7f7f7;
  --Grey-Grey-600:   #bbbbbb;
  --Grey-Grey-800:   #5e5e5e;
  --Map-Grey:        #eaeaea;
  --cool-101828:     #101828;

  /* Blue-grey */
  --blueGray-200: #E2E8F0;
  --blueGray-600: #475569;
  --blueGray-700: #334155;

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

**Token conventions:**
- Always pass the fallback hex: `var(--Royal-Blue-Blue-500, #0e48a5)`.
- Use `--Explore-Button` for all primary gradient buttons — never re-declare the gradient inline.
- Use shadow tokens for elevation — never write ad-hoc `box-shadow` values.
- Body text on white: `#4a5568`. Never use `#6a7282` or `#475467`.
- Body text on dark: `rgba(252,252,252,0.72)`. Never use `rgba(255,255,255,0.82)`.

---

*Updated from `index.html` + `assets/css/v2o/final-home-bundle.css` + `assets/js/index.js` — July 2026.*
