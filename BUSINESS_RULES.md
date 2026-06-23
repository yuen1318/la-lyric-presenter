# Business Rules — Lingkod Angeles Lyric Presenter

> **Project:** A single-page, offline-capable worship lyric presentation tool.  
> **Tech:** Vanilla HTML/CSS/JS + Service Worker (PWA).  
> **Primary files:** `index.html` (UI + application logic), `songs.js` (song database), `sw.js` (service worker caching).  
> **Date extracted:** 2026-06-23

---

## 1. Song Data Model

| # | Rule |
|---|------|
| **1.1** | The song database is defined as a static array `rawSongs` in `songs.js`. |
| **1.2** | Every song object **must** have a `title` (string) and a `sections` array. |
| **1.3** | Every section **must** have a `name` (string identifier) and `lyrics` (multiline string using `\n` for line breaks). |
| **1.4** | Section `name` values follow a controlled vocabulary: `VERSE`, `CHORUS`, `BRIDGE`, `REFRAIN`, `PRE-CHORUS`, `END`. |
| **1.5** | At runtime, the database is sorted alphabetically by `title` using locale-sensitive comparison with `{ sensitivity: 'base' }` (case-insensitive, diacritic-insensitive). |
| **1.6** | A song **may** have only a single section (e.g., "Nada Te Turbe" has one VERSE section). |
| **1.7** | A song **may** have multiple consecutive sections of the same type (e.g., multiple VERSEs or CHORUSes in sequence). |

---

## 2. Song Selection

| # | Rule |
|---|------|
| **2.1** | Selecting a song from the sidebar resets `currentSectionIndex` to `0` (first section of the song). |
| **2.2** | Selecting a **new** song (different from current) automatically triggers fullscreen entry (if not already in fullscreen). |
| **2.3** | Selecting the **same** song that is already active does **not** re-trigger fullscreen. |
| **2.4** | Entering fullscreen from song selection auto-closes the sidebar. |
| **2.5** | The song list in the sidebar is only re-rendered when the **active song title changes** — not on every section navigation. |
| **2.6** | The currently active song is highlighted with the `.active-song` CSS class (blue left border + background). |
| **2.7** | On narrow screens (`≤ 700px`), selecting a song also auto-closes the sidebar. |

---

## 3. Section / Slide Navigation

| # | Rule |
|---|------|
| **3.1** | **Right arrow key** (`ArrowRight`) advances to the **next** section. |
| **3.2** | **Left arrow key** (`ArrowLeft`) returns to the **previous** section. |
| **3.3** | Keyboard navigation is **blocked** when the search input has focus (`document.activeElement?.id === 'searchInput'`). |
| **3.4** | **Touch swipe left** (horizontal drag ending leftward) triggers next section. |
| **3.5** | **Touch swipe right** (horizontal drag ending rightward) triggers previous section. |
| **3.6** | Swipe gesture requires: absolute horizontal distance `> 50px` **AND** `|dx| > |dy| * 1.5` (horizontal dominance check; vertical scrolling is not intercepted). |
| **3.7** | Navigation past the **last section** is blocked: `currentSectionIndex + 1 >= sections.length`. |
| **3.8** | Navigation before the **first section** is blocked: `currentSectionIndex <= 0`. |
| **3.9** | When the user is at a valid section index **beyond** the last section, the lyric display shows `"♢  end of song  ♢"`. |

---

## 4. Slide Transitions

| # | Rule |
|---|------|
| **4.1** | Every section change triggers a CSS-based cross-fade transition. |
| **4.2** | Sequence: add `slide-out` → wait 120ms → update content → remove `slide-out`, add `slide-in` → wait ~15ms (one animation frame) → remove `slide-in`. |
| **4.3** | `slide-out` translates the text up 8px and fades to opacity 0. |
| **4.4** | `slide-in` starts translated down 8px and fades in. |
| **4.5** | Transition direction (next vs. prev) is **not** visually differentiated — both use the same classes. |

---

## 5. Slide Counter & Title Bar

| # | Rule |
|---|------|
| **5.1** | The slide counter displays `"current/total"` format using **1-based** indexing (`currentSectionIndex + 1`). |
| **5.2** | When a song with sections is active: displays e.g. `"3/8"`. |
| **5.3** | When a song is selected but has **zero** sections: displays `"0/0"`. |
| **5.4** | When **no song** is selected: displays `"—/—"`. |
| **5.5** | The slide title bar shows the current song's `title`, or `"—"` if no song is selected. |
| **5.6** | Both counter and title bar are **always visible** (`.hidden-counter` is removed on every `updateSlideCounter()` call, including on fullscreen toggle). |

---

## 6. Section Badge (Type Label)

