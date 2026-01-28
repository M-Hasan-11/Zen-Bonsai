## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-21 - Invalid Nesting in Product Cards
**Learning:** Placing interactive elements (buttons) inside React Router `Link` components creates invalid HTML (nested interactive controls) and complicates automated testing/accessibility.
**Action:** Always refactor product cards to use a relative container with absolute positioning for the link (background/overlay) and separate siblings for other interactive buttons.
