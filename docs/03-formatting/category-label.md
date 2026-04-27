---
sidebar_position: 9
title: Category Label
---

# Category Label

The **Category Label** card controls the descriptive label displayed alongside the value.

![Category Label formatting card](../images/03-category-label-card.png)


## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Show** *(toggle)* | Master switch — shows or hides the label | On |
| **Text** | Static label text. Used when no measure is bound to the **Label** data role. | *(empty)* |
| **Font Color** | Label text color. Supports conditional formatting (fx). | #FFFFFF |
| **Font Family** | Font family used for the label | Segoe UI |
| **Font Size** | Font size in pixels (4–200). Supports conditional formatting (fx). | 12 |
| **Bold / Italic / Underline** | Standard text style toggles | Off |

The **Font Size** also supports the **fx** button — see [Conditional font size — DAX recipes](./conditional-font-size) for examples.

## Static text vs data-bound label

The label can come from **four sources**, with the following priority (first non-empty wins):

1. **Label data role** — a measure dragged into the *Label* well (highest priority, dynamic)
2. **Category data role** — the value of the Grouping column, if bound
3. **Text** — the static value typed in this card
4. Name of the bound **Value** measure (last-resort fallback)

Use the **Text** field for fixed dashboard labels (`Total Sales`, `Open Tickets`…), the **Category** role to reuse a dimension as a label, and the **Label** data role for fully dynamic labels that depend on slicers or filters.

## Positioning

By default the label is placed automatically next to the value, controlled by the [Layout](./layout) card's **Auto** group:

- **Vertical Alignment** + **Alignment** decide where the value/label pair sits inside the tile
- **Spacing** is the gap (in pixels) between the value and the label
- **Label under Value** forces the label below the value regardless of alignment

For free positioning, switch the [Layout](./layout) card to **Custom** and drag the label, or set its X/Y manually.

## Hiding the label

Turn the **Show** toggle off to remove the label entirely, leaving only the value (and optional prefix and logo) in the tile.
