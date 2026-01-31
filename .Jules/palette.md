## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-23 - Keyboard Accessibility for Hover Actions
**Learning:** Interactive elements that are revealed only on hover (using `opacity-0 group-hover:opacity-100`) are completely inaccessible to keyboard users, as they remain invisible even when focused.
**Action:** Always pair `group-hover:opacity-100` with `focus:opacity-100` (and `focus:translate` if applicable) to ensure the element becomes visible when it receives keyboard focus.
