---
sidebar_position: 7
title: Competition Leakage
---

# Competition Leakage

The **Competition Leakage** card styles the arrow and text used to display the [Second Partition](./second-partition) / [Third Partition](./third-partition) comparison tracks on the left of the funnel.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Show arrow** | Master switch for the connecting arrow mark | On |
| **Arrow shape** | Curved Arrow, Asym. Curved Arrow, or Curved Ribbon | Curved Arrow |
| **Arrow color** | Arrow fill/stroke color | #999999 |
| **Arrow transparency %** | Arrow opacity (0 = fully opaque) | 0 |
| **Text font** | Font family/size/bold/italic for the comparison percentage and name | Segoe UI, 10px, Bold |
| **Text color** | Color of the comparison percentage/name text | #333333 |

## Layout

For each step junction, one arrow is drawn per bound comparison partition (Second, then Third), hugging the left edge of the funnel bars. Next to it, the comparison's **leakage %** is shown, and either its **logo** or its **name** (first ~6 characters) just to the left of the percentage. When both Second and Third Partition are bound, their entries stack vertically at the same junction.

The arrow only appears where a comparison partition actually has data for that junction — if a value is missing for a given group/step, the arrow and text are skipped rather than showing an empty entry.
