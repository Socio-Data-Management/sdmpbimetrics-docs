---
sidebar_position: 10
title: Columns
---

# Columns

Beyond the funnel bars, the visual can draw up to **8 extra data columns** to the right of the funnel, one cell per step — for metrics that don't belong on the bar itself (NPS, satisfaction, repeat-purchase rate, a second product line…).

There are **two ways** to configure extra columns:

1. **Column 1 … Column 8** — one Format-pane card per column, described on this page (the legacy approach, still fully supported)
2. **Additional Table** — a single JSON-backed card edited through a **⚙ gear-icon dialog** on the visual — see [Additional Table](./additional-table)

:::info The JSON editor takes over once used
As soon as the Additional Table JSON has at least one entry, it becomes the **single source of truth** for columns and the legacy **Column 1…8** cards are hidden — even if **Number of columns** is still set. This lets existing reports keep working with the legacy cards until you open the gear-icon editor for the first time, at which point your current column configuration is copied into the JSON as a starting point.
:::

## Turning columns on

1. **Global Settings → Options → Show extra columns** must be **on**
2. **Global Settings → Options → Number of columns** sets how many of the **Column 1…8** cards are shown *(ignored once the JSON editor has entries)*

## Column N properties (legacy cards)

Each **Column N** card has the same properties:

| Property | Description | Default |
|----------|-------------|---------|
| **Column title** | Header text shown above the funnel at the top of the column (wraps up to 3 lines) | — |
| **Score measure** | *(mandatory for the column to render)* The value shown at each step | — |
| **Base** | Respondent/sample count (for significance testing) | — |
| **Avg. segment** | Benchmark average to test the column's Score against | — |
| **Segment base** | Benchmark's respondent/sample count | — |
| **Display** | *Value*, *Gap* or *Value & Gap* — see below | Value |
| **Color above avg** | Cell text color when the column's Score is significantly **above** its own Avg. segment | #cc0000 |
| **Color below avg** | Cell text color when the column's Score is significantly **below** its own Avg. segment | #007700 |

## Display modes

| Mode | What's shown |
|------|--------------|
| **Value** | The column's own Score, rounded |
| **Gap** | The difference between the column's Score and the **main funnel's Score** at the same step (`+`/`−`, rounded) |
| **Value & Gap** | Both — the Score on top, the gap just below, in a slightly smaller font |

:::info Gap is always vs. the Main Partition
The "gap" is computed against the **[Main Partition](./main-partition)'s** Score at the same step for the same group — not against the column's own Avg. Segment. Use [Global Settings → Gap label](./global-settings#options) to give that comparison a name in your own report documentation.
:::

## Column-level significance

Independently from the funnel's leakage significance, each column runs its **own** two-proportion z-test: the column's Score vs. its own **Avg. segment**, using the same [Significance level](./global-settings#options) and **Exclude group from segment avg.** setting as the rest of the visual. The cell text is colored with **Color above/below avg** accordingly, or the column's plain font color when the test is inconclusive or the Base/Avg. segment/Segment base aren't all set.

## Column typography, width and separators

The legacy **Column N** cards only expose title/measures/display mode/colors — font, column width, header visibility and separator lines are configured **per column** through the [Additional Table](./additional-table) JSON editor (with sensible defaults applied to legacy columns that have no JSON entry: Segoe UI, 11px, #333333, bold, 76px wide, header shown, no separator).
