## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2026-01-25 - Accessibility in Quantity Controls
**Learning:** Quantity adjustment controls (+/-) and icon-only buttons (trash) were inaccessible to screen readers. This pattern of relying on visual symbols without text alternatives was pervasive in the cart and product flows.
**Action:** When implementing quantity selectors or icon buttons, always include dynamic `aria-label`s that provide context (e.g., "Increase quantity of [Product Name]"), not just the action.
