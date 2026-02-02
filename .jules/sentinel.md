## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-06-25 - Firestore Order Schema Validation
**Vulnerability:** The `orders` collection lacked schema validation, allowing users to create orders with negative totals, incorrect statuses (e.g., bypassing 'Processing'), or malformed data structures.
**Learning:** In client-side apps, business logic (like price calculation and initial status) must be enforced at the database level since the client code can be bypassed.
**Prevention:** Use `firestore.rules` to enforce data types (`is number`, `is list`) and business constraints (`total >= 0`, `status == 'Processing'`) on document creation.
