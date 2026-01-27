## 2026-01-23 - Firestore Privilege Escalation
**Vulnerability:** Users could potentially escalate privileges by modifying the client-side code to write `role: 'admin'` to their user document, as the Firestore rule only checked for ownership (`uid == userId`), not the content of the write.
**Learning:** In a "serverless" or client-direct-to-database architecture like Firebase, trusting the client with `write` permission is dangerous if sensitive fields exist in the same document as user-editable fields.
**Prevention:** Split `write` permissions into `create` and `update` in `firestore.rules`. Explicitly validate sensitive fields (like `role`) on `create` and prevent their modification on `update` by comparing `request.resource.data.role` with `resource.data.role`.

## 2026-02-14 - Firestore Schema Validation Gap
**Vulnerability:** The `orders` collection allowed creation of documents with any structure (e.g., negative totals, missing items) as long as `userId` matched, trusting client-side validation.
**Learning:** Client-side validation is insufficient for financial or critical data. Firestore Rules can and should enforce data types and constraints (like `total >= 0` and `items is list`) when using client-direct-to-database patterns.
**Prevention:** Always mirror business logic constraints in `firestore.rules` using `request.resource.data` validation checks, even if the UI prevents invalid input.
