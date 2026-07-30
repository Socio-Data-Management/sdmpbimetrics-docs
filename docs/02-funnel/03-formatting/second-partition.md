---
sidebar_position: 3
title: Second Partition
---

# Second Partition (comparison)

The **Second Partition** card binds an optional competitor, market, or benchmark score that is overlaid as a small comparison track on the **left side** of the funnel, one entry per step junction. See [Competition Leakage](./competition-leakage) for how it's drawn (arrow shape, colors, font).

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Score measure** | The comparison score at each step. Leave unbound to hide the Second Partition entirely. | — |
| **Name** | Short label (only the first ~6 characters are shown) used when no logo is set. Supports conditional formatting (fx). | — |
| **Logo (base64)** | Optional base64 image shown instead of the name | — |
| **Logo size (height px)** | Height of the Second Partition logo | 14 |

## How the comparison leakage is computed

Unlike the main funnel, the Second Partition doesn't use Base/Comparison/Comparison base — it simply shows the **step-to-step drop-off (%)** of its own Score measure, using the same step order as the main funnel. No significance test is applied to comparison partitions.

## Combining with Third Partition

Both [Second Partition](./second-partition) and [Third Partition](./third-partition) can be bound at the same time — their entries stack vertically at each junction, in that order.
