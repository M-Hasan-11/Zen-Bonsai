## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-23 - Toast Notification Accessibility
**Learning:** Toast notifications often lack `role="status"` or `aria-live`, making them silent for screen reader users. Additionally, invisible toasts (opacity: 0) can block clicks if `pointer-events-none` is not applied.
**Action:** Ensure all toast components use `role="status"`, `aria-live="polite"`, and toggle `pointer-events` based on visibility state.
