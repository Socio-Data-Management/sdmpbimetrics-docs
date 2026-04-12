---
sidebar_position: 2
title: Layout
---

# Layout

The **Layout** card controls how the **Value** and **Label** text blocks are positioned inside the tile. It is a composite card with three groups: **Mode**, **Auto** and **Custom**.

![Layout formatting card](../images/03-layout-card.png)

## Mode

| Property | Description | Default |
|----------|-------------|---------|
| **Custom positioning** | Toggle between automatic alignment and free positioning | Off |

When **Custom positioning** is **off**, the *Auto* group is visible and controls the layout. When it is **on**, only the *Custom* group is visible.

## Auto

Used when *Custom positioning* is **off**. Power BI's standard alignment behaviour applies.

| Property | Description | Default |
|----------|-------------|---------|
| **Alignment** | Horizontal alignment (Left / Center / Right) | Center |
| **Vertical Alignment** | Vertical alignment (Top / Middle / Bottom) | Middle |
| **Spacing** | Gap (px) between the value and the label | 0 |
| **Label under Value** | When on, the label is placed below the value; otherwise the renderer chooses based on alignment | Off |

## Custom

Used when *Custom positioning* is **on**. Each text block is positioned by an X/Y percentage relative to the inscribed bounding box of the shape.

| Property | Description | Default |
|----------|-------------|---------|
| **Label X (%)** | Horizontal position of the label center (0 = left, 100 = right). `-1` = unset. | -1 |
| **Label Y (%)** | Vertical position of the label center (0 = top, 100 = bottom). `-1` = unset. | -1 |
| **Value X (%)** | Horizontal position of the value center | -1 |
| **Value Y (%)** | Vertical position of the value center | -1 |

## Drag activation

You don't have to type X/Y values manually. In **edit mode**, simply **click and drag** the value or label inside the tile:

1. The first drag automatically switches **Mode → Custom positioning** to **on**
2. The dragged block's X/Y is persisted via Power BI's `persistProperties` API
3. Subsequent renders use the saved coordinates

To go back to automatic centering, switch **Custom positioning** back to **off**. The X/Y values are kept but ignored.

:::tip Mixing modes
The Auto/Custom switch is global to all text blocks. If you want only one of them to be custom, drag both — but set the other one's X/Y to a value matching the auto position.
:::
