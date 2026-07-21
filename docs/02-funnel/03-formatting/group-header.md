---
sidebar_position: 9
title: Group Header
---

# Group Header

The **Group Header** card controls the optional logo and/or name shown above each group's funnel — the label that identifies *which* group (e.g. which country or brand) a given funnel belongs to when [Group By](../getting-started/data-roles#group-by) is bound.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Logo measure (base64)** | Optional measure returning a base64 image, evaluated per group | — |
| **Show logo** | Master switch for the logo | On |
| **Show text** | Master switch for the group's name (the `Group By` value) | On |
| **Font size** | Size of the group name text | 12 |
| **Logo height (px)** | Height of the group logo (width follows the source image's aspect ratio) | 32 |
| **Align logo on frame X** | When the [Funnel Frame](./funnel-frame) is shown, center the logo/name on the *frame's* horizontal center rather than the funnel bars' center | On |
| **Logo on frame** | Straddle the logo on the frame's top edge (half above, half overlapping the card) instead of sitting fully above it | Off |

## Text-only fallback

If **Logo measure (base64)** is unbound or empty for a group (and *Show text* is on), the group's name is shown instead — there's no need to disable the logo measure to fall back to text.

## Logo on frame

With **Logo on frame** on and a [Funnel Frame](./funnel-frame) shown, the logo is vertically centered exactly on the frame's top border — a common "flag straddling the card" treatment in benchmark dashboards. The group name (if shown) is then pushed below the logo, still above the bars.
