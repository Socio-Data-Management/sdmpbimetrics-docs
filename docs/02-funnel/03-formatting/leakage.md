---
sidebar_position: 6
title: Leakage
---

# Leakage

The **Leakage** card is a composite card grouping two concerns: the **Pills** drawn at each junction between two consecutive bars (showing the **step-to-step drop-off (%)** for the main funnel), and an optional **Legend** explaining what the pill colors mean.

## Pills

| Property | Description | Default |
|----------|-------------|---------|
| **Show leakage pills** | Master switch | On |
| **Pill height (px)** | Height of the pill | 20 |
| **Font size** | Text size inside the pill | 11 |
| **Significance level** | Confidence level for the two-proportion z-test: 90%, 95% or 99% | 95% |
| **Independence** | How Main and Comparison overlap — see [Independence](#independence) below | Main separate from comparison |
| **Neutral color** | Pill border/text color when the drop-off isn't significantly different from the comparison | #888888 |
| **Above average color (bad)** | Pill border/text color when the group's leakage is significantly **worse** than the comparison's | #cc0000 |
| **Below average color (good)** | Pill border/text color when the group's leakage is significantly **better** than the comparison's | #007700 |

### How leakage is computed

For each step after the first: `leakage % = (1 − score / previousScore) × 100`.

### How the color is decided

If [Main Partition](./main-partition)'s **Base**, **Comparison** and **Comparison base** are all set for both the current and previous step, the visual runs a **two-proportion z-test** comparing the group's conditional drop-off against the comparison's own drop-off between the same two steps, using this card's **Significance level** and **Independence**. Otherwise the pill uses the **Neutral color**.

:::info Above = bad, Below = good
"Above average" means the group is **leaking more** than the comparison at that junction (bad) — colored with **Above average color**. "Below average" means the group is leaking less (good) — colored with **Below average color**. Don't confuse this with the [Columns](./columns) card, whose Above/Below refer to the raw Score, not leakage.
:::

:::info Significance level in practice
| Level | z-threshold |
|-------|-------------|
| 90% | 1.645 |
| 95% *(default)* | 1.96 |
| 99% | 2.576 |

A higher confidence level (99%) requires a larger gap between the group and the segment before a leakage pill or column cell is colored — fewer false positives, but also fewer cells flagged.
:::

## Independence

Two samples sharing observations breaks the independence assumption a two-proportion z-test relies on. **Independence** tells the test how Main and Comparison actually relate so it can correct for that before running:

| Option | When to use it | What happens |
|--------|-----------------|--------------|
| **Main separate from comparison** *(default)* | Main and Comparison are genuinely distinct samples | No adjustment |
| **Main is part of comparison** | Comparison is computed over a wider sample that *includes* Main (e.g. Comparison = "all brands", Main = one brand within it) | Main's weighted contribution is subtracted out of Comparison before testing |
| **Comparison is part of Main** | The reverse nesting — Main is the wider sample and Comparison is a subset of it (e.g. Score = a market-wide average, Comparison = a single competitor within that market) | Comparison's weighted contribution is subtracted out of Main before testing |

:::tip Picking the wrong direction silently kills significance
If Comparison's base is actually *larger* than Main's, "Main is part of comparison" is the correct choice — but if you pick it when the nesting actually runs the other way (Main's base is the larger one), the subtraction produces a negative or out-of-range adjusted sample and the test falls back to **neutral** for every step, no matter how large the real gap is. If pills stay stubbornly gray with an option other than "Main separate from comparison" selected, double-check which of Main/Comparison is really the larger, containing sample.
:::

Each extra [column](./additional-table#fields-per-column-up-to-8) has its **own** Significance level and Independence, independent from this card's — useful when a column's Score/Comparison roles are wired the opposite way round from the main funnel (see the example above).

:::tip Ascending funnel
When [Global Settings → Ascending funnel](./global-settings#ascending-funnel) is on, this card is renamed **Growth** in the Format pane and its **Show leakage pills** switch becomes **Show growth pills** (likewise, [Competition Leakage](./competition-leakage) becomes **Competition Growth**) — same cards, same properties, worded for a gain rather than a drop-off. The pill **formula and colors are unchanged**: the figure is still `(1 − score / previousScore) × 100` against the step above, and Above/Below still mean *underperforming / outperforming the comparison*. The **Neutral / Above / Below label** legend texts are free-form and aren't rewritten automatically — edit them yourself if you want growth wording (e.g. "Significantly higher leakage" → "Significantly lower growth").
:::

## Legend

An optional legend can be drawn below the funnel, explaining what each significance color means in plain text (pills and extra columns) — useful when the visual is shared without this documentation at hand.

| Property | Description | Default |
|----------|-------------|---------|
| **Show legend** | Master switch for the legend group | Off |
| **Alignment** | Left / Center / Right | Center |
| **Margin top (px)** | Space between the funnel and the legend | 4 |
| **Font / Size / Bold / Italic / Underline** | Legend text typography — applies to every entry, leakage or column | Segoe UI, 10px, not bold |
| **Shrink to fit** | When the entries need more room than the legend may take (35% of the visual's height), reduces the text size, down to 7 px, until they fit | On |
| **Neutral label** | Text next to the neutral color swatch | "Not significantly different" |
| **Above label** | Text next to the above/bad color swatch | "Significantly higher leakage" |
| **Below label** | Text next to the below/good color swatch | "Significantly lower leakage" |
| **Suffix** | Optional extra text appended after the labels (e.g. "vs segment") | — |

The legend holds two kinds of entries, and is drawn as soon as one exists:

- **Leakage entries** (Neutral / Above / Below, from this card) — when **Show legend** is on, **Show leakage pills** is on and at least one step has a computed leakage value; an entry is skipped if its label is left empty;
- **Column entries** — for every [extra column](./additional-table#significance-display) with **Add to legend** checked and a significance test that produced results. They are drawn with the column's own decoration (font color, icon, frame, background or free text) and don't depend on **Show legend** nor on the pills: the legend stays available when the leakage pills are off.

Alignment, margin, typography and suffix of this group apply to all entries. Entries wrap onto several lines when they don't fit on one: the visual measures the legend and reserves that height below the funnel so nothing is cut and it never overlaps the bars. If there are too many entries for the room available, **Shrink to fit** reduces the text size; with it off, the funnel simply gets what is left.

:::note
These settings are in the Leakage card's *Legend* group even when only extra-column entries are shown; the group's own *Show legend* switch only governs the leakage entries.
:::
