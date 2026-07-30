---
sidebar_position: 2
title: Quick Start
slug: /funnel/getting-started/quick-start
---

# Quick Start

## Add the visual to your report

1. Click the **SDM Funnel** icon in the Visualizations pane
2. Resize the empty container on your report canvas

## Bind your data

1. Drag your funnel stage column (e.g. `Stage.Name`) to **Funnel Steps**
2. Drag **every measure you'll need** (score, base, comparison, comparison base…) to **Values** — you'll assign each one's role from the Format pane next
3. *(Optional)* Drag a grouping column to **Group By** to draw one funnel per group value

Nothing renders yet — the visual needs at least a **Score** measure assigned before it can draw a bar.

## Assign the Score measure

1. Open the **Format pane**
2. Expand **Main Partition**
3. Set **Score measure** to the measure that represents "% who reached this step"

The funnel now renders: one tapering bar per distinct value of **Funnel Steps**, ordered by descending score.

## Add leakage & significance

1. In **Main Partition**, set **Base measure**, **Comparison measure** and **Comparison base measure**
2. The **Leakage** card's pills (step-to-step drop-off %) turn red/green once all four measures are set and a group's leakage is significantly worse/better than the comparison's
3. Adjust **Global Settings → Options → Significance level** (90/95/99%) to control how strict the test is
4. *(Optional)* Turn on **Leakage → Show legend** to draw a small legend below the funnel explaining what the pill colors mean

## First customizations

Open the **Format pane** and try these:

- **Bars → Color (top) / Color (bottom)** — apply a top-to-bottom gradient to the funnel bars
- **Global Settings → Value Font / Step Label Font** — adjust the on-bar typography
- **Leakage → Above/Below average color** — recolor the significance pills
- **Frame → Show frame** — add a decorative card around each funnel

## Add a competitor comparison

1. Drag a competitor/benchmark score measure into **Values**
2. Open **Second Partition**, set **Score measure** and optionally **Name** / **Logo (base64)**
3. A small comparison track appears on the left of the funnel at each step junction, connected by an arrow (configurable in **Competition Leakage**)

## Add extra columns

1. In **Global Settings → Options**, turn on **Show extra columns**
2. Either raise **Number of columns** and configure the legacy **Column 1…8** cards, **or** click the small **⚙ gear icon** that appears on the visual in edit mode to open the JSON column editor — see [Additional Table](../formatting/additional-table)
