---
sidebar_position: 5
title: Border
---

# Border

The **Border** card draws an outline around the shape.

![Border formatting card](../images/03-border-card.png)

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Show** *(toggle)* | Master switch to enable the border | Off |
| **Color** | Border stroke color. Supports conditional formatting (fx). | #808080 |
| **Width** | Stroke width in pixels (0–20) | 2 |
| **Style** | Solid, Dashed, Dotted | Solid |

## Notes

- The border is drawn **on the shape's outline path**, so it follows all corner styles defined in the [Corners](./corners) card (rounded, inward, etc.)
- The stroke width is included in the unified fitting calculation, so the border never gets clipped at the viewport edge
- Dashed and dotted styles use SVG `stroke-dasharray` patterns scaled to the border width
