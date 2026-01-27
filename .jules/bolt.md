## 2025-02-14 - Code Splitting with Named Exports
**Learning:** `React.lazy` expects default exports. When working with a codebase that heavily uses named exports for pages, use the pattern `React.lazy(() => import('./path').then(module => ({ default: module.ExportName })))` to avoid refactoring all exports to default.
**Action:** Use this pattern immediately when refactoring legacy or established codebases for performance.

## 2025-02-14 - Identifying Heavy Chunks
**Learning:** `recharts` (300kB+) was bundled in the main entry because it was imported in `DashboardPage`, which was statically imported in `App.tsx`.
**Action:** always check `package.json` for heavy libs (charts, maps, editors) and `grep` their usage to see if they are in the critical path.

## 2025-05-23 - Component Colocation vs. Code Splitting
**Learning:** Colocating multiple page components (e.g., `ProductPage` and `CartPage`) in a single file prevents `React.lazy` from splitting them into separate chunks, forcing users to download dependencies for all pages in that file (e.g., Firestore for Cart) even if they only visit one.
**Action:** Always ensure page-level components are in dedicated files to maximize the effectiveness of route-based code splitting.
