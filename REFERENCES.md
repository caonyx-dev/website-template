# Reference index

What each template was built after, so a later revision can go back to the same source rather than guess at it.

Each entry records the reference the template's homepage composition, section rhythm, geometry and motion were taken from. Every template keeps its **own** palette, typefaces and copy — see that template's `DESIGN.md` for the dated revision that records exactly what the reference changed, and `COMPONENTS.md` for the components it produced.

Last updated 2026-10-08.

## Index

| Template | Built | Reference | URL | Captured |
|---|---|---|---|---|
| `architect` | ✅ | Antra (architecture theme) | `demo2.themelexus.com/antra` | 2026-10-07 |
| `construction` | ✅ | — none | — | 2026-10-07 |
| `corporate` | ✅ | Lumio | `lumio-astro.pages.dev` | 2026-10-07 |
| `creative-agency` | ✅ | Folex | `folex-astro.pages.dev` | 2026-10-07 |
| `creative-studio` | ✅ | Studiova | `studiova.vercel.app` | 2026-10-07 |
| `dental-clinic` | ✅ | SmilePure — "Dentist Professors" | `smilepure.thememove.com/dentist-professors` | 2026-10-07 |
| `finance-accounting` | ✅ | Consultor — "Financial Advisor" | `consultor.ancorathemes.com/financial-advisor` | 2026-10-07 |
| `gym` | ✅ | FitFive — Gym & Fitness HTML | `preview.themeforest.net/item/fitfive-gym-fitness-html-template/full_screen_preview/64547433` | 2026-10-07 |
| `hotel` | ✅ | Almaris **+** Carmelina | `designesia.com/themes/almaris` · `demo.7iquid.com/carmelina` | 2026-10-08 |
| `law-firm` | ✅ | Lawsight — one-page | `demo.casethemes.net/lawsight/home-2-one-page` | 2026-10-08 |
| `logistics` | ✅ | Logico Rounded — **home-3** | `demo.artureanec.com/themes/logico-rounded/home-3` | 2026-10-08 |
| `marketing-agency` | ✅ | Nimo — **home-04 one page** | `themexriver.com/wp/nimo/home-04-onepage` | 2026-10-08 |
| `real-estate` | ✅ | Spaciaz — Real Estate & Construction Group | `demo2.wpopal.com/spaciaz` | 2026-10-08 |
| `restaurant` | ✅ | Soul Kitchen — **dark** | `soulkitchen.redsun.design/dark` | 2026-10-08 |
| `retail-store` | ✅ | Vogal (Shopify) | `vogal-demo.myshopify.com` | 2026-10-08 |
| `small-business` | ✅ | Cleaning Service | `v4sites.animation-addons.com/cleaning-service` | 2026-10-08 |
| `tech-startup` | ✅ | Arolax — **AI Startup** | `arolax.crowdytheme-demo.com/ai-startup` | 2026-10-08 |
| `travel-agency` | ✅ | Arolax — **travel agency** | `arolax.crowdytheme-demo.com/travel-agency/home` | 2026-10-08 |

## Notes on individual entries

**`architect`** — The Antra theme is also the repo's house reference for section rhythm and component style generally (see `CLAUDE.md`), not only for this template.

**`construction`** — The only built template with no external reference. Its homepage was designed from its own `DESIGN.md` and `PRODUCT.md`.

**`hotel`** — Two sources. The page follows Almaris throughout; the welcome section is taken from Carmelina.

**`law-firm`** — The one-page variant specifically (`home-2-one-page`), not the Lawsight landing page.

**`logistics`** · **`marketing-agency`** — A specific homepage variant, not the theme's default demo. Going back to the wrong variant will produce a different page.

**`real-estate`** — The theme is listed on ThemeForest at
`preview.themeforest.net/item/spaciaz-real-estate-construction-group-wordpress-theme/full_screen_preview/57727154`,
but that URL is behind a Cloudflare bot challenge and cannot be captured headlessly. The live demo at `demo2.wpopal.com/spaciaz` is the same page and is what was actually measured. Use the demo URL for any future capture.

**`restaurant`** — Built after the dark variant. The light variant at `soulkitchen.redsun.design` was not used, and the template's own palette is light, so the two differ by more than a colour swap.

**`gym`** — Listed on ThemeForest under the theme name **FitFive** (referred to as "Fit Five" in the original brief).

## Three entries that did not match the brief

The owner's list of 2026-10-08 assigned `arolax.crowdytheme-demo.com/ai-startup` to three templates. Only one of them was actually built from it. The table above records what each template's `DESIGN.md` says was used:

| Template | Listed in the brief | Actually built after |
|---|---|---|
| `tech-startup` | Arolax AI Startup | ✅ same — Arolax AI Startup |
| `travel-agency` | Arolax AI Startup | ⚠️ Arolax **travel-agency** demo (`/travel-agency/home`) |
| `small-business` | Arolax AI Startup | ⚠️ **Cleaning Service** (`v4sites.animation-addons.com/cleaning-service`) |

The two flagged templates are visually unrelated to the AI-startup demo, so this looks like the same URL being pasted three times rather than a build that went off-brief. **Nothing has been changed on that assumption** — if either should in fact be rebuilt against the AI-startup page, say so and this file plus the template's `DESIGN.md` revision will be updated together.

## How a reference is used here

Per `CLAUDE.md`, a reference is captured at 1440px and 390px along with its HTML and computed styles, its section structure, type scale, radii, shadows and motion are analysed, and the page is then rebuilt **in that visual language using the template's own tokens, fonts and content**. The result is recorded as a dated revision section inside that template's `DESIGN.md` rather than overwriting it.

What that means in practice:

- Composition, section order, geometry, scale and motion follow the reference.
- Palette, typefaces, copy and imagery are the template's own.
- No markup, CSS, JavaScript or image asset is taken from a reference. Where a reference uses a commercial typeface, the template substitutes a Google-hosted equivalent (for example `real-estate`: Involve + Switzer → Outfit + Hanken Grotesk) or, where the same faces are freely available, uses them directly (`tech-startup`: Instrument Sans + Kanit).
- Photography is open-licence stock or generated; see each template's `assets/CREDITS.json` where one exists.

These are design references, not licensed assets. If a template is ever sold or delivered to a client, that is unaffected by the reference — but the reference URL should not be presented to a client as a portfolio item.
