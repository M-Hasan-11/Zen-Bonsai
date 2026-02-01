## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-23 - Nested Interactive Elements in Cards
**Learning:** Wrapping entire product cards in a single `Link` component creates invalid HTML when those cards contain other interactive buttons (like "Quick Add"). This breaks keyboard navigation and accessibility for the nested buttons.
**Action:** Use a "stretched link" pattern or split the card into separate clickable areas (image + title) to allow sibling positioning of interactive actions. Always ensure hover-revealed actions are also focus-revealed.
