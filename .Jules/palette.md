## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-24 - Interactive Element Visibility
**Learning:** Hover-revealed interactive elements (like "Quick Add" buttons) must also be revealed on focus. Otherwise, keyboard users will tab to an invisible element, causing confusion.
**Action:** Ensure that any element revealed on `:hover` is also revealed on `:focus` (e.g., using `focus:opacity-100`).
