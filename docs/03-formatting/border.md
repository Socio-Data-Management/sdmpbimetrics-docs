---
sidebar_position: 5
title: Border
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Border

The **Border** card draws an outline around the shape.

<video autoPlay loop muted playsInline style={{ maxWidth: "100%", border: "1px solid #ccc", borderRadius: "4px" }}>
  <source src={useBaseUrl("/videos/03-Borders.webm")} type="video/webm" />
</video>

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
