---
sidebar_position: 11.5
title: Title Constants
---

# Title Constants

The **Title Constants** card holds up to five text values and five numeric values that the [extra columns](./additional-table)' **Column title** can reference. Each one carries Power BI's own **fx** button, so it is normally **bound to a measure** rather than typed — which is what makes a column title follow the report's filters.

It exists for one reason: a title that changes with the data needs a value *from* the data, and the obvious way to get one — dropping a label measure in a data well — is the expensive way. A measure placed in a well is returned for every step and every series, many copies of the same string to carry it once, and it shifts the position of the other measures. A constant bound through fx is evaluated outside the wells.

## Fields

| Field | Range | Default | Notes |
|-------|-------|---------|-------|
| **Number of string constants for title** | 0–5 | 0 | How many **ConstantString** boxes are shown below |
| **ConstantString1 … 5** | Text, fx | empty | Referenced in a title as `%[ConstantString1]` |
| **Number of numeric constants for title** | 0–5 | 0 | How many **ConstantNum** boxes are shown below |
| **ConstantNum1 … 5** | Number, fx | 0 | Referenced in a title as `%[ConstantNum1]` |
| **Decimals of numeric constants** | Auto, 0–4 | Auto | Shown once at least one numeric constant is; applies to all of them |

Both counters only control **visibility**. Lowering one hides boxes, it never clears them: set 5, fill them, drop to 2 and back to 5 — the five values are still there. So they are safe to play with, and the card stays short when a single constant is needed.

:::note Why a counter and not an *Add* button
The number of boxes **shown** is free, because the formatting pane is rebuilt from code on every render. The number that can **exist** is not: every field in the pane must be declared once and for all in the visual's capabilities, the only channel Power BI persists through. Hence five of each, with a counter hiding the rest.
:::

## Binding one, then using it

1. Set **Number of string constants for title** to 1 — **ConstantString1** appears.
2. Hover it, click **fx**, and bind it to a measure returning a single label:

   ```dax
   Wave label = SELECTEDVALUE(Survey[Wave])
   ```

3. Open the ⚙ **Extra Columns** dialog and write the reference in a **Column title**:

   ```
   Conversion — %[ConstantString1]
   ```

The picker under the title box lists the constants currently shown, each with a preview of its value (`ConstantString1 — T4 2026`), and inserts the reference for you.

## Numeric constants and the raw double

A measure bound through fx arrives unformatted, so a count can come back as `13.9999999`. **Decimals = Auto** rounds that to `14`; set an explicit 0–4 for a fixed number of decimals. If you need a thousands separator or a currency symbol, format the value in DAX and use a **string** constant instead.

See [Additional Table → A title that follows the data](./additional-table#a-title-that-follows-the-data) for the substitution rules and what happens when a reference does not resolve.
