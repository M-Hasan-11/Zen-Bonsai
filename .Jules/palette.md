## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-23 - Focus Visibility on Hover-Revealed Actions
**Learning:** The "Quick Add" buttons on product cards were using `group-hover:opacity-100` to appear, making them completely invisible and confusing for keyboard users who would tab into a "void".
**Action:** Always pair `group-hover` visibility transitions with `focus:opacity-100` and `focus:translate-y-0` (or equivalent) to ensure interactive elements are visible when focused.
