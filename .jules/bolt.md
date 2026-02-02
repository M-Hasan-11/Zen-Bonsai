## 2025-02-14 - Code Splitting with Named Exports
**Learning:** `React.lazy` expects default exports. When working with a codebase that heavily uses named exports for pages, use the pattern `React.lazy(() => import('./path').then(module => ({ default: module.ExportName })))` to avoid refactoring all exports to default.
**Action:** Use this pattern immediately when refactoring legacy or established codebases for performance.

## 2025-02-14 - Identifying Heavy Chunks
**Learning:** `recharts` (300kB+) was bundled in the main entry because it was imported in `DashboardPage`, which was statically imported in `App.tsx`.
**Action:** always check `package.json` for heavy libs (charts, maps, editors) and `grep` their usage to see if they are in the critical path.

## 2025-05-23 - Context Value Memoization
**Learning:** When a Context Provider manages internal state (like toast visibility) that changes frequently, but the exposed API (showToast) is stable, failing to memoize the context `value` object causes all consumers to re-render unnecessarily on every state change. This is a significant performance bottleneck for large component trees.
**Action:** Always memoize the context value object using `useMemo`, especially when splitting state updates from API methods.
