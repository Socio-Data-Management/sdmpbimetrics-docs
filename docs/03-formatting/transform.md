---
sidebar_position: 3
title: Transform
---

# Transform

The **Transform** card applies horizontal/vertical mirroring and free rotation to the shape.

![Transform formatting card](../images/03-transform-card.png)

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Mirror Horizontal** | Flip the shape along its vertical axis | Off |
| **Mirror Vertical** | Flip the shape along its horizontal axis | Off |
| **Rotation (deg)** | Rotation angle, 0–360°. Supports conditional formatting (fx). | 0 |

## Why mirroring matters

The **Triangle**, **Arrow** and **Chevron** shapes are defined in a single canonical orientation (pointing right for arrow/chevron, pointing up for triangle). To get the other directions, combine mirroring and rotation:

| Desired direction | Mirror H | Mirror V | Rotation |
|-------------------|:--------:|:--------:|:--------:|
| Arrow → right | — | — | 0° |
| Arrow ← left | Yes | — | 0° |
| Arrow ↑ up | — | — | 270° |
| Arrow ↓ down | — | — | 90° |
| Triangle ▲ up | — | — | 0° |
| Triangle ▼ down | — | Yes | 0° |

## Live rotation handle

In **edit mode**, hover the tile and a small **rotation handle** appears at the top of the shape. Drag it to rotate the tile in real time:

- The path's `transform` attribute is updated continuously during the drag for instant visual feedback
- On drop, the final angle is persisted via Power BI's `persistProperties` API
- The handle is hidden in **view mode**

You can also type the exact rotation in the slider, or drive it from a measure with the **fx** button.
