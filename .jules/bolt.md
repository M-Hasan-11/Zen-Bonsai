## 2025-02-14 - Code Splitting with Named Exports
**Learning:** `React.lazy` expects default exports. When working with a codebase that heavily uses named exports for pages, use the pattern `React.lazy(() => import('./path').then(module => ({ default: module.ExportName })))` to avoid refactoring all exports to default.
**Action:** Use this pattern immediately when refactoring legacy or established codebases for performance.

## 2025-02-14 - Identifying Heavy Chunks
**Learning:** `recharts` (300kB+) was bundled in the main entry because it was imported in `DashboardPage`, which was statically imported in `App.tsx`.
**Action:** always check `package.json` for heavy libs (charts, maps, editors) and `grep` their usage to see if they are in the critical path.

## 2025-02-14 - React Context Performance
**Learning:** `CartContext` was re-rendering all consumers on every provider render because the `value` object was recreated.
**Action:** Always wrap context values in `useMemo` and functions in `useCallback` to allow consumers to bail out of rendering.
