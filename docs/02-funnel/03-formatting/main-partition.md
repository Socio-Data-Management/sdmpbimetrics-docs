---
sidebar_position: 2
title: Main Partition
---

# Main Partition

The **Main Partition** card binds the measures that drive the funnel bars themselves — this is the primary, mandatory data source of the visual.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Score measure** | *(mandatory)* The group's value at each step — see [Data Roles](../getting-started/data-roles#score-base-avg-segment-segment-base--what-they-mean) | — |
| **Base measure** | Respondent/sample count at each step (denominator for significance testing) | — |
| **Avg. segment measure** | Benchmark average Score to test against | — |
| **Segment base measure** | Benchmark's respondent/sample count | — |
| **Name** | Optional label for this partition, shown in the [Group Header](./group-header) area. Supports conditional formatting (fx). | — |
| **Logo (base64)** | Optional base64 image shown instead of/alongside the name. Supports conditional formatting (fx). | — |
| **Logo size (height px)** | Height of the main-partition logo | 32 |

## Determines the step order

The funnel's step order (all groups) is computed by sorting the **first** group's Score values in descending order — see [Data Roles → Funnel Steps](../getting-started/data-roles#funnel-steps).

## Nothing renders without a Score

If **Score measure** is unbound, the visual renders nothing — it needs at least one step with a score to draw the first bar.
