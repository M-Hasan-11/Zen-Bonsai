## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-02-14 - Loose Schema Validation
**Vulnerability:** The `orders` collection allowed any authenticated user to create documents with arbitrary fields and values (e.g., negative totals, incorrect status), relying solely on client-side logic for data integrity.
**Learning:** Firestore is schema-less by default, which can lead to data corruption or business logic bypasses if the client is compromised or malicious. "Serverless" doesn't mean "validation-less".
**Prevention:** Enforce strict schema validation in `firestore.rules` using type checks (`is number`, `is list`) and value constraints (`>= 0`, `== 'Processing'`). Use `size()` and `keys().hasAll([...])` to whitelist allowed fields and prevent injection of unknown data.