| # | Rule |
|---|------|
| **6.1** | Each section's `name` is displayed in a badge above the lyrics (e.g., `"VERSE"`, `"CHORUS"`). |
| **6.2** | Section types map to CSS classes via `badgeColorMap`: `VERSE→badge-verse`, `CHORUS→badge-chorus`, `BRIDGE→badge-bridge`, `REFRAIN→badge-refrain`, `END→badge-end`. |
| **6.3** | Unknown/unmapped section types **default** to `badge-verse`. |
| **6.4** | All section types currently share **identical** visual styling (same background, border, color) — the CSS class differentiation exists but is not visually exploited. |
| **6.5** | The badge is only visible (`.visible` class) when a section `name` is present. |
| **6.6** | When a song has no current section or no song is selected, the badge is hidden and its text is cleared. |

---

## 7. Lyric Display (Font Sizing Engine)

| # | Rule |
|---|------|
| **7.1** | Font size is dynamically computed on every display update to fill available space optimally. |
| **7.2** | **Available width** = viewport width − horizontal margin (40px, +320px if sidebar visible) − wrapper horizontal padding − 20px buffer. Clamped to [200px, 90vw]. |
| **7.3** | **Available height** = viewport height − wrapper vertical padding − badge height (if visible) − counter reserve (100px fullscreen, 70px normal) − 30px buffer. Minimum 150px. |
| **7.4** | A hidden `<span>` element is used to measure text width at a reference font size of **2.0rem** — avoids DOM thrash. |
| **7.5** | **Width-based font size** = `(maxWidth / maxMeasuredLineWidth) * 2.0 * 0.95`. |
| **7.6** | **Height-based font size** = `(maxHeight / (1.4 * lineCount)) / basePx * 0.95`. |
| **7.7** | **Final font size** = `max(0.9rem, min(widthBased, heightBased))` — the tighter constraint wins. |
| **7.8** | **Absolute max font size** (`absMax`) varies by viewport: `5.2rem` (default or vh > 800), `5.0rem` (≥1280×720), `3.8rem` (vw ≤ 600), `4.6rem` (otherwise), `5.5rem` (fullscreen with vw ≥ 1600). |
| **7.9** | **Line height** is locked at `1.4`. |
| **7.10** | **White-space** is forced to `pre` — no automatic line wrapping is permitted. |
| **7.11** | `word-break: keep-all` and `overflow-wrap: normal` prevent mid-word breaks. |

---

## 8. Dynamic Letter Spacing

| # | Rule |
|---|------|
| **8.1** | Letter spacing adapts based on the **longest line's character count**: |
|      | `≤ 35 chars` → `-0.15px` |
|      | `36–45 chars` → `-0.25px` |
|      | `46–55 chars` → `-0.35px` |
|      | `> 55 chars` → `-0.45px` |
| **8.2** | Only non-empty lines are considered for the "longest line" determination. |

---

## 9. Font Size Recalculation Triggers

| # | Rule |
|---|------|
| **9.1** | Recalculated when the display updates (new section or new song). |
| **9.2** | Recalculated on **window resize** — but only if a song with a valid section is active. |
| **9.3** | Recalculated on **sidebar open/close** — but only if a song is active. |
| **9.4** | Recalculated on **fullscreen enter/exit** — but only if a song is active. |
| **9.5** | A `MutationObserver` on the sidebar's `class` attribute triggers recalculation when the sidebar visibility changes. |
| **9.6** | Recalculated on initial page `load` if a song is already active. |
| **9.7** | All recalculations are debounced via `requestAnimationFrame` to avoid layout thrashing. |

---

## 10. Fullscreen Behavior

| # | Rule |
|---|------|
| **10.1** | **Double-click** on the main area toggles fullscreen mode. |
| **10.2** | **Double-tap** (touch) on the main area toggles fullscreen: two taps within **300ms** and within **30px** Euclidean distance. |
| **10.3** | Selecting a **different** song auto-enters fullscreen if not already in it. |
| **10.4** | Entering fullscreen from song selection closes the sidebar if it's open. |
| **10.5** | The search toggle button dims to **opacity 0.35** in fullscreen (still clickable; returns to full opacity on hover). |
| **10.6** | If the sidebar is **open** in fullscreen, the toggle button is fully hidden (`opacity: 0`). |
| **10.7** | In fullscreen: slide title is at **top-center**, slide counter is at **bottom-center** (overrides landscape/portrait positioning). |
| **10.8** | Fullscreen mode bumps text-shadow on lyrics (from `0 4px 18px` to `0 6px 24px`) and increases font-weight to 700. |
| **10.9** | Fullscreen maintains search-toggle button visibility via `!important` CSS rules (z-index `2147483647`). |

---

## 11. Sidebar Behavior

