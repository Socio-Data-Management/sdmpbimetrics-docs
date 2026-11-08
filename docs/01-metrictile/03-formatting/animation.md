---
sidebar_position: 12
title: Animation
---

# Animation

The **Animation** card plays a short **entrance animation** when the tile appears or when its data changes.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Animation** (card toggle) | Turns the entrance animation on or off | On |
| **Type** | **Fade**: the whole visual fades in. **Grow**: the data is drawn first, then the labels fade in. **Cascade**: a staggered variant of Grow | Grow |
| **Duration (ms)** | Duration of the main animation, 100–5000 ms | 800 |

## When it plays — and when it does not

The animation is an *entrance*: the visual is redrawn from scratch on every update, so it reveals the marks rather than morphing one state into another. To keep it from becoming tiresome, it is **only replayed when the data changes**. It is skipped for:

- a **resize**, a click in the Format pane or a selection — anything that leaves the data untouched;
- an **export** (PDF, PowerPoint, image, subscriptions), where the host renders headless and waits for the visual to finish;
- viewers whose operating system asks for **reduced motion**.
