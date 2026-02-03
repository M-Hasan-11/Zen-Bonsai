## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-01-24 - Firestore Schema Enforcement
**Vulnerability:** The `orders` collection allowed creation of documents with arbitrary fields and values, provided the `userId` matched. This could allow users to create orders with negative totals, invalid statuses, or malformed payloads.
**Learning:** In NoSQL databases like Firestore, schema validation is not automatic. Rules must explicitly define allowed fields and types to prevent "data pollution" and logical exploits.
**Prevention:** Use `request.resource.data.keys().hasOnly([...])` to enforce strict schema, and validate the type and range of each field (e.g., `total >= 0`, `status == 'Processing'`).