| # | Rule |
|---|------|
| **11.1** | Sidebar width: `320px`, capped at `85vw` on narrow screens. |
| **11.2** | Sidebar visibility: `translateX(0)` (visible) / `translateX(-100%)` (hidden), with a cubic-bezier transition (0.3s). |
| **11.3** | **Open**: removes `.hidden` class, adds `.visible` to backdrop, adds `.btn-hidden` to toggle button, auto-focuses search input after 100ms. |
| **11.4** | **Close**: adds `.hidden` class, removes `.visible` from backdrop, removes `.btn-hidden` from toggle button. |
| **11.5** | Closing triggers: sidebar close button (✕), sidebar backdrop click, selecting a song on mobile (≤700px), entering fullscreen from song selection. |
| **11.6** | The sidebar backdrop (semi-transparent overlay) appears behind the sidebar when open (z-index 35). |
| **11.7** | When sidebar is visible on desktop (`≥851px`), the main lyric area shifts right by `320px` (`margin-left`) with a 0.2s ease-out transition. |
| **11.8** | When sidebar is hidden, the main area uses the full viewport width. |

---

## 12. Search / Filter

| # | Rule |
|---|------|
| **12.1** | Search is a **case-insensitive substring match** on song titles (`song.title.toLowerCase().includes(query.toLowerCase())`). |
| **12.2** | Input is **debounced at 200ms** before triggering a re-render. |
| **12.3** | An **empty** search term returns the full song list. |
| **12.4** | The **clear button** (✕) is only visible when the search input has content (`val.length > 0`). |
| **12.5** | Clicking clear: empties the input, hides the clear button, resets the search term to `""`, re-renders the full list, and refocuses the input. |
| **12.6** | Status bar shows result count with proper plurality: `"1 song"` vs `"N songs"`. |
| **12.7** | When zero results match: displays `"✨ no title matches \"<term>\""` (HTML-escaped). |
| **12.8** | When the song database is empty: displays `"✨ no songs available"`. |
| **12.9** | HTML escaping is applied to search terms rendered in messages: only `&`, `<`, `>` are escaped. |

---

## 13. Active Song Scrolling

| # | Rule |
|---|------|
| **13.1** | After rendering the song list, the currently active song is scrolled into view: `scrollIntoView({ block: 'nearest', behavior: 'smooth' })`. |
| **13.2** | This ensures the active song remains visible in the sidebar after navigation or section changes. |

---

## 14. Lyric Wrapper Visual State

| # | Rule |
|---|------|
| **14.1** | When a song is selected (regardless of whether at a valid section), `.lyric-wrapper` receives the `.has-song` class. |
| **14.2** | `.has-song` triggers a glassmorphism effect: radial gradient background (`rgba(10,10,15,0.35)` → `rgba(10,10,15,0.55)`), `backdrop-filter: blur(12px)`, semi-transparent white border, and box-shadow. |
| **14.3** | When no song is selected, `.has-song` is removed — the wrapper is fully transparent (no background). |
| **14.4** | On small screens (`≤850px`), the glassmorphism effect is toned down (lighter background, less blur, thinner border). |
| **14.5** | On extra-small screens (`≤600px`), the effect is further reduced. |

---

## 15. Responsive / Orientation Rules

| # | Rule |
|---|------|
| **15.1** | **Portrait orientation**: slide title at **top-center**, slide counter at **bottom-center** (both centered via `left: 50%; transform: translateX(-50%)`). |
| **15.2** | **Landscape orientation**: slide title at **bottom-left**, slide counter at **bottom-right**, positioned `12px` from the bottom edge. |
| **15.3** | **Fullscreen**: overrides both — title at top-center, counter at bottom-center (regardless of orientation). |
| **15.4** | At `≤600px` width in portrait: badge and counter padding/ font size are reduced (e.g., counter `0.8rem`, `6px 12px` padding, `12px` from edges). |
| **15.5** | At `≤600px` width in landscape: counter positioned `8px` from bottom, smaller font. |
| **15.6** | At `≤850px` width: lyric wrapper uses tighter padding (`1.2rem 1.5rem`), smaller border-radius (`32px`), max-width `94%`. |
| **15.7** | At `≤600px` width: lyric wrapper padding `0.8rem 1rem`, border-radius `24px`, max-width `96%`. |

---

## 16. Service Worker / Offline Caching

| # | Rule |
|---|------|
| **16.1** | Cache name is versioned: `la-lyric-v{VERSION}`. Bumping the `VERSION` constant triggers a fresh cache. |
| **16.2** | **On install**: pre-caches these assets — `./`, `index.html`, `songs.js`, `background.webp`, `la.png`, and 5 Raleway `.woff2` font files (Regular, Medium, SemiBold, Bold, ExtraBold). |
| **16.3** | **On activate**: deletes **all** old caches whose name doesn't match the current `CACHE_NAME`. |
| **16.4** | **Fetch strategy**: cache-first with network fallback. Serve from cache if available; otherwise fetch from network and add the successful response to cache. |
| **16.5** | If network fetch fails and the resource wasn't cached, the service worker falls back to the cached response (which may be undefined — no offline fallback page is defined). |
| **16.6** | The service worker is registered at page load (not waiting for user interaction). |

