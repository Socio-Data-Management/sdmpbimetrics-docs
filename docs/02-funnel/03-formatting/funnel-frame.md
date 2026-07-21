---
sidebar_position: 8
title: Funnel Frame
---

# Funnel Frame

The **Funnel Frame** card draws an optional decorative card around each group's funnel — background, border, shadow and halo.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Show frame** | Master switch | Off |
| **Frame color** | Border/stroke color | #9DC3E6 |
| **Border width (px)** | Stroke width | 1 |
| **Corner radius (px)** | Rounding of the frame's corners | 8 |
| **Show background** | Fill the frame with a background color | On |
| **Background color** | Fill color (only visible when *Show background* is on) | #ffffff |
| **Shadow** | Drop shadow around the frame | On |
| **Shadow color** | Shadow color | #000000 |
| **Halo** | Soft glow around the frame, drawn beneath the shadow | Off |
| **Halo color** | Halo color | #9DC3E6 |

## Placement

The frame's top edge sits **below** the [Group Header](./group-header) logo/name band, so a group's logo/title always appears to float above its card — matching the classic "flag above a rounded card" layout used in benchmark dashboards.

## Shadow and halo together

When both **Shadow** and **Halo** are on, they're composed independently (halo, then shadow, then the frame itself) so the halo does not itself cast a shadow.
