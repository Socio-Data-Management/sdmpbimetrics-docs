---
sidebar_position: 5.5
title: Significance
---

# Significance

The **Significance** card holds the settings that drive **every** significance test of the visual: the **leakage pills** of the [Leakage](./leakage) card and the **gap cells** of the [extra columns](./columns#column-level-significance).

| Property | Description | Default |
|----------|-------------|---------|
| **Significance level** | Confidence level of the two-proportion z-test: 90%, 95% or 99% | 95% |
| **Signif. var. method** | Variance of the z-test: *Separate proportions* or *Pooled proportion* — see [below](#variance-method) | Separate proportions |

:::info One formula for all tests, one level by default
A leakage and a gap are different questions, but they are judged with the same formula: the variance method is set **here only**, so it can't be changed for one test and forgotten for the other. The **level** is set here too and applies everywhere by default, but an extra column may override it — its own **Significance level** field defaults to *Inherit*, which reads this card's value (see [A level per column](./additional-table#a-level-per-column)). What genuinely differs from one test to another — how Main and Comparison overlap — stays a per-test setting: [Independence](./leakage#independence) on the Leakage card, and on each column.
:::

## Significance level

| Level | z-threshold |
|-------|-------------|
| 90% | 1.645 |
| 95% *(default)* | 1.96 |
| 99% | 2.576 |

A higher confidence level (99%) requires a larger gap before a leakage pill or a column cell is colored — fewer false positives, but also fewer cells flagged.

The level set here applies to the leakage pills and to every column left on *Inherit*. A column that names a level of its own uses that one instead — same test, same bases, only a different threshold.

## Variance method

Both tests compare two proportions, `p1` observed on `n1` units and `p2` observed on `n2` units, with a z statistic `z = (p1 − p2) / √variance`. The method decides which variance is used:

| Method | Variance | Reads as |
|--------|----------|----------|
| **Separate proportions** *(default)* | `p1(1−p1)/n1 + p2(1−p2)/n2` | Each proportion keeps its own variance. The classic confidence-interval view of the difference |
| **Pooled proportion** | `p(1−p)·(1/n1 + 1/n2)` with `p = (p1·n1 + p2·n2) / (n1 + n2)` | Variance computed under the hypothesis that both proportions are equal, so they share a common estimate. The textbook hypothesis test |

The two give close results when the bases are similar and the proportions not extreme; they diverge when one base is much smaller than the other or when a proportion is close to 0 or 100%. Pick the one your study protocol specifies — the default keeps the behaviour of reports built before this setting existed.

### What `p1`, `n1`, `p2`, `n2` are in each test

- **Gap cell of a column**: `p1` is the column's Score on its Base, `p2` its Comparison on its Comparison base.
- **Leakage pill**: the tested proportions are the two *leakage rates* (the group's drop between the two steps, and the comparison's). Each is observed on the units that reached the **previous** step, i.e. `n = base × previous-step score` — the upstream step's base, never the step where the drop lands; see [Which base the test uses](./leakage#which-base-the-test-uses).

The test stays neutral when a variance cannot be computed (for instance a pooled proportion of exactly 0% or 100%).

## Reports saved before this card existed

The Significance level used to be set on the Leakage card (and once more per column). A report saved before the move keeps its **Leakage-card level**, now applied to all tests, until the level is set in this card. The level that was chosen separately for each column back then is no longer read: a column's level is now the **Significance level** field of the ⚙ dialog, which defaults to *Inherit*, so those columns follow this card until you set one explicitly.
