---
sidebar_position: 6
title: Leakage
---

# Leakage

The **Leakage** card controls the pill-shaped badges drawn at each junction between two consecutive bars, showing the **step-to-step drop-off (%)** for the main funnel.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Show leakage pills** | Master switch | On |
| **Pill height (px)** | Height of the pill | 20 |
| **Font size** | Text size inside the pill | 11 |
| **Neutral color** | Pill border/text color when the drop-off isn't significantly different from the segment | #888888 |
| **Above average color (bad)** | Pill border/text color when the group's leakage is significantly **worse** than the segment's | #cc0000 |
| **Below average color (good)** | Pill border/text color when the group's leakage is significantly **better** than the segment's | #007700 |

## How leakage is computed

For each step after the first: `leakage % = (1 − score / previousScore) × 100`.

## How the color is decided

If [Main Partition](./main-partition)'s **Base**, **Avg. segment** and **Segment base** are all set for both the current and previous step, the visual runs a **two-proportion z-test** comparing the group's conditional drop-off against the segment's own drop-off between the same two steps (see [Global Settings → Significance level](./global-settings#options)). Otherwise the pill uses the **Neutral color**.

:::info Above = bad, Below = good
"Above average" means the group is **leaking more** than the segment at that junction (bad) — colored with **Above average color**. "Below average" means the group is leaking less (good) — colored with **Below average color**. Don't confuse this with the [Columns](./columns) card, whose Above/Below refer to the raw Score, not leakage.
:::
