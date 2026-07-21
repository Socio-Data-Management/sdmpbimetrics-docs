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
| **Exclude group from segment avg.** | Enable when the Avg. Segment measure includes the group's own respondents — the group's contribution is mathematically removed from the segment average and base before testing | Off |
| **Gap label** | Free-text label associated with the gap figures shown by columns in *Gap* / *Value & Gap* mode | "Gap vs" |

See [Data Roles → Score, Base, Avg. Segment, Segment Base](../getting-started/data-roles#score-base-avg-segment-segment-base--what-they-mean) for what feeds the significance test, and [Leakage](./leakage) / [Columns](./columns) for where the result is shown.

:::info Significance level in practice
| Level | z-threshold |
|-------|-------------|
| 90% | 1.645 |
| 95% *(default)* | 1.96 |
| 99% | 2.576 |

A higher confidence level (99%) requires a larger gap between the group and the segment before a leakage pill or column cell is colored — fewer false positives, but also fewer cells flagged.
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
