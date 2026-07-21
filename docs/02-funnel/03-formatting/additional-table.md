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
| **Score measure** | Measure picker | Required — a column with no Score is skipped entirely |
| **Base** | Measure picker | Optional |
| **Avg. segment** | Measure picker | Optional |
| **Segment base** | Measure picker | Optional |
| **Display** | Value / Gap / Value & Gap | Default *Value* — see [Columns → Display modes](./columns#display-modes) |
| **Color above avg** | Color | Default #cc0000 |
| **Color below avg** | Color | Default #007700 |
| **Font** | Font family | Default Segoe UI |
| **Font size** | Number (6–40) | Default 11 |
| **Font color** | Color | Default #333333 |
| **Bold / Italic / Underline** | Checkboxes | Bold on by default |
| **Column width (px)** | Number (30–300) | Default 76 |
| **Show header** | Checkbox | Default on |
| **Separator (border)** | Checkbox | Draws a vertical line on the column's right edge, spanning the funnel's step area |
| **Separator color** | Color | Default #cccccc |

Click **Add column** to append a new one (up to 8 total); an empty state ("No extra columns yet — click *Add column*.") is shown when none exist yet.

## Behind the scenes

The dialog persists its entries as a single **JSON array** in the **Columns (JSON)** property of the Additional Table card. As soon as that array has at least one entry, it fully replaces the legacy **Column 1…8** cards — see [Columns → The JSON editor takes over once used](./columns#turning-columns-on).
