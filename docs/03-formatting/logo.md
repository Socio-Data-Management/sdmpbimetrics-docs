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
| **Width (px)** | Logo width in pixels (8–500) | 40 |
| **Height (px)** | Logo height in pixels (8–500) | 40 |
| **X (%)** | Horizontal center position (0 = left, 100 = right) | 50 |
| **Y (%)** | Vertical center position (0 = top, 100 = bottom) | 50 |

## Drag positioning

The logo position is **always custom** — there is no auto-alignment for the logo. In **edit mode** you can drag the logo anywhere inside the tile:

1. Click and drag the logo
2. The new X/Y is persisted via `persistProperties`
3. Subsequent renders use the saved position

## Visibility

The logo is rendered as an SVG `<image>` element layered **behind** the value and label text blocks. It only appears when:

1. The **Logo** data role is bound to a measure, **and**
2. The measure returns a non-empty value (a base64 string or a `data:image/...;base64,...` URI)

If the value does not start with `data:`, the visual automatically prepends `data:image/png;base64,`.

## Sizing tips

- For **icon-style logos** (brand marks, status icons), 32×32 to 64×64 px is usually enough
- The logo is drawn at the requested width/height — it does **not** preserve the aspect ratio of the source image. Set Width and Height to match your image proportions to avoid distortion
- Keep base64 source images small (under 5 KB) to avoid bloating the data model

See [Data Roles → Logo](../getting-started/data-roles#logo) for guidance on preparing base64 images.
