# Improvement Recommendations — Lingkod Angeles Lyric Presenter

> Based on analysis of 144 business rules documented in [`BUSINESS_RULES.md`](./BUSINESS_RULES.md).  
> Recommendations are grouped by impact and effort.  
> ~~Strikethrough~~ = already implemented.

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

### ~~3. No visual distinction between slide transition directions~~ ✅ Done

~~**Reference:** Rules 4.1–4.5~~

~~Both next and previous transitions used identical `slide-out`/`slide-in` animations.~~

~~**Applied:** Next section slides content left ↔ right; previous section slides content right ↔ left, mirroring swipe gesture direction.~~

---

### ~~4. No "end of song" graceful navigation~~ ✅ Done

~~**Reference:** Rules 3.7, 3.9~~

~~When the user reached the last section, further right-arrow presses were silently ignored.~~

~~**Applied:** A pulse animation now plays on the lyric text and slide counter when pressing past the last section, providing haptic-like visual feedback. A re-entry guard (`isTransitioning`) also prevents key-repeat race conditions from overshooting the section index.~~

---

### ~~5. No keyboard shortcut to toggle sidebar visibility~~ ✅ Done

~~**Reference:** Rules 11.1–11.8~~

~~Sidebar could only be toggled via the on-screen button or backdrop click.~~

~~**Applied:** `Escape` key now closes the sidebar (when open) or exits fullscreen (when sidebar is already closed). `Escape` also closes the sidebar when pressed from within the search input.~~

---

### ~~6. Fullscreen toggle should restore sidebar state~~ ✅ Done

~~**Reference:** Rules 10.3–10.6~~

~~Exiting fullscreen (double-click, Escape, or browser F11) did not restore the sidebar's pre-fullscreen visibility.~~

~~**Applied:** The sidebar's open/closed state is now tracked in `wasSidebarOpenBeforeFullscreen`. On fullscreen exit, the sidebar is automatically restored if it was open before entering fullscreen. Works for all exit paths: double-click, Escape key, and browser F11.~~

---

### 7. Inconsistent fullscreen behavior on same-song reselection

**Reference:** Rule 2.3

Selecting the same song again is a no-op (doesn't re-enter fullscreen). If the user exits fullscreen and wants to quickly re-enter, they must double-click the main area or pick a different song first.

**Recommendation:** If the same song is selected while not in fullscreen, still enter fullscreen (don't skip the fullscreen request just because the song didn't change). The `wasDiff` guard should only protect against re-triggering fullscreen when already in fullscreen.

---

## 🟡 Medium Priority (Quality & Robustness)

### ~~8. Font sizing engine had no error boundaries~~ ✅ Done

~~**Reference:** Rules 7.1–7.11~~

~~The `computeOptimalFontSize()` function had division operations with no guards against zero or NaN values.~~

~~**Applied:** Added `isFinite()` guards on `maxLineWidth`, `basePx`, `maxPx`, and `finalFont`. `basePx` now falls back to `16` (browser default) if the computed value is invalid. `finalFont` clamps to `minFont` (0.9rem) on any NaN/infinite result.~~

---

### ~~9. No loading state or error handling for missing songs.js~~ ✅ Done

~~**Reference:** Rule 1.1~~

~~If `songs.js` failed to load, the app would crash with `rawSongs is not defined`.~~

~~**Applied:** Added a runtime check for `typeof rawSongs !== 'undefined'` before initializing the song database. On failure, an error message is shown in the sidebar and the app gracefully degrades with an empty song list.~~

---

### ~~10. Service worker had no update notification~~ ✅ Done

~~**Reference:** Rules 16.1–16.6~~

~~When `VERSION` was bumped in `sw.js`, there was no user-visible notification — the old cached files kept serving until all tabs were closed.~~

~~**Applied:** The service worker now posts `{ type: 'UPDATE_AVAILABLE' }` to all clients on activate. The page listens for this message and shows a blue banner at the bottom: "✨ A new version is available — tap here to refresh." Clicking reloads the page.~~

---

### ~~11. No empty-state guidance on first load~~ ✅ Done

~~**Reference:** Rules 12.7–12.8~~

~~On first load with no song selected, the main area was completely blank.~~

~~**Applied:** A welcome card now appears when no song is selected, showing keyboard shortcuts, touch gestures, and a prompt to open the sidebar. The card uses the same glassmorphism background as the lyric display for visual consistency.~~

---

### ~~12. Song list re-render used individual DOM appends~~ ✅ Done

~~**Reference:** Rule 2.5~~

~~Each song item was individually appended to the DOM in a loop, causing multiple reflows.~~

~~**Applied:** Song list rendering now uses `DocumentFragment` for batch DOM insertion — all items are built off-screen, then added to the container in a single operation.~~

---

### ~~13. Double-tap detection could conflict with swipe~~ ✅ Done

~~**Reference:** Rules 17.4–17.7~~

~~A fast swipe followed by a quick second tap could accidentally trigger fullscreen toggle.~~

~~**Applied:** When a swipe is detected (`|dx| > 50` and horizontal dominance), `lastTap` is reset to `0` and the handler returns early — suppressing double-tap detection for that gesture cycle.~~

---

### ~~14. Search debounce was slow (200ms)~~ ✅ Done

~~**Reference:** Rule 12.2~~

~~The 200ms debounce felt sluggish for a ~100-item list.~~

~~**Applied:** Reduced to **100ms** for snappier filtering while still avoiding excessive re-renders during rapid typing.~~

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

### ~~22. Background image was preloaded but font preloads were inconsistent~~ ✅ Done

~~**Reference:** Rules 20.9–20.10~~

~~Only two of five font weights were preloaded (Regular and SemiBold). The Bold weight used in the counter was not preloaded, risking a flash of unstyled text.~~

~~**Applied:** All five Raleway `.woff2` font weights (Regular, Medium, SemiBold, Bold, ExtraBold) are now preloaded via `<link rel="preload">`.~~

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

| Priority | Count | Remaining Themes |
|----------|------:|------------------|
| 🔴 High  | 3     | Section type colors, PRE-CHORUS badge, same-song fullscreen re-entry |
| 🟡 Medium | 0     | _(all medium items implemented)_ |
| 🟢 Low   | 9     | Polish, accessibility hints, data optimization, print support |

**Highest ROI remaining:** #1 (section type colors), #2 (PRE-CHORUS badge), #16 (section jump shortcuts).
