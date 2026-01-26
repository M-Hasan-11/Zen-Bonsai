## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2026-01-26 - Invisible Overlay Blocking Interactions
**Learning:** Toast notifications that use opacity for visibility transitions can leave an invisible, interactive layer over content if `pointer-events-none` is not applied when hidden. This frustrates users by blocking clicks on elements underneath the "empty" space.
**Action:** When animating opacity for overlays, always toggle `pointer-events-none` based on visibility state or use `visibility: hidden` to ensure the element is truly inert when not visible.
