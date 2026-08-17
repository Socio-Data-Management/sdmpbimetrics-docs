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
As soon as the Additional Table JSON has been **saved once from the dialog** — even with zero columns — it becomes the **single source of truth** for columns and the legacy **Column 1…8** cards are hidden, even if **Number of columns** is still set. This lets existing reports keep working with the legacy cards until you open the gear-icon editor and save for the first time, at which point your current column configuration is copied into the JSON as a starting point.
:::

## Turning columns on

1. **Global Settings → Options → Show extra columns** must be **on**
2. **Global Settings → Options → Number of columns** sets how many of the **Column 1…8** cards are shown *(ignored once the JSON editor has been saved)*

## Column N properties (legacy cards)

Each **Column N** card has the same properties:

| Property | Description | Default |
|----------|-------------|---------|
| **Column title** | Header text shown above the funnel at the top of the column (wraps up to 3 lines) | — |
| **Score type** | *Continuous* or *Discrete* — see [Continuous vs. Discrete columns](#continuous-vs-discrete-columns) below | Continuous |
| **Score measure** | *(mandatory for the column to render)* The value shown at each step | — |
| **Base** | Respondent/sample count (for significance testing) — *continuous only* | — |
| **Comparison** | Reference value to test the column's Score against — *continuous only* | — |
| **Comparison base** | The comparison's respondent/sample count — *continuous only* | — |
| **Precision** | Decimal places used to render Value/Gap/Comparison figures — *continuous only* | 0 |
| **Display** | *Value*, *Gap*, *Value & Gap*, *Comparison value*, *Comparison Gap* or *Comparison Value & Gap* — see below — *continuous only* | Value |
| **Color above comparison** | Cell text color when the column's Score is significantly **above** its own Comparison — *continuous only* | #cc0000 |
| **Color below comparison** | Cell text color when the column's Score is significantly **below** its own Comparison — *continuous only* | #007700 |

## Continuous vs. Discrete columns

**Score type** controls what kind of value the column holds:

- **Continuous** *(default)* — a numeric measure. Base, Comparison, Comparison base, Precision, Display and the above/below colors are all active, and the column participates in significance testing exactly like the main funnel.
- **Discrete** — an arbitrary text or ordinal value (e.g. `1st`, `2nd`, a free-text label). The Score measure's raw value is shown as-is, with no rounding, no comparison and no significance coloring — only the column's plain **Font color** applies. Switching to *Discrete* hides Base / Comparison / Comparison base / Precision / Display / Color above/below in both the legacy card and the [Additional Table](./additional-table) gear-icon dialog, since they have no meaning for a discrete value.

## Display modes

*(Continuous columns only — Discrete columns always just show the raw Score value.)*

| Mode | What's shown |
|------|--------------|
| **Value** | The column's own Score, rounded to **Precision** decimals |
| **Gap** | The difference between the column's Score and the **main funnel's Score** at the same step (`+`/`−`, rounded to **Precision**) |
| **Value & Gap** | Both — the Score on top, the gap just below, in a slightly smaller font |
| **Comparison value** | The column's own **Comparison** measure, rounded to **Precision** |
| **Comparison Gap** | The difference between the column's **Comparison** and its own Score (`comparison − score`, `+`/`−`, rounded to **Precision**) |
| **Comparison Value & Gap** | Both — the Comparison value on top, the Comparison Gap just below |

:::info Two different "gaps"
Plain **Gap** is always computed against the **[Main Partition](./main-partition)'s** Score at the same step for the same group. **Comparison Gap** is computed against the column's **own Comparison** measure instead (`comparison − score`) — useful when the column's benchmark isn't the main funnel at all (a different category, year, product…). Use [Global Settings → Gap label](./global-settings#options) to give the plain Gap a name in your own report documentation.
:::

## Column-level significance

Independently from the funnel's leakage significance, each **continuous** column runs its **own** two-proportion z-test: the column's Score vs. its own **Comparison**, using the same [Significance level](./global-settings#options) and **Exclude group from comparison** setting as the rest of the visual. The cell text is colored with **Color above/below comparison** accordingly, or the column's plain font color when the test is inconclusive or the Base/Comparison/Comparison base aren't all set. This coloring applies to whichever display mode is active, including the Comparison-based ones.

## Column typography, width and separators

The legacy **Column N** cards only expose title/measures/display mode/colors — font, column width, header visibility and separator lines are configured **per column** through the [Additional Table](./additional-table) JSON editor (with sensible defaults applied to legacy columns that have no JSON entry: Segoe UI, 11px, #333333, bold, 76px wide, header shown, no separator).

:::info The last column can widen itself
Every column but the last one has a neighbour to its right, so a value slightly too wide for its cell simply encroaches on that neighbour's padding. The **last** column has nothing to its right except the edge of the visual, so the layout automatically widens it — never below your configured **Column width (px)** — to fit its own widest rendered value or gap, plus room for the [conversion picto](./additional-table#conversion-picto) when that option is on. A figure crossing into an extra digit therefore stays inside the visual instead of being clipped.
:::
