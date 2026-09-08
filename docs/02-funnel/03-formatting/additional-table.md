---
sidebar_position: 11
title: Additional Table
---

# Additional Table

The **Additional Table** card stores the JSON-backed configuration for [extra columns](./columns), edited through a dedicated dialog rather than typed by hand.

## Opening the editor

1. Select the visual and enter **edit mode** (or focus mode) with at least one measure bound to **Values**
2. Hover the visual — a small **⚙ gear icon** fades in at the top-right corner
3. Click it to open the **Extra Columns** dialog

## Fields per column (up to 8)

Each column's block has a few fields **always visible**, plus two **collapsible sections** (collapsed by default) for the settings you tune less often. Expanding/collapsing a section applies to every column's block at once — expand *Significance* once and it stays open while you configure the rest of your columns.

### Always visible

| Field | Type | Notes |
|-------|------|-------|
| **Column title** | Text | Spans two grid cells in the dialog |
| **Score type** | Continuous / Discrete | Default *Continuous* — see [Columns → Continuous vs. Discrete columns](./columns#continuous-vs-discrete-columns) |
| **Score measure** | Measure picker | Required — a column with no Score is skipped entirely |
| **Base** | Measure picker | Optional — hidden when Score type is *Discrete* |
| **Display** | Value / Gap / Value & Gap / Comparison value / Comparison Gap / Comparison Value & Gap | Default *Value* — hidden when Score type is *Discrete* — see [Columns → Display modes](./columns#display-modes) |
| **Precision** | Number (0–6) | Default 0 — hidden when Score type is *Discrete* |
| **Show header** | Checkbox | Default on |

### Format (collapsible)

| Field | Type | Notes |
|-------|------|-------|
| **Font** | Font family | Default Segoe UI |
| **Font size** | Number (6–40) | Default 11 |
| **Font color** | Color | Default #333333 |
| **Bold / Italic / Underline** | Checkboxes | Bold on by default |
| **Column width (px)** | Number (30–300) | Default 76 |
| **Display conversion picto** | Checkbox | Default off — hidden when Score type is *Discrete* — see [Conversion picto](#conversion-picto) below |
| **Separator (border)** | Checkbox | Draws a vertical line on the column's right edge, spanning the funnel's step area |
| **Separator color** | Color | Default #cccccc |

### Significance (collapsible)

| Field | Type | Notes |
|-------|------|-------|
| **Significance level** | 90% / 95% / 99% | Default 95% — hidden when Score type is *Discrete* — this column's **own** level, independent from [Leakage → Significance level](./leakage#pills) |
| **Independence** | Main separate from comparison / Main is part of comparison / Comparison is part of Main | Default *Main separate from comparison* — hidden when Score type is *Discrete* — see [Leakage → Independence](./leakage#independence) for what the three options mean |
| **Comparison** | Measure picker | Optional — hidden when Score type is *Discrete* |
| **Comparison base** | Measure picker | Optional — hidden when Score type is *Discrete* |
| **Color above comparison** | Color | Default #cc0000 — hidden when Score type is *Discrete* |
| **Color below comparison** | Color | Default #007700 — hidden when Score type is *Discrete* |

Click **Add column** to append a new one (up to 8 total); an empty state ("No extra columns yet — click *Add column*.") is shown when none exist yet.

:::tip Fields react live to Score type
Switching a column's **Score type** between *Continuous* and *Discrete* immediately shows/hides the fields that only make sense for one of the two — no need to save and reopen the dialog. Existing columns saved before this setting existed default to *Continuous*, so nothing changes for reports created earlier.
:::

## Conversion picto

When **Display conversion picto** is on, a small arrow glyph is drawn just in front of (to the left of) the column's value at **every** step, colored by that step's [column-level significance test](./columns#column-level-significance) against its Comparison.

| Test result | Picto color |
|-------------|-------------|
| Significantly **above** the Comparison | **Color above comparison** *(default #cc0000)* |
| Significantly **below** the Comparison | **Color below comparison** *(default #007700)* |
| Neutral, or not tested (Base / Comparison / Comparison base not all set) | Gray *(#888888)* |

- The picto's horizontal space is reserved for the whole column as soon as the option is on, so figures stay aligned from row to row.
- Doesn't apply to *Discrete* columns, which have no significance test to react to.

## Behind the scenes

The dialog persists its entries as a single **JSON array** in the **Columns (JSON)** property of the Additional Table card. Clearing all columns and saving leaves an empty array — the funnel simply renders with no extra columns.
