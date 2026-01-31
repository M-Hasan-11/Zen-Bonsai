## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-01-24 - Firestore Order Schema Validation
**Vulnerability:** The `orders` collection lacked schema validation, allowing authenticated users to create orders with negative totals, immediate 'Delivered' status, or empty items, bypassing business logic and data integrity checks.
**Learning:** Client-side validation (in React components) is insufficient for security. Firestore rules must act as the "server-side" validation layer to enforce data shape and business constraints when clients write directly to the database.
**Prevention:** Enhanced `firestore.rules` to validate `total` (must be >= 0), `status` (must be 'Processing'), and `items` (must be a non-empty list) on order creation.
