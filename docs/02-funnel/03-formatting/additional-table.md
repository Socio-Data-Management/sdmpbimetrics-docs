---
sidebar_position: 11
title: Additional Table
---

# Additional Table

The **Additional Table** card stores the modern, JSON-backed configuration for [extra columns](./columns), edited through a dedicated dialog rather than typed by hand.

## Opening the editor

1. Select the visual and enter **edit mode** (or focus mode) with at least one measure bound to **Values**
2. Hover the visual — a small **⚙ gear icon** fades in at the top-right corner
3. Click it to open the **Extra Columns** dialog

:::tip First time you open it
If you were previously using the legacy **Column 1…8** cards, the dialog opens pre-filled with those columns' current configuration, so nothing is lost when you switch to the JSON editor.
:::

## Fields per column (up to 8)

| Field | Type | Notes |
|-------|------|-------|
| **Column title** | Text | Spans two grid cells in the dialog |
| **Score type** | Continuous / Discrete | Default *Continuous* — see [Columns → Continuous vs. Discrete columns](./columns#continuous-vs-discrete-columns) |
| **Score measure** | Measure picker | Required — a column with no Score is skipped entirely |
| **Base** | Measure picker | Optional — hidden when Score type is *Discrete* |
| **Comparison** | Measure picker | Optional — hidden when Score type is *Discrete* |
| **Comparison base** | Measure picker | Optional — hidden when Score type is *Discrete* |
| **Precision** | Number (0–6) | Default 0 — hidden when Score type is *Discrete* |
| **Display** | Value / Gap / Value & Gap / Comparison value / Comparison Gap / Comparison Value & Gap | Default *Value* — hidden when Score type is *Discrete* — see [Columns → Display modes](./columns#display-modes) |
| **Color above comparison** | Color | Default #cc0000 — hidden when Score type is *Discrete* |
| **Color below comparison** | Color | Default #007700 — hidden when Score type is *Discrete* |
| **Display conversion picto** | Checkbox | Default off — hidden when Score type is *Discrete* — see [Conversion picto](#conversion-picto) below |
| **Font** | Font family | Default Segoe UI |
| **Font size** | Number (6–40) | Default 11 |
| **Font color** | Color | Default #333333 |
| **Bold / Italic / Underline** | Checkboxes | Bold on by default |
| **Column width (px)** | Number (30–300) | Default 76 |
| **Show header** | Checkbox | Default on |
| **Separator (border)** | Checkbox | Draws a vertical line on the column's right edge, spanning the funnel's step area |
| **Separator color** | Color | Default #cccccc |

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

The dialog persists its entries as a single **JSON array** in the **Columns (JSON)** property of the Additional Table card. As soon as that property has been **saved once** — even as an explicitly empty array — it fully replaces the legacy **Column 1…8** cards — see [Columns → The JSON editor takes over once used](./columns#turning-columns-on).

:::tip Removing every column
Clearing all columns from the dialog and saving leaves an empty JSON array, not an unset property. The legacy cards therefore stay hidden and reopening the editor shows the empty state rather than re-seeding itself from **Column 1…8** — the funnel simply renders with no extra columns, which is what you asked for.
:::
