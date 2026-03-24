# Afrxcan Technologies — iPhone Store

A premium, Apple-esque iPhone product page built with pure HTML, CSS, and JavaScript.
Dark theme with gold accents, real product photography, smooth animations, live search, and a fully functional cart.

---

## 🗂️ Project Structure

```
afrxcan-technologies/
├── index.html   → Page structure and content
├── style.css    → All visual styles and animations
├── script.js    → Search, cart, and animation logic
├── images/      → Local product photography
└── README.md    → This file
```

---

## ✨ Features

- **13 iPhone models** across 4 tiers: Flagship, Standard, Previous Gen, Budget
- **Fully functional cart** — add items, view running total, remove individual items
- **Cart section** — dedicated section that opens/closes on the same page
- **Live search** — filters cards in real time as you type
- **Scroll entrance animations** — cards animate in as you scroll down
- **Hero staggered entrance** — text elements appear one after another on load
- **Button ripple effect** — click feedback on every Add to Cart button
- **Glassmorphism navbar** — frosted glass effect, gets more opaque on scroll
- **Card shine sweep** — light glint effect across product image on hover
- **Responsive grid** — adapts from 4 columns → 1 column with zero media queries
- **Real product photography** — local images, no external dependencies

---

## 🧠 Concepts Learned

This project was built milestone by milestone. Here's everything covered:

### HTML
| Concept | Where it's used |
|---------|----------------|
| Semantic tags (`nav`, `section`, `article`, `footer`) | Full page structure |
| Why `<script>` goes at the bottom of `<body>` | `script.js` loads after HTML elements exist |
| `data-*` attributes | `data-name`, `data-price`, `data-category` on cards |
| Loose coupling via `data-*` | JS reads from button directly — not from DOM tree |
| Anchor links (`href="#products"`) | CTA button scrolls to products section |
| `<span>` vs `<div>` — inline vs block | Logo accent color, badge text |
| `<a>` vs `<button>` — navigate vs act | Hero CTA uses `<a>`, cart uses `<button>` |
| Heading hierarchy (`h1` → `h2` → `h3`) | Hero, section title, card names |

### CSS
| Concept | Where it's used |
|---------|----------------|
| CSS custom properties (variables) | `:root` — one change updates the whole page |
| CSS reset (`box-sizing: border-box`) | Global `*` selector |
| `position: fixed` + `z-index` | Navbar stays on top while scrolling |
| `margin: 0 auto` to center containers | Navbar, hero, products section |
| Flexbox (`display: flex`) | Navbar, hero, card body, cart rows |
| CSS Grid (`auto-fill` + `minmax`) | Responsive products grid — no media queries |
| `clamp()` for responsive typography | Hero title scales without media queries |
| `position: relative/absolute` trick | Search icon inside input, badges over images |
| `flex: 1` + `margin-top: auto` | Pushes price/button to bottom of every card |
| `overflow: hidden` | Clips images and ripple inside card/button shape |
| `transition` vs `animation` | Hovers use transition; entrances use @keyframes |
| `@keyframes` + `animation` | Hero entrance, cart slidedown, ripple, bounce |
| `animation-delay` for staggering | Hero children appear one after another |
| `object-fit: contain` | Images fully visible, no cropping |
| `backdrop-filter: blur()` | Glassmorphism on navbar and badges |
| `::after` pseudo-element | Shine sweep effect across card images on hover |
| `.hidden` utility class | JS toggles `display:none` for cart, no-results |
| `.scrolled` state class | JS adds this on scroll → navbar increases opacity |

### JavaScript
| Concept | Where it's used |
|---------|----------------|
| `document.getElementById()` | Grabbing inputs, counters, sections |
| `document.querySelectorAll()` | Grabbing all cards and all buttons |
| `element.querySelector()` vs `document.querySelector()` | Searching inside one card only |
| `addEventListener('input')` | Live search on every keystroke |
| `addEventListener('click')` | Cart, ripple, open/close, remove |
| `window.addEventListener('scroll')` | Navbar scrolled state |
| `forEach()` loop | Iterating cards and buttons |
| `.classList.add/remove/toggle()` | JS/CSS bridge throughout |
| `.textContent` / `.innerHTML` | Reading names, rebuilding cart list |
| `dataset.name`, `dataset.price`, `dataset.id` | Reading `data-*` attributes |
| `cart.push({ id, name, price })` | Adding objects to cart array |
| `cart.filter()` | Removing an item by ID — returns new array without it |
| `cart.reduce()` | Calculating total price from cart array |
| `idCounter++` for unique IDs | Each cart item gets a unique ID for safe removal |
| `cartCount++` / `cartCount--` | Incrementing and decrementing |
| `setTimeout()` | Resetting button feedback after 1.2s |
| `IntersectionObserver` | Cards animate in when they enter the viewport |
| `void element.offsetWidth` | Forces DOM reflow to re-trigger CSS animations |
| `getBoundingClientRect()` | Click coordinates for ripple positioning |
| `document.createElement()` | Creating ripple and cart item rows dynamically |
| `element.appendChild()` / `ripple.remove()` | DOM manipulation for ripple cleanup |
| `scrollIntoView()` | Smooth scroll to cart section on open |
| Event delegation | One listener on cart container handles all remove buttons |
| Clear + rebuild pattern | `renderCart()` wipes and rebuilds list on every change |

---

## 🖼️ Photography

Product photos are stored locally in the `images/` folder.
Sources: Google Images (used for educational/personal project purposes).

---

## 🤝 Credits

**Built by:** Ernest  
**Guided by:** [Claude](https://claude.ai) (Anthropic) — Claude Sonnet 4.6  
**Method:** Milestone-by-milestone teaching. Every concept explained before every line of code was written. No copy-paste without understanding.  
**AI collaboration:** Gemini (Google) — assisted with styling refinements and project documentation.

> *"IDs are contracts between HTML and JS."*  
> *"data-* attributes make your JS independent of your HTML structure."*  
> *"auto moves something to the bottom by occupying everything above it."*  
> — Things Ernest said that were exactly right. 💯

---

## 🚀 How to Run

No setup needed. Just open `index.html` in any browser.

```
double-click index.html → opens in browser
```

Or with VS Code: install the **Live Server** extension → right-click `index.html` → Open with Live Server.

---

© 2026 Afrxcan Technologies. Built in Africa. 🌍