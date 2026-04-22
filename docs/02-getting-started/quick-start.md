---
sidebar_position: 2
title: Quick Start
slug: /getting-started/quick-start
---

# Quick Start

## Add the visual to your report

1. Click the **SDM MetricTile** icon in the Visualizations pane
2. Resize the empty tile container on your report canvas

## Bind your data

1. Drag a measure to the **Value** data well — this is the number that will be displayed
2. *(Optional)* Drag a grouping column to **Category** — provides row context and serves as a default label
3. *(Optional)* Drag a measure to the **Label** well — this becomes the descriptive text (overrides Category)
4. *(Optional)* Drag a measure returning a hex color to **Series Color** — to drive the tile color from data
5. *(Optional)* Drag a measure returning a base64 image to **Logo** — to embed an image in the tile

The tile renders immediately with the default rectangle shape and the configured palette color.

## First customizations

Open the **Format pane** and try these:

- **Shape → Shape** — pick another shape (circle, hexagon, star, pill…)
- **Shape → From / To Color + Gradient** — apply a two-color gradient
- **Effects → Shadow** — add a drop shadow with direction and size
- **Corners → Top Left / Top Right / …** — switch corners between rounded and right-angled
- **Transform → Rotation** — rotate the tile (a drag handle also appears in edit mode on hover)

## Drag-positioning text and logo

In **edit mode** (when the visual is selected on the report canvas):

- **Hover** the tile and a small **rotation handle** appears at the top — drag it to rotate
- **Click and drag** the value, the label or the logo to move them anywhere inside the tile
- The first drag automatically switches the **Layout** card from *Auto* to *Custom* mode and persists the position

To go back to automatic centering, set **Layout → Mode → Custom positioning** off.
