## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-02-14 - Firestore Loose Schema Validation
**Vulnerability:** The `orders` collection allowed authenticated users to create documents with arbitrary fields and types (e.g., negative totals, incorrect status), potentially corrupting business data.
**Learning:** While `userId` checks prevent unauthorized access, they do not prevent authorized users from writing malformed data. Client-side validation is insufficient for data integrity in a client-to-DB architecture.
**Prevention:** Enforce strict schema validation in `firestore.rules` using `keys().hasAll(...)` and type checks (`is number`, `is list`) to ensure the database only accepts valid data structures.
