---
sidebar_position: 12
title: Global Threshold
---

# Global Threshold

The **Global Threshold** card decides when the funnel must **not** be drawn, and what is shown in its place. It covers two situations: an **empty dataset** and a **conditional threshold** (typically a base too small to be published).

## When the funnel is replaced

| Situation | Trigger | Message shown | Needs the *Empty Panel* switch? |
|-----------|---------|---------------|---------------------------------|
| **Empty dataset** | The report filters leave **no step**, or **every measure is blank** on every row | **Message** | Yes — it only decides whether the message is painted |
| **Conditional threshold** | `Test if` *comparison* `To` is true | **Conditional Message** | No — the test acts on its own |

In both cases the whole drawing is cleared: bars, leakage pills, legend, Note and the ⚙ icon. Without this, a funnel with blank data would be drawn with every step at 0 and empty columns, which looks like a broken visual.

:::info Empty dataset takes priority
The conditional test is only evaluated when the dataset is **not** empty.
:::

:::info Landing page vs empty dataset
The startup screen only appears while the **Funnel Steps** or **Values** field wells are not filled. Once both are bound, a lack of data is an *empty dataset* handled by this card, not a startup state.
:::

:::caution Blank, not zero
The empty dataset is detected on **blank** measure values. A measure that returns `0` when there is no data is considered as data. In that case, use the conditional threshold instead (for example `Test if` = a respondent count, `Is` `<`, `To` = `1`).
:::

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Empty Panel** | Paints **Message** over the cleared visual when the dataset is empty. Off = the visual is cleared and left blank | On |
| **Message** | Text for an empty dataset. Leave blank for a fully blank panel. Supports conditional formatting (fx) | "No Data to display" |
| **Conditional Message** | Text shown when the test below is met. Leave blank for a fully blank panel. Supports fx | "Not enough data to display" |
| **Test if** | Left operand of the test — usually a measure bound through **fx** (a base, a number of respondents) | 0 |
| **Is** | `>`, `=` or `<` | `<` |
| **To** | Right operand of the test. Supports fx | 0 |
| **Horizontal / Vertical Alignment** | Position of the message in the visual | Center / Middle |
| **Font, Text Size, Text Color** | Message typography. Size and color support fx | Segoe UI, 14, #333333 |
| **Background Color / Transparency** | Panel background. Transparency 0 = opaque, 100 = invisible | #FFFFFF / 100% |

:::tip Hide the funnel below a minimum base
1. Open **Global Threshold** and click **fx** next to **Test if**; bind your base measure (for example the number of respondents).
2. Set **Is** to `<` and **To** to your minimum (for example `30`).
3. Type the **Conditional Message** (for example "Base too small").

The measure is read once, from the first value resolved by Power BI — so use a **global** base, identical on every row, not a per-step one.
:::

:::note Both operands at 0 with `<`
This is the default and it never triggers (nothing is below 0): the conditional message is off until you change it.
:::
