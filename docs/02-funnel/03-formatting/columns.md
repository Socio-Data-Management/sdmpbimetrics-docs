---
sidebar_position: 10
title: Columns
---

# Columns

Beyond the funnel bars, the visual can draw up to **8 extra data columns** to the right of the funnel, one cell per step — for metrics that don't belong on the bar itself (NPS, satisfaction, repeat-purchase rate, a second product line…).

Columns are configured through the **Additional Table** card, edited via a **⚙ gear-icon dialog** on the visual rather than typed into the Format pane directly — see [Additional Table](./additional-table) for the editor itself and the full field list. This page covers the concepts shared by every column, regardless of its settings.

## Turning columns on

**Global Settings → Options → Show extra columns** must be **on** for any configured column to render.

## Continuous vs. Discrete columns

**Score type** controls what kind of value the column holds:

- **Continuous** *(default)* — a numeric measure. Base, Comparison, Comparison base, Precision, Display and the above/below colors are all active, and the column participates in significance testing exactly like the main funnel.
- **Discrete** — an arbitrary text or ordinal value (e.g. `1st`, `2nd`, a free-text label). The Score measure's raw value is shown as-is, with no rounding, no comparison and no significance coloring — only the column's plain **Font color** applies. Switching to *Discrete* hides Base / Comparison / Comparison base / Precision / Display / Color above/below in the [Additional Table](./additional-table) gear-icon dialog, since they have no meaning for a discrete value.

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
Plain **Gap** is always computed against the **[Main Partition](./main-partition)'s** Score at the same step for the same group. **Comparison Gap** is computed against the column's **own Comparison** measure instead (`comparison − score`) — useful when the column's benchmark isn't the main funnel at all (a different category, year, product…).
:::

## Column-level significance

Independently from the funnel's leakage significance, each **continuous** column runs its **own** two-proportion z-test: the column's Score vs. its own **Comparison**, using that column's **own Significance level and Independence** — set per column in the [Additional Table](./additional-table#fields-per-column-up-to-8) dialog's *Significance* section, not shared with the [Leakage](./leakage#pills) card. This matters because a column's Score/Comparison roles don't have to mirror the main funnel's: e.g. a column can use a market-wide average as "Score" and a single brand as "Comparison" — the reverse of how Main Partition is normally wired — and its own **Independence** setting can be set accordingly (see [Leakage → Independence](./leakage#independence) for what the three options mean). The cell text is colored with **Color above/below comparison** accordingly, or the column's plain font color when the test is inconclusive or the Base/Comparison/Comparison base aren't all set. This coloring applies to whichever display mode is active, including the Comparison-based ones.

## Column typography, width and separators

Font, column width, header visibility and separator lines are configured **per column** in the [Additional Table](./additional-table) gear-icon dialog, alongside the measures and display mode.

:::info The last column can widen itself
Every column but the last one has a neighbour to its right, so a value slightly too wide for its cell simply encroaches on that neighbour's padding. The **last** column has nothing to its right except the edge of the visual, so the layout automatically widens it — never below your configured **Column width (px)** — to fit its own widest rendered value or gap, plus room for the [conversion picto](./additional-table#conversion-picto) when that option is on. A figure crossing into an extra digit therefore stays inside the visual instead of being clipped.
:::
