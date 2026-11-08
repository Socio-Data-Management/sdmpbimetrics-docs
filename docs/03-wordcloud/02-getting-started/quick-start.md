---
sidebar_position: 2
title: Quick Start
slug: /wordcloud/getting-started/quick-start
---

# Quick Start

## Add the visual and bind your data

1. Click the **SDM WordCloud** icon in the Visualizations pane
2. Drag your text column (e.g. `Verbatim.Word`) to **Words**
3. Drag a measure (e.g. number of mentions) to **Value**

A cloud appears, sized by Value, colored with the categorical palette.

## Clean it up

In the **Format pane**:

- **Words → Case** and **Combine duplicates by** merge variants of the same word
- **Filtering → Stop words** removes the words you don't want (comma-separated)
- **Filtering → Max words** keeps the N most important words

## Highlight what is significant

1. Bind a **Base** measure (the sample size behind Value)
2. Open **Significance** and set **Test** to *Vs global average*, or bind **Comparison** and **Comparison Base** and choose *Vs comparison measure*
3. Words significantly above the reference turn red, those significantly below turn green, the others grey
4. Adjust **Confidence level**, **Minimum base** and **Highlight style**

## Give it a shape

Open **Background** and choose a **Shape**, or *Custom image mask* with a base64 image to pour the cloud into a logo.
