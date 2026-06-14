## Objective
On first visit to `/`, automatically scroll the user to the Pricing section so plans are the first thing they see — similar to LifeLock. On repeat visits, keep the current behavior (top of page).

## Changes
1. **Make Pricing eager** in `src/pages/Index.tsx`  
   - Import `Pricing` directly instead of lazy-loading it.  
   - Replace `<LazySection id="pricing"><Pricing /></LazySection>` with a plain `<div id="pricing"><Pricing /></div>` so the section mounts immediately and is ready for scroll.

2. **Add first-visit scroll logic** in the `useEffect` of `Index`  
   - Use a `localStorage` key (`fortiziq_has_visited`) to detect first visit.  
   - If not visited: set the flag, wait ~800 ms for the page to settle, then smooth-scroll to `#pricing`.  
   - If already visited: keep the existing `window.scrollTo(0, 0)` behavior.

## Scope
- Affects `src/pages/Index.tsx` only.  
- No visual design changes; just scroll behavior and eager-loading the Pricing component.

## Post-implementation
Verify on a fresh browser session (incognito) that the page lands on Pricing, and on a repeat session it starts at the top.