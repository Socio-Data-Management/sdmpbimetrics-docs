---
sidebar_position: 3
title: Data Roles
slug: /metrictile/getting-started/data-roles
---

# Data Roles

The MetricTile visual accepts five data roles — one **Grouping** and four **Measures**. Only **Value** is mandatory; the others enrich the tile when present.

| Data Role | Type | Description |
|-----------|------|-------------|
| **Category** | Grouping | Optional grouping column (e.g. `Planet.Label`). Provides row context for measures and serves as a default label when no Label measure is bound. |
| **Value** | Measure | The numeric value displayed in the center of the tile |
| **Label** | Measure | The descriptive label (overrides the Category value and the static text in the Category Label card) |
| **Series Color** | Measure | A hex color code (e.g. `#FF0000`) — overrides the shape **From** color and disables gradient |
| **Logo** | Measure | A base64-encoded image rendered inside the tile |

:::info Single-row visual
The MetricTile is designed to display a **single value**. The dataView is read with `value.max = 1`, `label.max = 1`, etc. Aggregate your data so each visual instance returns one row per role.
:::

## Category

The **Category** data role is the only **Grouping** role on the visual. It provides row context for the measures (so they evaluate in the current filter + category) and acts as a **default label** when no Label measure is bound.

Bind a column — typically a dimension key like `Planet.Label` or `Product.Name` — and the visual will read its first value as the tile label.

## Value

Drag any measure into **Value**. The visual respects the **format string** of the underlying measure (currency symbol, percentage, decimals…) but you can override formatting from the **Value** formatting card (display units, decimal places).

## Label

The **Label** data role lets you build a dynamic descriptive label from DAX. For example:

```dax
TileLabel = "Sales — " & SELECTEDVALUE('Calendar'[Year])
```

The label text is resolved with the following priority (first non-empty wins):

1. **Label** measure (dynamic, highest priority)
2. **Category** value (from the Grouping role)
3. **Text** field in the **Category Label** formatting card (static)
4. Name of the bound **Value** measure (last-resort fallback)

## Series Color

Use a measure that returns a **hex color string** to drive the tile color from your data model. Common patterns:

```dax
StatusColor =
VAR pct = DIVIDE([Actual], [Target])
RETURN
SWITCH(
    TRUE(),
    pct >= 1,    "#2E8B57",   // green
    pct >= 0.8,  "#DAA520",   // amber
                 "#B22222"    // red
)
```

When **Series Color** is bound, the gradient direction is forced to *None* and both **From** and **To** colors are overridden by the data value.

:::warning Hex format only
Colors must be valid hex codes (`#RGB` or `#RRGGBB`). Color names like `red` and `rgb(...)` notations are not supported.
:::

## Logo

The **Logo** data role accepts **base64-encoded images**. If the value does not start with `data:`, the visual automatically prepends `data:image/png;base64,`.

The logo appears as an `<image>` element layered behind the value/label text. Its size and position are controlled by the **Logo** formatting card, and it can be **dragged** in edit mode just like the text blocks.

:::tip Image size
Keep your base64 logos small (under 5 KB, typically 32×32 to 64×64 px). Large images bloat the data model and slow down Power BI.
:::

## Color & logo resolution priority

1. **Conditional formatting (fx)** — rules set in the formatting cards
2. **Series Color / Logo data roles** — values from your data model
3. **Static values** — colors and settings entered in the formatting pane
