# Improvement Recommendations — Lingkod Angeles Lyric Presenter

> Based on analysis of 144 business rules documented in [`BUSINESS_RULES.md`](./BUSINESS_RULES.md).  
> Recommendations are grouped by impact and effort.

---

## 🔴 High Priority (User-Facing Impact)

### 1. Visual differentiation for section types

**Reference:** Rule 6.4

All section types (`VERSE`, `CHORUS`, `BRIDGE`, `REFRAIN`, `END`) currently share identical visual styling despite having distinct CSS classes already defined. The class infrastructure exists but is unused.

**Recommendation:** Assign distinct accent colors per section type. Example:
- `VERSE` → cool blue (`#4f9eff`)
- `CHORUS` → warm gold (`#ffb347`)
- `BRIDGE` → purple (`#b366ff`)
- `REFRAIN` → teal (`#4ecdc4`)
- `END` → rose/red (`#ff6b6b`)

This gives worship leaders at-a-glance awareness of song structure during live presentation.

---

### 2. `PRE-CHORUS` missing from badge color map

**Reference:** Rules 6.2, 19.2

The song database includes `PRE-CHORUS` sections (e.g., "He is our shield", "The Way") but the `badgeColorMap` in `index.html` omits it, causing silent fallback to `badge-verse`.

**Recommendation:** Add `'PRE-CHORUS': 'badge-pre-chorus'` to the map and corresponding CSS, so it doesn't masquerade as a VERSE.

---

### 3. No visual distinction between slide transition directions

**Reference:** Rules 4.1–4.5

Both next and previous transitions use identical `slide-out`/`slide-in` animations (upward fade). The user cannot tell whether they moved forward or backward.

**Recommendation:** Differentiate directions:
- **Next section:** slide up/left (`translateY(-8px)` / `translateX(-8px)`)
- **Previous section:** slide down/right (`translateY(8px)` / `translateX(8px)`)

Or use a horizontal slide: leftward for next, rightward for previous — which mirrors the swipe gesture direction and feels more natural.

---

### 4. No "end of song" graceful navigation

**Reference:** Rules 3.7, 3.9

When the user reaches the last section, the only indicator is `"♢ end of song ♢"` text. Further right-arrow presses are silently ignored.

**Recommendation:**
- Add a subtle visual pulse/flash on the slide counter when at the last section and the user presses right again (haptic-like feedback)
- Consider auto-advancing to the next song in the list, or showing a "Next song →" prompt
- At minimum, briefly animate the end-of-song text (e.g., gentle scale bounce) to confirm the boundary

---

### 5. No keyboard shortcut to toggle sidebar visibility

**Reference:** Rules 11.1–11.8

Sidebar can only be toggled via the on-screen button or clicking backdrop, but keyboard-only users (e.g., when projected and controlled from a laptop) cannot open/close it without reaching for the mouse.

**Recommendation:** Bind a keyboard shortcut (e.g., `Escape` to close sidebar, `Ctrl+F` / `Cmd+F` or `/` to open and focus search). `Escape` should also exit fullscreen if no sidebar is open.

---

### 6. Fullscreen toggle should respect sidebar state

**Reference:** Rules 10.3–10.6

When selecting a new song, fullscreen is entered and sidebar is closed. But double-clicking to exit fullscreen does **not** restore the sidebar state — the sidebar remains closed.

**Recommendation:** Track and restore the sidebar's pre-fullscreen visibility state. If the sidebar was open before entering fullscreen, re-open it when exiting fullscreen.

---

### 7. Inconsistent fullscreen behavior on same-song reselection

**Reference:** Rule 2.3

