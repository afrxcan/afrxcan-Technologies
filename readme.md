# Afrxcan Technologies — iPhone Store

A premium, Apple-esque iPhone product page built with pure HTML, CSS, and JavaScript.
Dark theme with gold accents, real product photography, smooth animations, live search, and add-to-cart functionality.

---

## 🗂️ Project Structure

```
afrxcan-technologies/
├── index.html   → Page structure and content
├── style.css    → All visual styles and animations
├── script.js    → Search, cart, and animation logic
└── README.md    → This file
└── images/      → Contains all the images for the webpage
```

---

## ✨ Features

- **13 iPhone models** across 4 tiers: Flagship, Standard, Previous Gen, Budget
- **Live search** — filters cards in real time as you type
- **Add to Cart** — cart counter updates in navbar with visual feedback
- **Scroll entrance animations** — cards animate in as you scroll down
- **Hero staggered entrance** — text elements appear one after another on load
- **Button ripple effect** — click feedback on every Add to Cart button
- **Responsive grid** — adapts from 4 columns → 1 column with zero media queries
- **Real product photography** via Unsplash (free, no copyright issues)

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
| CSS custom properties (variables) | `:root` — all colors, spacing, sizes |
| CSS reset (`box-sizing: border-box`) | Global `*` selector |
| `position: fixed` + `z-index` | Navbar stays on top while scrolling |
| `margin: 0 auto` to center containers | Navbar, hero, products section |
| Flexbox (`display: flex`) | Navbar layout, hero layout, card body |
| CSS Grid (`auto-fill` + `minmax`) | Responsive products grid — no media queries |
| `clamp()` for responsive typography | Hero title and section title |
| `position: relative/absolute` trick | Search icon inside input, badge over image |
| `flex: 1` + `margin-top: auto` | Pushes price/button to bottom of every card |
| `overflow: hidden` | Clips images and ripple inside card/button shape |
| `transition` vs `animation` | Hover effects use transition; entrances use @keyframes |
| `@keyframes` + `animation` | Page load, hero entrance, ripple |
| `animation-delay` for staggering | Hero children appear one after another |
| `object-fit: cover` | Images fill container without distorting |
| `.hidden` utility class | JS toggles `display:none` for no-results message |

### JavaScript
| Concept | Where it's used |
|---------|----------------|
| `document.getElementById()` | Grabbing search input, cart count, no-results |
| `document.querySelectorAll()` | Grabbing all cards and all buttons |
| `element.querySelector()` vs `document.querySelector()` | Card name search inside loop |
| `addEventListener('input')` | Live search on every keystroke |
| `addEventListener('click')` | Cart and ripple on button click |
| `forEach()` loop | Iterating cards and buttons |
| `.classList.add/remove()` | JS/CSS bridge — toggling hidden and visible classes |
| `.textContent` | Reading card names, updating cart count |
| `dataset.name`, `dataset.price` | Reading `data-*` attributes on buttons |
| `cart.push({ name, price })` | Adding items to cart array as objects |
| `cartCount++` shorthand | Incrementing cart counter |
| `setTimeout()` | Resetting button text after 1.5s |
| `IntersectionObserver` | Watching cards enter viewport for scroll animation |
| `getBoundingClientRect()` | Getting click position relative to button for ripple |
| `document.createElement()` | Creating ripple span dynamically |
| `element.appendChild/remove()` | Adding and cleaning up ripple span |

---

## 🖼️ Photography

Product photos sourced from [Unsplash](https://unsplash.com) — free to use, no attribution required under the Unsplash License.

---

## 🤝 Credits

**Built by:** Ernest  
**Guided by:** [Claude](https://claude.ai) (Anthropic) — Claude Sonnet 4.6  
**Method:** Milestone-by-milestone teaching. Every concept explained before every line of code was written. No copy-paste without understanding.
**AI Architecture & Design:** Gemini (Google)  
**Collaboration Style:** Milestone-by-milestone refinement with a focus on code integrity and zero-cropping logic. It also helped in project documentation

> *"IDs are contracts between HTML and JS."*  
> *"data-* attributes make your JS independent of your HTML structure."*  
> — Things Ernest said that were exactly right.

---

## 🚀 How to Run

No setup needed. Just open `index.html` in any browser.

```
double-click index.html → opens in browser
```

Or if you have VS Code: install **Live Server** extension → right-click `index.html` → Open with Live Server.

---

© 2026 Afrxcan Technologies. Built in Africa. 🌍
