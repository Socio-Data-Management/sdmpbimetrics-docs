---
sidebar_position: 5
title: Bars
---

# Bars

The **Bars** card controls the shape, gradient and spacing of the funnel's tapering bars (trapezoids).

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Constant size (linear taper to point)** | When on, bar widths taper **linearly** from full width down to a point over the number of steps, ignoring the actual Score values. When off, bar width is **proportional to Score** relative to the group's highest-scoring step. | Off |
| **Rectangle bars** | When on, each bar keeps straight vertical left/right edges (its own width top and bottom) instead of tapering into the width of the next step. Bars stay centered like a funnel, they just don't blend into one another. | Off |
| **Color (top)** | Fill color of the first (widest) bar | #F0A500 |
| **Color (bottom)** | Fill color of the last (narrowest) bar | #F0A500 |
| **Opacity (top) %** | Fill opacity of the first bar | 100 |
| **Opacity (bottom) %** | Fill opacity of the last bar | 60 |
| **Gap between bars (px)** | Vertical spacing between consecutive bars | 5 |

## Gradient between steps

**Color (top)** and **Color (bottom)** are interpolated (RGB) across the steps, and **Opacity (top)/(bottom)** likewise — so a funnel with many steps shows a smooth color/opacity ramp from the first to the last bar, not just two solid colors.

## Proportional vs. constant taper

- **Off (default)** — the width of each bar is proportional to its Score, taken relative to the **highest Score in the group** (not simply the first step's). This is the classic "funnel" read: a step that lost half its audience is visibly half as wide. Normalizing on the group's maximum rather than the first step is what keeps the widths sane when the steps aren't strictly decreasing — with [Sort on funnel value](./global-settings#options) off, or with an [Ascending funnel](./global-settings#ascending-funnel), a later step can outscore the first one without drawing a bar wider than the space allotted to it.
- **On** — bar widths taper evenly regardless of the actual values, ending in a point at the last step. Useful when you want a clean visual funnel shape and prefer to communicate drop-off purely through the [Leakage](./leakage) pills rather than bar width. With [Ascending funnel](./global-settings#ascending-funnel) on, the taper is mirrored: the first step is the point and bars widen downward.

## Rectangle bars

By default, each bar's bottom edge matches the width of the *next* step's bar, so the whole funnel reads as one continuous tapering shape. **Rectangle bars** draws every bar as a straight-sided rectangle instead — its bottom edge matches its own top edge — while still centering each bar like a funnel (unlike a standard bar chart, which aligns bars to a common zero axis).

:::tip Pair with "Sort on funnel value" off
This is most useful when [Global Settings → Sort on funnel value](./global-settings#options) is turned off, i.e. the steps aren't strictly decreasing. Tapering bars into each other only makes visual sense when each bar is narrower than the one before it — with rectangle bars, a step that scores *higher* than the previous one just draws as a wider rectangle, with no diagonal edge implying a funnel shape that isn't actually there.
:::