---

## 17. Touch Gesture Rules

| # | Rule |
|---|------|
| **17.1** | Touch gestures are only active on the main area element. |
| **17.2** | `touchstart`: records initial `(clientX, clientY)`. |
| **17.3** | `touchend`: computes delta `(dx, dy)`. |
| **17.4** | Swipe navigation requires: `|dx| > 50px` AND `|dx| > |dy| * 1.5` — ensures horizontal intent, not diagonal/vertical scroll. |
| **17.5** | `dx > 0` (rightward swipe) → **previous** section. |
| **17.6** | `dx < 0` (leftward swipe) → **next** section. |
| **17.7** | Double-tap fullscreen: two taps within `300ms`, within `30px` distance, anywhere on the main area. |
| **17.8** | Touch start listeners use `{ passive: true }` (no preventDefault needed). Touch end uses `{ passive: false }` (allows `preventDefault()` on swipe/double-tap). |

---

## 18. Sidebar Toggle Button

| # | Rule |
|---|------|
| **18.1** | The toggle button (🔍 icon) is fixed at the top-left corner of the viewport (`52×52px`). |
| **18.2** | When the sidebar is **open**: button is hidden (`.btn-hidden`: `opacity: 0`, `pointer-events: none`). |
| **18.3** | When the sidebar is **closed**: button is fully visible. |
| **18.4** | In **fullscreen** with sidebar closed: button is dimmed to `opacity: 0.35` but remains clickable (returns to full opacity on hover). |
| **18.5** | In **fullscreen** with sidebar open: button is hidden (`opacity: 0`, `pointer-events: none`). |
| **18.6** | Fullscreen button rules use `!important` to override any other state CSS. |

---

## 19. Section Type System

| # | Rule |
|---|------|
| **19.1** | Six recognized section types: `VERSE`, `CHORUS`, `BRIDGE`, `REFRAIN`, `PRE-CHORUS`, `END`. |
| **19.2** | `PRE-CHORUS` appears in the codebase data (e.g., "He is our shield", "The Way") but is **not** in the `badgeColorMap` — it falls back to `badge-verse`. |
| **19.3** | `END` sections typically contain the final lyrics of a song and represent the last slide. |
| **19.4** | Some songs have multiple `END` sections (e.g., "Breathe On Us", "Join With Us", "Make Us Yours") — navigation still proceeds linearly through them. |

---

## 20. Adornment & Misc.

| # | Rule |
|---|------|
| **20.1** | The app theme color is `#0a0a0f` (dark). |
| **20.2** | Background image is `background.webp`, displayed `cover` / `center center` / `fixed`. |
| **20.3** | Custom scrollbar: 6px wide, blue thumb (`#4f9eff`), dark track. |
| **20.4** | Lyric text has dual text-shadow layers for readability: `0 4px 18px rgba(0,0,0,0.7)` + `0 2px 8px rgba(0,0,0,0.5)`. |
| **20.5** | Section badge uses `letter-spacing: 4px` and `text-transform: uppercase`. |
| **20.6** | Slide counter font is monospace, `font-weight: 700`, `letter-spacing: 1.5px`. |
| **20.7** | User-scalable is disabled via `<meta name="viewport" content="user-scalable=no">`. |
| **20.8** | Raleway font files (`.woff2`) are locally served — no external font CDN dependency. |
| **20.9** | Font preloading: `Raleway-Regular.woff2` and `Raleway-SemiBold.woff2` are preloaded via `<link rel="preload">`. |
| **20.10** | The `background.webp` image is preloaded as an `<link rel="preload" as="image">`. |

---

## Rule Count Summary

| Category | Count |
|----------|------:|
| Song Data Model | 7 |
| Song Selection | 7 |
| Section / Slide Navigation | 9 |
| Slide Transitions | 5 |
| Slide Counter & Title Bar | 6 |
| Section Badge | 6 |
| Lyric Display (Font Engine) | 11 |
| Dynamic Letter Spacing | 2 |
| Font Recalculation Triggers | 7 |
| Fullscreen Behavior | 9 |
| Sidebar Behavior | 8 |
| Search / Filter | 9 |
| Active Song Scrolling | 2 |
| Lyric Wrapper Visual State | 5 |
| Responsive / Orientation | 7 |
| Service Worker / Caching | 6 |
| Touch Gestures | 8 |
| Sidebar Toggle Button | 6 |
| Section Type System | 4 |
| Adornment & Misc | 10 |
| **Total** | **144** |
