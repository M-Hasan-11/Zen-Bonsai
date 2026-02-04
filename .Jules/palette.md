## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-24 - Hidden Interactive Elements
**Learning:** "Quick Add" buttons on product cards were using `opacity-0` and `translate-y` for hover effects, effectively removing them from the visual flow for keyboard users even though they received focus. This creates a "ghost focus" experience where the user tabs to an invisible element.
**Action:** When using hover-reveal patterns for interactive elements, always pair them with `focus:opacity-100` and `focus:translate-y-0` (and `focus-visible` styles) to ensure they become visible when accessed via keyboard.