Selecting the same song again is a no-op (doesn't re-enter fullscreen). But what if the user exited fullscreen and wants to quickly re-enter? They must double-click the main area or pick a different song first.

**Recommendation:** If the same song is selected while not in fullscreen, still enter fullscreen (don't skip the fullscreen request just because the song didn't change). The `wasDiff` guard should only protect against re-triggering fullscreen when already in fullscreen.

---

## 🟡 Medium Priority (Quality & Robustness)

### 8. Font sizing engine is fragile — no error boundaries

**Reference:** Rules 7.1–7.11

The `computeOptimalFontSize()` function has multiple division operations (e.g., `maxWidth / maxLineWidth`, `maxPx / basePx`) with no guards against zero or NaN values. If `getComputedStyle` returns an unexpected value or the DOM is in an unusual state, font size could break silently.

**Recommendation:** Add guard clauses:
- If `maxLineWidth <= 0`, skip width-based sizing
- If `basePx <= 0`, fall back to `16` (standard browser default)
- If `numLines <= 0`, skip height-based sizing
- Clamp `finalFont` before assignment

---

### 9. No loading state or error handling for missing songs.js

**Reference:** Rule 1.1

If `songs.js` fails to load (network error, blocker), the app crashes with `rawSongs is not defined` — there's no fallback.

**Recommendation:** Wrap the init logic in a try/catch or feature-detect `rawSongs`. Show a graceful error message: `"Unable to load song database. Check your connection and refresh."` with a retry button.

---

### 10. Service worker has no update notification

**Reference:** Rules 16.1–16.6

When `VERSION` is bumped in `sw.js`, assets are re-cached, but the old service worker continues serving the old cached `index.html` and `songs.js` until the user closes all tabs. There's no `skipWaiting()` + `clients.claim()` flow or user prompt to refresh.

**Recommendation:** After the new SW activates (or use `self.skipWaiting()` on install), post a message to all clients:
```js
// In sw.js activate: self.clients.matchAll().then(clients =>
//   clients.forEach(c => c.postMessage({ type: 'UPDATE_AVAILABLE' })))
```
In the page, listen for this message and show a "New version available — tap to refresh" banner.

---

### 11. No empty-state guidance on first load

**Reference:** Rules 12.7–12.8

On first load with no song selected, the main area is completely blank (no text, no badge, transparent wrapper). The empty states only appear in the sidebar.

**Recommendation:** Show a welcome prompt in the main area when no song is selected:
```
✨ Open the sidebar to choose a song
   or tap ◀ ▶ to navigate

   ← →  Navigate sections
   Double‑click  Toggle fullscreen
```

---

### 12. Song list re-render optimization is incomplete

**Reference:** Rule 2.5

The song list is only re-rendered when the active song **title** changes. However, the list is also re-rendered on: every search term change (correct), initial render, and in `updateDisplay()` when `prevSong !== newSong`. The `innerHTML` is fully rebuilt each time — there's no virtual DOM or diffing.

**Recommendation:** For the song list (which rarely changes), use a simple DOM recycling pattern or at minimum batch `innerHTML` assignments. For a dataset this size (~100 songs) it's not critical, but the pattern would matter if the song count grows significantly.

---

### 13. Double-tap detection can conflict with swipe

**Reference:** Rules 17.4–17.7

Both swipe and double-tap gestures share the same `touchend` handler. A fast swipe followed by a quick second tap could accidentally trigger fullscreen.

**Recommendation:** When a swipe is detected (`|dx| > 50`), suppress double-tap detection for that gesture cycle (set `lastTap = 0`). Only check for double-tap when no significant swipe occurred.

---

### 14. Search debounce is lost on rapid typing

**Reference:** Rule 12.2

The 200ms debounce works for moderate typing, but if the user types faster than 200ms-per-keystroke, each keystroke resets the timer — the list only renders after they pause. While this is standard behavior, for a ~100-item list a shorter debounce (100ms) or instant render would feel more responsive without performance cost.

**Recommendation:** Reduce debounce to **100ms** or use a maximum-wait pattern (render at least every 300ms even during rapid typing).

---

## 🟢 Low Priority (Polish & Niceties)

### 15. Slide counter shows "0/0" for songs with empty sections array

**Reference:** Rule 5.3

This is technically correct but communicates nothing useful to the user. A song with zero sections is effectively broken data.

**Recommendation:** Treat a song with zero sections as unrenderable — show `"—/—"` and display `"This song has no sections"` as the lyric text. Log a warning to the console.

---

### 16. No "jump to section" via counter tap

**Reference:** Rules 5.1–5.6

The slide counter is informational only (`pointer-events: none`). A worship leader who wants to jump directly to the bridge or chorus must press the arrow key repeatedly.

**Recommendation:** Consider making the counter tappable (remove `pointer-events: none`) to open a quick section picker overlay. Or add number key shortcuts: `1` = first section, `2` = second, etc.

---

### 17. Status bar shows navigation hint but only keyboard

**Reference:** Rule 12.6

The status bar shows `◀ ▶ (Navigate)` but doesn't mention touch swipe gestures or double-tap for fullscreen. Touch-only users (tablets/phones) see a keyboard hint they can't use.

**Recommendation:** Detect touch capability and adapt the hint:
- Touch device: `← Swipe → Navigate  ·  Double-tap Fullscreen`
- Desktop: `◀ ▶ Navigate  ·  Double-click Fullscreen`

---

### 18. No dark/light theme support

**Reference:** Rules 14.1–14.5, 20.1

The app is hard-coded to a dark theme (`#0a0a0f` background, light text). There's no `prefers-color-scheme` media query or manual toggle.

**Recommendation:** This app is designed for projection in dimly-lit worship settings, so dark-only is likely intentional. But if the sidebar is used in bright environments for song selection, consider adding a high-contrast toggle or respecting `prefers-color-scheme` for the sidebar panel only.

---

### 19. Raleway font files are loaded but not all used

**Reference:** Rule 20.8

Five `.woff2` files are cached (Regular, Medium, SemiBold, Bold, ExtraBold), but only Regular (400), SemiBold (600), and Bold (700) are used in the main UI. Medium (500) and ExtraBold (800) are defined in `@font-face` but never referenced.

**Recommendation:** Either remove unused weights to reduce cache size, or use ExtraBold for the slide counter and section badge for stronger visual hierarchy.

---

### 20. No analytics or usage tracking

**Reference:** General

There's no insight into which songs are most frequently presented, how many sections users typically navigate through, or whether the app is being used.

**Recommendation (optional):** Add lightweight, privacy-respecting analytics (e.g., which songs are selected most often, average section count per session). This would help curate the song list. Store locally first; optionally sync if the user opts in.

---

### 21. Song data is monolithic — no lazy loading

**Reference:** Rules 1.1–1.5

All ~100 songs (~180KB) are loaded in a single `songs.js` file, parsed, and sorted on every page load. For a PWA this is acceptable, but as the song count grows it will become a bottleneck.

**Recommendation:** If the song list exceeds ~300 songs, consider:
- Splitting into separate files by category/alphabet
- Lazy-loading on scroll in the sidebar
- Pre-computing the sorted array at build time rather than at runtime

---

### 22. Background image is preloaded but font preloads are inconsistent

**Reference:** Rules 20.9–20.10

Only two of five font weights are preloaded (`Raleway-Regular` and `Raleway-SemiBold`). The Bold weight used in the counter is not preloaded, causing a potential flash-of-unstyled-text on first load.

**Recommendation:** Preload all font weights that are used in the critical rendering path, or reduce the used weights to only Regular + SemiBold for consistency.

---

### 23. No print stylesheet

**Reference:** General

If a worship leader wants to print a song's lyrics for rehearsal, there's no `@media print` styles.

**Recommendation:** Add a minimal print stylesheet that:
- Hides sidebar, toggle button, slide counter
- Shows all sections of the current song stacked vertically
- Uses black text on white background (ink-friendly)

---

## Summary

| Priority | Count | Key Themes |
|----------|------:|------------|
| 🔴 High  | 7     | Visual differentiation, navigation feedback, keyboard accessibility, fullscreen state restoration |
| 🟡 Medium | 7     | Error handling, service worker updates, gesture conflicts, empty-state UX |
| 🟢 Low   | 9     | Polish, accessibility hints, data optimization, print support |

**Highest ROI quick wins:** #1 (section colors), #5 (keyboard shortcuts), #7 (fullscreen restore), #13 (gesture conflict fix).
