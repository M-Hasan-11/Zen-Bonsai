## 2024-05-22 - Accessibility in Navigation
**Learning:** Critical navigation elements (search, cart, menu toggle) were relying solely on visual icons without accessible names, making the app difficult to navigate for screen reader users. Also, a "Skip to content" link was missing, forcing keyboard users to tab through the entire menu on every page load.
**Action:** Always verify icon-only buttons have `aria-label`. Include a "Skip to content" link as a standard part of the Layout component in future projects.

## 2024-05-23 - Specific Labels for Controls
**Learning:** Generic text content like "+" or "-" on buttons is often insufficient for screen reader users. Quantity controls should explicitly say "Increase quantity" or "Decrease quantity". Similarly, image thumbnails need "View image X" rather than just "button".
**Action:** Use specific, functional labels for state-changing buttons (increase/decrease, next/previous) instead of relying on their visual symbols.
