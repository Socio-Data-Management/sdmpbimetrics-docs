---
sidebar_position: 6
title: Leakage
---

# Leakage

The **Leakage** card is a composite card grouping two concerns: the **Pills** drawn at each junction between two consecutive bars (showing the **step-to-step drop-off (%)** for the main funnel), and an optional **Legend** explaining what the pill colors mean.

## Pills

| Property | Description | Default |
|----------|-------------|---------|
| **Show leakage pills** | Master switch | On |
| **Pill height (px)** | Height of the pill | 20 |
| **Font size** | Text size inside the pill | 11 |
| **Independence** | How Main and Comparison overlap — see [Independence](#independence) below | Main separate from comparison |
| **Neutral color** | Pill border/text color when the drop-off isn't significantly different from the comparison | #888888 |
| **Above average color (bad)** | Pill border/text color when the group's leakage is significantly **worse** than the comparison's | #cc0000 |
| **Below average color (good)** | Pill border/text color when the group's leakage is significantly **better** than the comparison's | #007700 |

### How leakage is computed

For each step after the first: `leakage % = (1 − score / previousScore) × 100`.

### How the color is decided

If [Main Partition](./main-partition)'s **Base**, **Comparison** and **Comparison base** are all set for both the current and previous step, the visual runs a **two-proportion z-test** comparing the group's conditional drop-off against the comparison's own drop-off between the same two steps, using the [Significance](./significance) card's **Significance level** and **Signif. var. method**, and this card's **Independence**. Otherwise the pill uses the **Neutral color**. Which sample size that test is run on is spelled out in [Which base the test uses](#which-base-the-test-uses).

:::info Above = bad, Below = good
"Above average" means the group is **leaking more** than the comparison at that junction (bad) — colored with **Above average color**. "Below average" means the group is leaking less (good) — colored with **Below average color**. Don't confuse this with the [Columns](./columns) card, whose Above/Below refer to the raw Score, not leakage.
:::

:::info Significance level and variance method
The confidence level (90 / 95 / 99%) and the variance formula (separate or pooled proportions) are set once, in the [Significance](./significance) card, and apply to the pills and to the extra columns alike.
:::

## Independence

Two samples sharing observations breaks the independence assumption a two-proportion z-test relies on. **Independence** tells the test how Main and Comparison actually relate so it can correct for that before running:

| Option | When to use it | What happens |
|--------|-----------------|--------------|
| **Main separate from comparison** *(default)* | Main and Comparison are genuinely distinct samples | No adjustment |
| **Main is part of comparison** | Comparison is computed over a wider sample that *includes* Main (e.g. Comparison = "all brands", Main = one brand within it) | Main's weighted contribution is subtracted out of Comparison before testing |
| **Comparison is part of Main** | The reverse nesting — Main is the wider sample and Comparison is a subset of it (e.g. Score = a market-wide average, Comparison = a single competitor within that market) | Comparison's weighted contribution is subtracted out of Main before testing |

:::tip Picking the wrong direction silently kills significance
If Comparison's base is actually *larger* than Main's, "Main is part of comparison" is the correct choice — but if you pick it when the nesting actually runs the other way (Main's base is the larger one), the subtraction produces a negative or out-of-range adjusted sample and the test falls back to **neutral** for every step, no matter how large the real gap is. If pills stay stubbornly gray with an option other than "Main separate from comparison" selected, double-check which of Main/Comparison is really the larger, containing sample.
:::

Each extra [column](./additional-table#fields-per-column-up-to-8) has its **own** Independence, independent from this card's — useful when a column's Score/Comparison roles are wired the opposite way round from the main funnel (see the example above). A column can also override the **Significance level** (its default, *Inherit*, takes this card's); the variance method stays shared by every test.

:::tip Ascending funnel
When [Global Settings → Ascending funnel](./global-settings#ascending-funnel) is on, this card is renamed **Growth** in the Format pane and its **Show leakage pills** switch becomes **Show growth pills** (likewise, [Competition Leakage](./competition-leakage) becomes **Competition Growth**) — same cards, same properties, worded for a gain rather than a drop-off. The pill **formula and colors are unchanged**: the figure is still `(1 − score / previousScore) × 100` against the step above, and Above/Below still mean *underperforming / outperforming the comparison*. The **Neutral / Above / Below label** legend texts are free-form and aren't rewritten automatically — edit them yourself if you want growth wording (e.g. "Significantly higher leakage" → "Significantly lower growth").
:::

### Which base the test uses

A leakage isn't a proportion of the sample, it's a **conditional** rate: out of those who reached step *n*, the share lost at step *n+1*. Its denominator is therefore the **upstream** step — step *n*, never the step where the drop lands:

- **Tested proportion**: `l = 1 − score(n+1) / score(n)`
- **Base of that proportion**: the respondents who actually **reached step n**, i.e. `base(n) × score(n)`

`base(n)` is the [Main Partition](./main-partition) **Base** measure read at step *n* — usually the whole sample — so multiplying it by that step's score brings it back to the respondents present at *n*.

Example: 1 000 respondents in the sample, 100% at step *n*, 75% at step *n+1*. The pill shows a 25% leakage, tested on **1 000** units. Had step *n* scored 60% instead, the same 25% leakage would be tested on 600 units: the test grows stricter as the funnel narrows, which is the intent — a drop measured on the few people still in the funnel carries less evidence.

The comparison's leakage is built the same way, on `comparison base(n) × comparison(n)`. Both bases are computed **after** the Independence adjustment above, so a contribution subtracted out shrinks the base along with the proportion.

:::note The denominator is treated as exact
`l` is tested as a plain binomial proportion over that base, which ignores the sampling error of the denominator itself — step *n* is an estimate too. That is the usual convention for a conditional rate on nested steps; the practical consequence is a slightly anti-conservative test when step *n* is itself very low.
:::

## Legend

An optional legend can be drawn below the funnel, explaining what each significance color means in plain text (pills and extra columns) — useful when the visual is shared without this documentation at hand.

| Property | Description | Default |
|----------|-------------|---------|
| **Show legend** | Master switch for the legend group | Off |
| **Alignment** | Left / Center / Right | Center |
| **Margin top (px)** | Space between the funnel and the legend | 4 |
| **Font / Size / Bold / Italic / Underline** | Legend text typography — applies to every entry, leakage or column | Segoe UI, 10px, not bold |
| **Shrink to fit** | When the entries need more room than the legend may take (35% of the visual's height), reduces the text size, down to 7 px, until they fit | On |
| **Neutral label** | Text next to the neutral color swatch | "Not significantly different" |
| **Above label** | Text next to the above/bad color swatch | "Significantly higher leakage" |
| **Below label** | Text next to the below/good color swatch | "Significantly lower leakage" |
| **Suffix** | Optional extra text appended after the labels (e.g. "vs segment") | — |

The legend holds two kinds of entries, and is drawn as soon as one exists:

- **Leakage entries** (Neutral / Above / Below, from this card) — when **Show legend** is on, **Show leakage pills** is on and at least one step has a computed leakage value; an entry is skipped if its label is left empty;
- **Column entries** — for every [extra column](./additional-table#significance-display) with **Add to legend** checked and a significance test that produced results. They are drawn with the column's own decoration (font color, icon, frame, background or free text) and don't depend on **Show legend** nor on the pills: the legend stays available when the leakage pills are off.

Alignment, margin, typography and suffix of this group apply to all entries. Entries wrap onto several lines when they don't fit on one: the visual measures the legend and reserves that height below the funnel so nothing is cut and it never overlaps the bars. If there are too many entries for the room available, **Shrink to fit** reduces the text size; with it off, the funnel simply gets what is left.

:::note
These settings are in the Leakage card's *Legend* group even when only extra-column entries are shown; the group's own *Show legend* switch only governs the leakage entries.
:::
