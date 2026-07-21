---
sidebar_position: 10
title: Prefix Label
---

# Prefix Label

The **Prefix Label** card adds an optional short text that appears **in front of** the value — typically a currency symbol, a unit or a signed indicator.

![Prefix Label formatting card](../images/03-prefix-label-card.png)

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Show** *(toggle)* | Master switch — shows or hides the prefix | Off |
| **Text** | Prefix text displayed before the value (e.g. `$`, `€`, `≈`, `+`) | *(empty)* |
| **End Spacing** | Extra gap (px) between the prefix and the value (0–50) | 4 |
| **Font Color** | Prefix text color. Supports conditional formatting (fx). | #FFFFFF |
| **Font** | Font family, size, bold, italic, underline (FontControl) | Segoe UI, 16 px |

## Typical uses

- **Currency symbol** — `$`, `€`, `£` before the value when the measure format string does not already include one
- **Units** — `≈`, `~`, `±` to express approximations or tolerances
- **Trend indicator** — `↑` or `↓` driven by a conditional format rule based on variation

## Positioning

The prefix is anchored **to the left of the value** and follows the value's position. When the value is dragged or repositioned through the [Layout](./layout) card, the prefix follows.

The **End Spacing** property controls how much horizontal room is left between the end of the prefix and the first character of the value. Increase it for an airier look, decrease to 0 for a tight composition.

## Independent font

The prefix uses its **own FontControl**, independent from the value. This lets you combine, for example, a small `$` prefix with a large bold value, or a light italic `≈` with a regular value.
