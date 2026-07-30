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
| **Neutral color** | Pill border/text color when the drop-off isn't significantly different from the comparison | #888888 |
| **Above average color (bad)** | Pill border/text color when the group's leakage is significantly **worse** than the comparison's | #cc0000 |
| **Below average color (good)** | Pill border/text color when the group's leakage is significantly **better** than the comparison's | #007700 |

### How leakage is computed

For each step after the first: `leakage % = (1 − score / previousScore) × 100`.

### How the color is decided

If [Main Partition](./main-partition)'s **Base**, **Comparison** and **Comparison base** are all set for both the current and previous step, the visual runs a **two-proportion z-test** comparing the group's conditional drop-off against the comparison's own drop-off between the same two steps (see [Global Settings → Significance level](./global-settings#options)). Otherwise the pill uses the **Neutral color**.

:::info Above = bad, Below = good
"Above average" means the group is **leaking more** than the comparison at that junction (bad) — colored with **Above average color**. "Below average" means the group is leaking less (good) — colored with **Below average color**. Don't confuse this with the [Columns](./columns) card, whose Above/Below refer to the raw Score, not leakage.
:::

## Legend

An optional legend can be drawn below the funnel, explaining what each pill color means in plain text — useful when the visual is shared without this documentation at hand.

| Property | Description | Default |
|----------|-------------|---------|
| **Show legend** | Master switch for the legend group | Off |
| **Alignment** | Left / Center / Right | Center |
| **Margin top (px)** | Space between the funnel and the legend | 4 |
| **Font / Size / Bold / Italic / Underline** | Legend text typography | Segoe UI, 10px, not bold |
| **Neutral label** | Text next to the neutral color swatch | "Not significantly different" |
| **Above label** | Text next to the above/bad color swatch | "Significantly higher leakage" |
| **Below label** | Text next to the below/good color swatch | "Significantly lower leakage" |
| **Suffix** | Optional extra text appended after the labels (e.g. "vs segment") | — |

The legend is only drawn when **Show leakage pills** is also on and at least one step in the data actually has a computed leakage value; an entry is skipped if its label is left empty. The visual reserves vertical space for the legend below the funnel so it never overlaps the bars.
