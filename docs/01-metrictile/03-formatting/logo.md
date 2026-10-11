---
sidebar_position: 7
title: Logo
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Logo

The **Logo** card controls the size and position of the image bound to the **Logo** data role.

<video autoPlay loop muted playsInline style={{ maxWidth: "100%", border: "1px solid #ccc", borderRadius: "4px" }}>
  <source src={useBaseUrl("/videos/03-Logo.webm")} type="video/webm" />
</video>

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Width (px)** | Logo width in pixels (0–500). **0** = follow the height at the image's own aspect ratio | 40 |
| **Height (px)** | Logo height in pixels (0–500). **0** = follow the width at the image's own aspect ratio | 40 |
| **X (%)** | Horizontal center position (0 = left, 100 = right) | 50 |
| **Y (%)** | Vertical center position (0 = top, 100 = bottom) | 50 |

## Forcing one dimension, or both

Width and Height are independent, and a **0** means *derive me from the other one*:

| Width | Height | Result |
|-------|--------|--------|
| 40 | 40 | Exactly 40×40 — the image is stretched to fit, aspect ratio ignored |
| 40 | 0 | 40 px wide, height computed from the image's proportions |
| 0 | 40 | 40 px tall, width computed from the image's proportions |
| 0 | 0 | The image's own natural size |

The proportional modes need the image's intrinsic dimensions, which the visual measures once per image and caches. On the very first render of a new image the logo is drawn as a 40 px square, then redrawn at the correct ratio as soon as the measurement lands — a flicker you may notice when swapping images while authoring.

:::note SVG logos
An SVG without an intrinsic size reports no natural dimensions. Such an image keeps the 40 px square fallback in the proportional modes — give it an explicit Width **and** Height instead.
:::

## Drag positioning

The logo position is **always custom** — there is no auto-alignment for the logo. In **edit mode** you can drag the logo anywhere inside the tile:

1. Click and drag the logo
2. The new X/Y is persisted via `persistProperties`
3. Subsequent renders use the saved position

## Visibility

The logo is rendered as an SVG `<image>` element layered **behind** the value and label text blocks. It only appears when:

1. The **Logo** or **Logo (active)** data role is bound to a measure, **and**
2. The measure returns a non-empty value (a base64 string or a `data:image/...;base64,...` URI)

If the value does not start with `data:`, the visual automatically prepends `data:image/png;base64,`.

## Two-position logos

When the tile is used as a [Button Mode](./button-mode) button, **Logo** is shown while the button is Off and **Logo (active)** while it is On. This card sizes and positions both — they share the same box, so the two images stay in place as the button flips.

## Sizing tips

- For **icon-style logos** (brand marks, status icons), 32×32 to 64×64 px is usually enough
- Leave one dimension at **0** rather than matching the two by hand: the image then keeps its proportions whatever you replace it with
- Keep base64 source images small (under 5 KB) to avoid bloating the data model

See [Data Roles → Logo](../getting-started/data-roles#logo) for guidance on preparing base64 images.
