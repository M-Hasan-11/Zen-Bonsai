## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-02-14 - Firestore Schema Validation Gap
**Vulnerability:** The `orders` collection lacked schema validation in `firestore.rules`, relying solely on client-side TypeScript interfaces. This allowed authenticated users to create malformed orders (e.g., negative totals, invalid status).
**Learning:** TypeScript interfaces are for developer experience, not security. In serverless apps, the database rules act as the backend controller and must strictly enforce the expected schema.
**Prevention:** Mirror the critical parts of the data schema (types, allowed values, ranges) directly in `firestore.rules` for all public write operations.
