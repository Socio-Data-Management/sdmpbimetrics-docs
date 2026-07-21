---
sidebar_position: 8
title: Value
---

# Value

The **Value** card controls the formatting of the main numeric value displayed in the tile.

![Value formatting card](../images/03-value-card.png)

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Font Color** | Color of the value text. Supports conditional formatting (fx). | #FFFFFF |
| **Font Family** | Font family used for the value | DIN |
| **Font Size** | Font size in pixels (4–200). Supports conditional formatting (fx). | 27 |
| **Bold / Italic / Underline** | Standard text style toggles | Off |
| **Display Units** | Auto, None, Thousands (K), Millions (M), Billions (bn), Trillions (T). Combined with the measure's format string. | Auto |
| **Decimal Places** | Number of decimals (0–6). When `0`, the measure's format string drives precision; any value greater than 0 overrides it. | 0 |

## Conditional font size (fx)

**Font Size** supports **conditional formatting (fx)** — the size in pixels can be driven by a DAX measure. Use this when you want the visual to scale with the value (e.g. several MetricTile visuals on a page where the most important figure stands out by being larger).

See [Conditional font size — DAX recipes](./conditional-font-size) for ready-to-paste formulas.

## Number formatting

The displayed value is built by **combining** the measure's format string (currency symbols, %, custom suffixes, locale separators) with the **Display Units** and **Decimal Places** set on this card. Tooltip and card share the same formatted output, so they always stay consistent.

The format string is read from the bound measure's *Format* property in your model (e.g. `"$#,0.00"`, `"0.00%"`, `"#,0"`). The card then layers Display Units / Decimal Places on top.

### Example combinations

Assuming the measure's format is `"$#,0.00"` (currency with two decimals):

| Value | Display Units | Decimal Places | Output |
|------:|---------------|---------------:|--------|
| `123.29` | Auto | 1 | `$123.3` |
| `1,299` | Auto | 1 | `$1.3K` |
| `123,456,789` | Auto | 1 | `$123.5M` |
| `1,299` | None | 0 | `$1,299.00` *(format string precision)* |
| `1,299` | Thousands | 2 | `$1.30K` |

**Auto** picks the appropriate suffix from the value's magnitude (no scaling under 1,000; K from 1,000; M from 1,000,000; etc.). **None** disables scaling entirely. **Decimal Places = 0** means « use the format string's natural precision »; any value greater than 0 overrides it.

If you need a per-locale or per-context format (e.g. `€` instead of `$`), edit the measure's *Format* in your model — the card and the tooltip will both follow.

## Centering

The value is centered horizontally and vertically by default, using a **scan-line intersection algorithm**: the renderer projects horizontal scan lines through the inscribed bounding box of the (possibly rotated) shape and picks the largest unobstructed band, ensuring the text never overflows the silhouette — even for diamond, triangle, star, heart and other non-rectangular shapes.

To override the automatic centering, use the [Layout](./layout) card with **Custom positioning** on, or simply **drag** the value text in edit mode.
