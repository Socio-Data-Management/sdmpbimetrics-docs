---
sidebar_position: 3
title: Data Roles
slug: /funnel/getting-started/data-roles
---

# Data Roles

Unlike a typical Power BI visual where each field well has one specific meaning, the Funnel visual exposes **three data roles**, and one of them — **Values** — is a single bucket that holds *every* measure the visual might need (scores, bases, comparison values, logos, extra-column measures…). Once your measures are in that bucket, you tell the visual **which measure plays which role** from dropdowns inside the **Format pane** cards (Main Partition, Second/Third Partition, Group Header, Column *N*…).

| Data Role | Type | Description |
|-----------|------|-------------|
| **Funnel Steps** | Grouping | Categorical dimension whose distinct values become the funnel's steps (e.g. `Awareness`, `Familiarity`, `Consideration`, `Purchase`) |
| **Group By** | Grouping | Optional grouping that repeats the whole funnel per value (e.g. one funnel per `Country`) |
| **Values** | Measure (many) | All measures: scores, bases, comparison values, logos (base64)… assigned to a role from the Format pane |

## Funnel Steps

Drag a categorical column into **Funnel Steps**. Each distinct value becomes one bar in the funnel. The visual does **not** require the column to be pre-sorted: it automatically **orders the steps by descending score**, based on the **Main Partition → Score** measure of the *first* group returned by the data view (the first `Group By` value, or the only group if `Group By` is unbound). That order is then applied identically to every group, so all funnels in the visual stay aligned on the same step sequence.

:::tip Sort order comes from one group
If your groups don't all decrease monotonically in the same order, the bars in the other groups may not look strictly descending — only the reference group (the first one) is guaranteed to. This is expected: the step order must be identical across all funnels so comparisons line up.
:::

## Group By

Optional. Bind a column here (e.g. `Country`, `Brand`) to draw **one funnel per distinct value**, side by side in the same visual. Leave it unbound to draw a single funnel.

## Values

Drag **every measure you need** into this single well — there is no need to bind them one at a time to specific roles. Once they're in the Values bucket, each Format pane card that needs a measure exposes its own dropdown (Score, Comparison measure, Comparison base measure, Logo…) listing everything available in Values. See:

- [Main Partition](../formatting/main-partition) — the primary funnel's Score / Base / Comparison / Comparison base
- [Second Partition](../formatting/second-partition) / [Third Partition](../formatting/third-partition) — competitor/benchmark comparison scores
- [Group Header](../formatting/group-header) — optional per-group logo measure
- [Columns](../formatting/columns) — up to 8 extra per-step measures

### Score, Base, Comparison, Comparison base — what they mean

These four measure roles power both the **on-bar value** and the **statistical significance test**:

| Role | Meaning |
|------|---------|
| **Score** | The group's value at this step — typically a percentage of respondents/customers who reached this step |
| **Base** | The group's respondent/sample count at this step — the denominator behind Score |
| **Comparison** | The reference value to test the group's Score against. Despite the name, it doesn't have to be a "segment average" — it can be any comparable figure: another category, another year, another product line, a market benchmark… |
| **Comparison base** | The comparison's respondent/sample count — the denominator behind Comparison |

Only **Score** is mandatory. Base + Comparison + Comparison base are optional, but **all three are required together** to unlock significance testing (colored leakage pills and column cells) for a given step — if any of the three is missing or non-positive, that step's significance falls back to *neutral*.

:::warning Scale: 0–100, not 0–1
Score, Comparison and any per-column equivalents are expected to be numbers **on a 0–100 scale** (e.g. `42.5` for "42.5%"), because the significance formulas divide by 100 internally. Format these measures as a **plain number** in your model (e.g. `0.0`) rather than **Percentage** — a Percentage format whose underlying value is already `0–100` would be displayed ×100 too high on the funnel bars.
:::

### Significance testing

The **Global Settings → Options → Significance level** dropdown (90/95/99%) sets the z-score threshold for a standard **two-proportion z-test**, applied in two places:

- **Leakage pills** — is the group's step-to-step drop-off significantly worse (red) or better (green) than the comparison's own drop-off between the same two steps?
- **Column cells** — is the group's Score at this step significantly above (red) or below (green) its own Comparison?

Turn on **Exclude group from comparison** when your **Comparison** measure is computed *including* the group's own respondents (a common setup when the comparison is simply "all groups combined"). The visual then mathematically removes the group's contribution from the comparison average and its base before running the test, avoiding a group being compared against a benchmark that partly contains itself.

## Logos

Both the **Group Header** logo and the **Main/Second/Third Partition** logos accept **base64-encoded images**, exactly like the MetricTile's Logo role: if the value does not start with `data:`, the visual automatically prepends `data:image/png;base64,`. Keep them small (a few KB, e.g. 24×24 to 40×40 px source) to avoid bloating the data model.

## Extra columns

Beyond the funnel bars, up to **8 extra columns** of data can be shown per step (e.g. NPS, satisfaction, repeat-purchase rate, a rank). Each column has its own **Score type** — **Continuous** (a numeric measure, with Base / Comparison / Comparison base / Precision / Display / colors, exactly like the main funnel) or **Discrete** (an arbitrary text/ordinal value such as "1st"/"2nd", shown as-is with no comparison or coloring). Continuous columns support six display modes (Value, Gap vs. the main score, Comparison value, Comparison Gap, and the "both" combinations of each). See [Columns](../formatting/columns) and [Additional Table](../formatting/additional-table) for the two ways to configure them.
