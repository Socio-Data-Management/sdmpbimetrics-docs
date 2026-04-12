---
sidebar_position: 6
title: Effects
---

# Effects

The **Effects** card is a composite card grouping three visual effects: **Shadow**, **Glow** and **Edge**.

![Effects formatting card](../images/03-effects-card.png)

## Shadow

A directional drop shadow that extends outward from the shape.

| Property | Description | Default |
|----------|-------------|---------|
| **Vertical** | Shadow direction on the vertical axis: None, Top, Bottom | None |
| **Horizontal** | Shadow direction on the horizontal axis: None, Left, Right | None |
| **Same as shape color** | Use the shape's primary color as the shadow color | On |
| **Color** | Shadow color (visible only when *Same as shape color* is off) | #000000 |
| **Transparency** | Shadow opacity (0–100%) | 50 |
| **Size (px)** | Shadow extent in pixels (1–50) | 5 |

The shadow is composed via SVG filters. The `Vertical × Horizontal` combination determines the offset direction:

| Vertical | Horizontal | Effect |
|----------|------------|--------|
| Top | Left | Shadow extends up-left |
| Top | Right | Shadow extends up-right |
| Bottom | Left | Shadow extends down-left |
| Bottom | Right | Shadow extends down-right |
| Bottom | None | Pure vertical shadow downward |
| None | Right | Pure horizontal shadow rightward |
| None | None | No shadow |

:::info Unified fitting
Shadow extension is integrated into the unified bounding box calculation: the shape is automatically scaled down to leave room for the shadow on the appropriate side. The shadow never bleeds back through the shape and never overflows the viewport.
:::

## Glow

A soft halo around the shape.

| Property | Description | Default |
|----------|-------------|---------|
| **Same as shape color** | Use the shape's primary color as the glow color | On |
| **Color** | Glow color (visible only when *Same as shape color* is off) | #FFFFFF |
| **Size (px)** | Glow radius in pixels (0–50) | 0 |

Set **Size** to 0 to disable the glow.

## Edge

| Property | Description | Default |
|----------|-------------|---------|
| **Soften (px)** | Gaussian blur radius applied to the shape edge (0–20) | 0 |

Edge softening creates a feathered border effect — useful for blending the tile into a colored background.
