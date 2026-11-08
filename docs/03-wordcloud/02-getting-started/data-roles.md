---
sidebar_position: 3
title: Data Roles
slug: /wordcloud/getting-started/data-roles
---

# Data Roles

| Data Role | Type | Description |
|-----------|------|-------------|
| **Words** | Grouping | Categorical text column — one row per word or phrase to draw |
| **Value** | Measure | Sizes the word (frequency, mentions, score…) |
| **Base** | Measure | Sample size behind Value. Required by both significance modes |
| **Comparison** | Measure | Reference value per word (e.g. previous period). Used by the *Vs comparison measure* mode |
| **Comparison Base** | Measure | Sample size behind Comparison |
| **Series Color** | Measure | A hex color code (e.g. `#FF0000`) that overrides every other color for that word |
| **Tooltips** | Measure | Extra measures shown only in the tooltip |

Only **Words** and **Value** are needed to draw a cloud; the others are optional.

:::note Row limit
The visual reads at most the **first 500 rows** of the Words column. Use the [Filtering](../03-formatting/filtering.md) card (or a Top N filter on the field) to keep the words that matter.
:::

## Value and Base: counts, not percentages

The significance test compares **proportions**. For a word, `p = Value / Base`: Value is the number of observations that mention the word, Base the number of observations the proportion is computed on (for instance the number of respondents). Bind **counts**, not already-computed percentages.

## Comparison and Comparison Base

In *Vs comparison measure* mode each word is tested against its own reference: `p1 = Value / Base` against `p2 = Comparison / Comparison Base`. Both bases must be bound and positive, otherwise the word stays neutral.

## Color priority

When several rules could color a word, the first that applies wins:

1. **Series Color** measure, when the word has a value;
2. the **significance** colors (above / below / not significant), as soon as a test is selected;
3. the [Colors](../03-formatting/colors.md) card (single, palette, gradient).

## Tooltips

Hovering a word shows its text, its Value, its Base, Comparison and Comparison Base when bound, followed by every measure placed in **Tooltips**. Report-page tooltips are supported.
