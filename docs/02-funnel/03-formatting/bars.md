---
sidebar_position: 5
title: Bars
---

# Bars

The **Bars** card controls the shape, gradient and spacing of the funnel's tapering bars (trapezoids).

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Constant size (linear taper to point)** | When on, bar widths taper **linearly** from full width down to a point over the number of steps, ignoring the actual Score values. When off, bar width is **proportional to Score** relative to the top step. | Off |
| **Color (top)** | Fill color of the first (widest) bar | #F0A500 |
| **Color (bottom)** | Fill color of the last (narrowest) bar | #F0A500 |
| **Opacity (top) %** | Fill opacity of the first bar | 100 |
| **Opacity (bottom) %** | Fill opacity of the last bar | 60 |
| **Gap between bars (px)** | Vertical spacing between consecutive bars | 5 |

## Gradient between steps

**Color (top)** and **Color (bottom)** are interpolated (RGB) across the steps, and **Opacity (top)/(bottom)** likewise — so a funnel with many steps shows a smooth color/opacity ramp from the first to the last bar, not just two solid colors.

## Proportional vs. constant taper

- **Off (default)** — the width of each bar is proportional to its Score relative to the top step's Score. This is the classic "funnel" read: a step that lost half its audience is visibly half as wide.
- **On** — bar widths taper evenly regardless of the actual values, ending in a point at the last step. Useful when you want a clean visual funnel shape and prefer to communicate drop-off purely through the [Leakage](./leakage) pills rather than bar width.
