---
sidebar_position: 1
title: Global Settings
---

# Global Settings

The **Global Settings** card is a composite card grouping three unrelated concerns that apply to the whole visual: **Options**, **Value Font** and **Step Label Font**.

## Options

| Property | Description | Default |
|----------|-------------|---------|
| **Show extra columns** | Master switch for the [extra columns](./columns) feature | Off |
| **Number of columns** | How many of the legacy **Column 1…8** cards are active (ignored once the JSON editor has entries — see [Additional Table](./additional-table)) | 0 |
| **Significance level** | Confidence level for the two-proportion z-test: 90%, 95% or 99% | 95% |
| **Exclude group from comparison** | Enable when the Comparison measure includes the group's own respondents — the group's contribution is mathematically removed from the comparison average and base before testing | Off |
| **Sort on funnel value** | When on, steps are sorted from the highest Score to the lowest, giving the classic tapering funnel shape. When off, steps keep the order they appear in the data | On |
| **Ascending funnel** | When on *(and **Sort on funnel value** is also on)*, steps are sorted from the **lowest** Score to the highest and the whole visual is framed as **growth** instead of loss — see [Ascending funnel](#ascending-funnel) below. No effect when **Sort on funnel value** is off | Off |
| **Gap label** | Free-text label associated with the gap figures shown by columns in *Gap* / *Value & Gap* mode | "Gap vs" |

See [Data Roles → Score, Base, Comparison, Comparison base](../getting-started/data-roles#score-base-comparison-comparison-base--what-they-mean) for what feeds the significance test, and [Leakage](./leakage) / [Columns](./columns) for where the result is shown.

:::tip When a later step can score higher than an earlier one
Some funnels aren't strictly decreasing — e.g. a **Good Opinion** step can score higher than **Familiarity** when the option was also asked to respondents who don't know the product. Turn **Sort on funnel value** off to keep the steps in their natural data order instead of re-sorting them by Score. Pairing this with [Bars → Rectangle bars](./bars#properties) avoids a shape that reads as an inconsistent funnel.
:::

:::info Significance level in practice
| Level | z-threshold |
|-------|-------------|
| 90% | 1.645 |
| 95% *(default)* | 1.96 |
| 99% | 2.576 |

A higher confidence level (99%) requires a larger gap between the group and the segment before a leakage pill or column cell is colored — fewer false positives, but also fewer cells flagged.
:::

## Ascending funnel

By default the funnel is framed as **loss**: the widest step is first, each subsequent step is smaller, and the gap between two steps is a "leakage". **Ascending funnel** flips that framing to **growth**, for reports where the story is where you *win* audience rather than where you lose it.

Turning it on (with **Sort on funnel value** also on) changes three things together:

| Area | Descending *(default)* | Ascending |
|------|------------------------|-----------|
| **Sort direction** | Highest Score first | Lowest Score first — steps with no Score still sort to the end, i.e. the weakest position |
| **Bar taper**, with [Bars → Constant size](./bars#properties) on | Full width at the top, tapering to a point at the last step | Mirrored: narrow at the top, widening down to full width at the last step |
| **Card names** in the Format pane | **Leakage** · **Show leakage pills** · **Competition Leakage** | **Growth** · **Show growth pills** · **Competition Growth** — the same cards and the same properties, worded for a gain rather than a drop-off |

With **Constant size** off, bar widths stay proportional to Score — and since they are normalized against the group's **highest** Score rather than the first step's, the ascending funnel widens correctly instead of overflowing its area.

:::info What is *not* flipped
- The **significance logic and colors** are unchanged: *above* always means the group's step-to-step change is significantly larger than the comparison's, so your existing [Leakage](./leakage) color choices keep their meaning.
- The **legend labels** (**Neutral / Above / Below label**) are free text and aren't rewritten for you — edit them yourself if you want growth wording rather than "…leakage" (see [Leakage → Legend](./leakage#legend)).
- The **Gap label** and column headers are likewise your own text.
:::

:::caution Requires "Sort on funnel value"
**Ascending funnel** only reverses the *sort*, so it does nothing when **Sort on funnel value** is off — in that mode the steps always keep their raw data order and no sorting is applied at all.
:::

## Value Font

Typography for the **score value** drawn near the top of each bar.

| Property | Description | Default |
|----------|-------------|---------|
| **Font** | Font family | Segoe UI |
| **Size** | Font size in pixels | 16 |
| **Bold / Italic / Underline** | Standard text style toggles | Bold on, others off |
| **Font color** | Text color | #FFFFFF |
| **Text halo** | Adds a semi-transparent contrasting stroke behind the text so it stays legible on any bar color | On |

## Step Label Font

Typography for the **step name** drawn just below the value, always rendered in upper case.

| Property | Description | Default |
|----------|-------------|---------|
| **Font** | Font family | Segoe UI |
| **Size** | Font size in pixels | 10 |
| **Bold / Italic / Underline** | Standard text style toggles | Off |
| **Font color** | Text color | #FFFFFF |
| **Text halo** | Same contrast-stroke behavior as the value font | On |

:::tip Text halo
Both text halos automatically pick a dark or light stroke based on the *luminance* of the font color, so the same setting works whether your bars are light or dark.
:::
