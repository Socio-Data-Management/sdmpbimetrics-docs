---
sidebar_position: 3
title: Layout
---

# Layout

The **Layout** card controls the typography and the placement of the words.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Font** | Font family of the words | Segoe UI |
| **Min font size** | Size of the smallest word (at least 4) | 12 |
| **Max font size** | Size of the largest word | 80 |
| **Size scale** | How a value maps to a size: *Linear*, *Square root* or *Logarithmic* | Square root |
| **Rotation** | *Horizontal only*, *Horizontal + Vertical*, or *Free angles* | Horizontal + Vertical |
| **Spacing** | Padding around each word, in pixels | 2 |
| **Spiral** | *Archimedean* or *Rectangular* search path used to find a free spot | Archimedean |
| **Random seed** | Seeds the random choices of the layout (word rotation, starting positions). The same seed gives the same cloud on every reload; **0** gives a new random cloud each time | 1 |

## Choosing a size scale

- **Linear** keeps the proportions of the data but lets one dominant word crush the others.
- **Square root** is a good compromise and the default.
- **Logarithmic** flattens strong differences — useful when the top words are far above the rest.

:::tip Reproducible layout
The cloud uses random choices (word rotation, starting positions). With the default **Random seed** of 1 the layout is identical on every reload. Change the number to get another arrangement you like, or set **0** for a different one each time. The layout still depends on the data order, the font and the size of the visual.
:::

:::note Shape and mask mode
When a [Background](./background) shape or image mask is selected, the words are placed by a different engine: **Spiral** does not apply, and **Rotation** is only honored when [Respect rotation](./background#respect-rotation) is on.
:::
