**Findings**
- No actionable P0/P1/P2 findings remain for the Home and Business first-viewport comparisons.

**Source Visual Truth**
- Home mockup: `C:/Users/repla/.codex/generated_images/019f20ca-7399-78e1-bd91-1ce689851340/ig_09cad685df5738d1016a4cac997f1481939798ce8712e4ccb1.png`
- Business mockup: `C:/Users/repla/.codex/generated_images/019f20ca-7399-78e1-bd91-1ce689851340/ig_09cad685df5738d1016a4cab0db31c8193bfe7a24143af6755.png`

**Implementation Evidence**
- Home desktop screenshot: `C:/company/program/KMTechn.github.io/output/playwright/final-home-desktop.png`
- Home comparison: `C:/company/program/KMTechn.github.io/output/playwright/final-home-compare.png`
- Business desktop screenshot: `C:/company/program/KMTechn.github.io/output/playwright/final-business-desktop.png`
- Business comparison: `C:/company/program/KMTechn.github.io/output/playwright/final-business-compare.png`
- Home mobile globe check: `C:/company/program/KMTechn.github.io/output/playwright/final-home-mobile-globe-v2.png`
- Responsive metrics: `C:/company/program/KMTechn.github.io/output/playwright/final-responsive-metrics.json`

**Viewport And State**
- Desktop: 1680x930, Korean locale, light theme, first viewport.
- Responsive checks: 1366x768 and 390x844, Korean locale, light theme.
- Home mobile globe state: `main` scrolled to the globe panel.

**Full-View Comparison Evidence**
- Home now follows the mockup's left hero copy, CTA row, proof metrics, right network panel, lower flow bar, and first service-card row. The prior in-panel status card is intentionally omitted per user direction and replaced with actual facility metrics.
- Business now follows the mockup's left 3PL copy, feature strip, CTA row, right operations/map panel, service cards, and lower visual density. The mockup's operating-status block is intentionally replaced with actual facility capacity data per user direction.

**Focused Region Comparison Evidence**
- Header: CTA label now matches the mockup intent as `문의하기`, while the actual KMTECH logo is retained.
- Home globe panel: the globe is a transparent responsive layer over a separate logistics-network backdrop, so it no longer renders as a square image or overlaps mobile text.
- Business map panel: the right-side graphic uses the Korea operation map and route legend again, keeping globe work scoped to Home.
- Mobile: 390px checks show no horizontal overflow; the Home globe panel remains readable after scroll.

**Required Fidelity Surfaces**
- Fonts and typography: Noto Sans KR/Inter hierarchy retained; hero headings and service cards were resized to match mockup density without viewport-width font scaling.
- Spacing and layout rhythm: first-viewport Home and Business grids now match the mockup structure; mobile uses single-column stacking without overlap.
- Colors and visual tokens: off-white panel backgrounds, black text, restrained borders, and KMTECH yellow CTA/icon treatment align with the mockup direction.
- Image quality and asset fidelity: Home uses a generated logistics-network backdrop plus transparent globe layer; Business uses the generated Korea operation map; actual logos and data remain in UI text.
- Copy and content: actual KMTech data is used; operating-status/current-status copy is not introduced.

**Patches Made Since Previous QA Pass**
- Rebuilt Home hero to match the mockup composition and service-card reveal.
- Restored Business right panel to operations flow plus Korea map instead of using the globe there.
- Added transparent responsive globe asset and a separate Home network backdrop.
- Adjusted mobile globe sizing to prevent text overlap.
- Updated i18n keys for Home/Business visual labels and actual-data copy.
- Rebuilt `docs/` output for GitHub Pages.

**Verification**
- `npm run lint`: passed.
- `npm run test:run`: passed, 3 tests.
- `npm run build`: passed.
- Responsive metrics: no horizontal overflow at 1680, 1366, or 390 widths.

**Follow-up Polish**
- P3: The mockups use a yellow KMTECH concept mark while the live site keeps the actual blue/black logo, so exact brand-color matching is intentionally not applied.

final result: passed
