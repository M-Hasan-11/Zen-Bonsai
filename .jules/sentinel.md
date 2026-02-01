## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-01-24 - Firestore Logic Bypass via Permissive Schema
**Vulnerability:** The `orders` collection allowed authenticated users to create any document provided the `userId` matched. This allowed attackers to inject orders with `status: 'Delivered'`, negative totals, or malformed items, bypassing business logic.
**Learning:** Checking ownership is not enough. You must enforce the *initial state* of the data (e.g., `status == 'Processing'`) and validate types/constraints (`total >= 0`) in security rules when the client writes directly to the DB.
**Prevention:** Use strict schema validation in `firestore.rules`. Enforce specific values for state fields on `create` and validate data types and ranges.
