## 2025-02-14 - Code Splitting with Named Exports
**Learning:** `React.lazy` expects default exports. When working with a codebase that heavily uses named exports for pages, use the pattern `React.lazy(() => import('./path').then(module => ({ default: module.ExportName })))` to avoid refactoring all exports to default.
**Action:** Use this pattern immediately when refactoring legacy or established codebases for performance.

## 2025-02-14 - Identifying Heavy Chunks
**Learning:** `recharts` (300kB+) was bundled in the main entry because it was imported in `DashboardPage`, which was statically imported in `App.tsx`.
**Action:** always check `package.json` for heavy libs (charts, maps, editors) and `grep` their usage to see if they are in the critical path.

## 2026-01-26 - Lazy Loading Co-located Components
**Learning:** Components exported from the same file are bundled together by Vite/Webpack, even if imported separately via `React.lazy`. This negates the benefit of code splitting if one component has heavy dependencies (like Firestore) that the other doesn't need.
**Action:** Ensure lazy-loaded components are in separate files to guarantee separate chunks.
