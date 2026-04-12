---
sidebar_position: 4
title: Corners
---

# Corners

The **Corners** card defines how each corner of the shape is rendered. Per-corner controls apply to multi-vertex shapes (rectangle, diamond, triangle, parallelogram, trapezoid). Convex/reflex controls apply to star, arrow, chevron and cross shapes.

![Corners formatting card](../images/03-corners-card.png)

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Corner Radius** | Radius (px) used for rounded and inward variants. Supports conditional formatting (fx). | 0 |
| **Top Left** | Corner type for the top-left vertex (rectangle, parallelogram, trapezoid) | Rounded |
| **Top Right** | Corner type for the top-right vertex | Rounded |
| **Bottom Left** | Corner type for the bottom-left vertex | Rounded |
| **Bottom Right** | Corner type for the bottom-right vertex | Rounded |
| **Convex Angles** | Corner type applied to all convex (outward) angles of multi-vertex shapes (star, arrow, chevron, cross, polygons) | Rounded |
| **Reflex Angles** | Corner type applied to all reflex (inward) angles | Right-angled |

## Corner types

| Type | Description |
|------|-------------|
| **Right-angled** | Sharp corner (no radius applied) |
| **Rounded** | Convex arc replacing the sharp corner |
| **Right-angled inward** | Sharp notch cut into the shape |
| **Rounded inward** | Concave arc cut into the shape |

## How the radius is computed

For corners that are not 90°, the arc radius is calculated from the vertex angle:

```
R = cornerRadius × tan(θ / 2)
```

where `θ` is the angle at the vertex. This ensures consistent visual rounding across all polygon types — a 60° vertex of a triangle and a 120° vertex of a hexagon use the same `cornerRadius` value but produce visually balanced arcs.

## Which controls apply to which shape?

| Shape category | Corner controls used |
|----------------|-------------------|
| Rectangle, Diamond, Parallelogram, Trapezoid | Top Left / Top Right / Bottom Left / Bottom Right |
| Triangle | Top Left / Top Right / Bottom Left (3 vertices) |
| Pentagon, Hexagon, Octagon | Convex Angles only |
| Star (5), Star (6), Arrow, Chevron, Cross | Convex Angles + Reflex Angles |
| Circle, Ellipse, Pill, Heart | None (curved paths) |
