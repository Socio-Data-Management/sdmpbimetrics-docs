---
sidebar_position: 1
title: Overview
slug: /funnel/introduction/overview
---

# SDM Funnel

The **SDM Funnel** is a custom Power BI visual that displays a multi-step funnel (awareness → consideration → purchase, survey drop-off, conversion pipelines…) with built-in **leakage tracking**, **statistical significance testing against a comparison**, **competitor/other-partition comparison**, and up to **8 extra data columns** per step.

## Key Features

| Feature | Description |
|---------|-------------|
| **Any number of steps** | Steps are the distinct values of the **Funnel Steps** categorical column, drawn as tapering bars ordered by descending score |
| **Grouped funnels** | Optional **Group By** role repeats the whole funnel per value (e.g. one funnel per country or brand), side by side |
| **Leakage tracking** | The drop-off (%) between consecutive steps is computed and shown in a pill at each junction, with an optional legend explaining the pill colors |
| **Significance testing** | A two-proportion z-test flags whether a group's score — or its leakage — is significantly above/below a **Comparison** (a segment average, another category, another year… whatever you bind), at a 90/95/99% confidence level |
| **Competitor comparison** | Up to two additional "partitions" (Second / Third) overlay their own leakage % on the left of the funnel, connected by a configurable arrow shape |
| **Up to 8 extra columns** | Each step can show either a **Continuous** measure (Value, Gap vs. the main score, Comparison value, Comparison Gap, or the combined variants, with configurable Precision and colored by significance) or a **Discrete** text/ordinal value (e.g. "1st", "2nd") shown as-is — editable via a JSON dialog behind a ⚙ gear icon |
| **Group header** | Optional logo and/or name above each group's funnel |
| **Decorative frame** | Optional card/frame around each group, with background, shadow and halo |
| **Full typography control** | Independent font family/size/style for the value, step label, competitor text, column cells and leakage legend |
| **Localization** | Format pane fully localized in 10 languages |
| **Licensing & watermark** | Free / Pro plans, watermark removed with a valid key |

## Editions

| Feature | Free | Pro |
|---------|------|-----|
| Any number of steps & groups | Yes | Yes |
| Leakage & significance testing | Yes | Yes |
| Competitor comparison (2nd/3rd partition) | Yes | Yes |
| Extra columns (up to 8) | Yes | Yes |
| Watermark | Shown | Hidden |
| Support | Community | Email |

## When to use it

The Funnel visual is built for **step-based conversion or drop-off analysis** where you also need to know whether a group's performance is *statistically* different from a benchmark — not just visually different. Typical scenarios:

- Marketing/CRM funnels: Awareness → Familiarity → Consideration → Purchase, per brand or per country
- Survey drop-off analysis with a significance test against a category/segment norm, another year, or any other comparison point
- Competitive benchmarking: overlay one or two competitor (or "market average") leakage tracks next to your own funnel
- Multi-KPI step tables: add extra columns (NPS, satisfaction, repeat rate, a discrete rank…) per step, colored red/green against their own comparison

:::info Single visual, many funnels
When **Group By** is bound, a single Funnel visual instance draws **one funnel per group value**, side by side, all sharing the same step order. See [Data Roles](../getting-started/data-roles) for details.
:::
