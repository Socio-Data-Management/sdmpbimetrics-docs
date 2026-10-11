---
sidebar_position: 11
title: Button Mode
---

import FilterBuilder from '@site/src/components/FilterBuilder';

# Button Mode

The **Button Mode** card turns the tile into a **two-position button**. Clicking it flips a persisted status between **On** and **Off**, and each position applies its own filter to the report page through the Power BI filter API.

Typical uses: a country switch (Region A ↔ Region B), a "show only my segment" toggle, or a branded image button that filters the page it sits on.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Button Mode** (card toggle) | Turns the tile into a button. While off, the tile behaves as a normal metric tile and clicks cross-filter through the Selection API instead | Off |
| **Button is On** | Current position of the button. Also sets the position the report opens with | Off |
| **In/out button** | Raised (outset shadow) while Off, pressed in (inset shadow) while On. Takes over the **Effects → Shadow** group, which is greyed out while this is on | Off |
| **Filter JSON — On** | Filter applied while the button is On. Empty means *no filter in this position* | *(empty)* |
| **Filter JSON — Off** | Filter applied while the button is Off. Empty means *no filter in this position* | *(empty)* |

## How the status behaves

The status is a **persisted property**, not a reading of the current page filters. It is saved with the report and restored on reload.

- **Reading mode** — a plain click anywhere on the tile flips it.
- **Edit mode** — a plain click belongs to the drag handles (text, logo, rotation), so the button answers to **Ctrl+click** (Cmd+click on macOS). Flipping the **Button is On** toggle in the formatting pane does exactly the same thing, which is the easiest way to test a filter while authoring.

Flipping the status is the only thing a click does; the filter is applied by the render that follows. Click and pane toggle therefore always give the same result.

:::info Bookmarks
Bookmarks capture **filters and selections**. The filter a button applies is part of that, and the position itself is declared as filter state, so both are captured and restored together: a bookmark taken while the button was On comes back with the On filter *and* the On look. One bookmark per position is therefore a valid way to drive the button.
:::

## Two-position logos

The card pairs naturally with the two logo data roles:

| Data role | Shown when |
|-----------|------------|
| **Logo** | the button is Off |
| **Logo (active)** | the button is On |

Either role may be left empty — a single logo is then used in both positions, and binding neither simply gives a button with no image. See [Data Roles](../getting-started/data-roles#logo) and the [Logo card](./logo).

## Native actions: the transparent overlay

Button Mode filters the page. It cannot **navigate** to a report page, go **back**, apply a **bookmark** or open **Q&A** — the Power BI visuals API exposes no such call, and a visual runs in a sandboxed cross-origin iframe, so there is no way to reach the report shell either. Those actions belong to native Power BI buttons.

You can still have them, and keep a fully custom look, by **stacking a transparent native button on top of the tile**. The tile supplies the appearance — shape, gradient, corners, border, effects, a data-driven logo; the native button supplies the action. Neither appears in a printout or an export.

### Recipe

1. **Place and style the MetricTile** as you want the control to look.
2. Turn on **Layout → Output → [Do not print or export](./layout#output)**, so the tile leaves no trace in PDF, PowerPoint, image exports or subscriptions. Native buttons are already excluded from those, so the whole control disappears together.
3. **Insert → Buttons → Blank**. In its format pane set **Fill → transparency 100 %**, and remove its text, icon, border and shadow.
4. Leave the button's **hover** and **pressed** states transparent too — otherwise they flash over your tile on mouseover.
5. Set **Action → Type** to the action you want.
6. Size the button to cover the tile exactly, bring it to the front (Format → Selection pane), then select both and **Group** them so they travel together.

### What the overlay unlocks

| Action type | What it does |
|-------------|--------------|
| **Page navigation** | Jumps to a named report page — the thing a custom visual cannot do |
| **Back** | Returns to the previous page, using the *report's* navigation stack rather than the browser's |
| **Bookmark** | Applies a bookmark, including one that drives a Button Mode position |
| **Drill through** | Goes to a drillthrough page |
| **Web URL** | Opens an external link |
| **Q&A** | Opens the Q&A pop-up |

### What to watch out for

- **One role per tile.** The overlay captures the click, so the same tile cannot also be a Button Mode filter button. Decide per tile: native action, or filter.
- **Hover and tooltips** go to the overlay as well. Use the native button's own tooltip setting rather than the tile's **Tooltips** data role.
- **Keep them aligned.** Grouping is what makes this robust; without it, a later resize of one of the two silently breaks the hit area.
- This is report authoring, not code. It needs no custom development, works identically in Desktop and the Service, and is unaffected by Power BI updates.

## Filter JSON generator

Fill in the table and column, pick the kind of filter, and paste the result into the **Filter JSON** box. It covers the three common cases: a **list of values**, two conditions combined with **AND**, and two conditions combined with **OR**.

<FilterBuilder />

The sections below describe every filter type in detail.

## Writing the filter JSON

Each box takes a **Power BI filter object serialized as JSON**. Three filter types are available to a visual.

:::info Where the filter applies
A filter pushed by a visual behaves like a **slicer selection**: it filters the other visuals on the page, subject to the page's *Edit interactions* settings. It is not written into the report's Filters pane — only the embedding API can do that.
:::

### Basic filter — a list of values

Use it for equality against one or more values. Operators: `In`, `NotIn`, `All`.

```json
{"target":{"table":"Data_PLS","column":"Country"},"filterType":1,"operator":"In","values":["Region_A"]}
```

Several values at once:

```json
{"target":{"table":"Data_PLS","column":"Country"},"filterType":1,"operator":"In","values":["Region_A","Region_B"]}
```

Everything **except** a value:

```json
{"$schema":"http://powerbi.com/product/schema#basic","target":{"table":"Data_PLS","column":"Country"},"filterType":1,"operator":"NotIn","values":["Region_A"]}
```

### Advanced filter — conditions

Use it for anything that is not plain equality. `logicalOperator` is `And` or `Or`, and up to two conditions are supported per filter.

Condition operators: `Is`, `IsNot`, `Contains`, `DoesNotContain`, `StartsWith`, `DoesNotStartWith`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `IsBlank`, `IsNotBlank`, `IsEmptyString`, `IsNotEmptyString`, `None`.

**Starts With** — every country whose name starts with `Region_`:

```json
{"$schema":"http://powerbi.com/product/schema#advanced","target":{"table":"Data_PLS","column":"Country"},"filterType":0,"logicalOperator":"And","conditions":[{"operator":"StartsWith","value":"Region_"}]}
```

Two conditions combined — starts with `Region_` but is not `Region_A`:

```json
{"$schema":"http://powerbi.com/product/schema#advanced","target":{"table":"Data_PLS","column":"Country"},"filterType":0,"logicalOperator":"And","conditions":[{"operator":"StartsWith","value":"Region_"},{"operator":"IsNot","value":"Region_A"}]}
```

A numeric range on another column:

```json
{"$schema":"http://powerbi.com/product/schema#advanced","target":{"table":"Data_PLS","column":"Score"},"filterType":0,"logicalOperator":"And","conditions":[{"operator":"GreaterThanOrEqual","value":50},{"operator":"LessThan","value":80}]}
```

`IsBlank` and its siblings take no `value`:

```json
{"$schema":"http://powerbi.com/product/schema#advanced","target":{"table":"Data_PLS","column":"Country"},"filterType":0,"logicalOperator":"And","conditions":[{"operator":"IsNotBlank"}]}
```

### Tuple filter — several columns at once

Each entry of `values` is one permitted **combination** of the target columns, in the same order as `target`.

```json
{"$schema":"http://powerbi.com/product/schema#tuple","filterType":6,"operator":"In","target":[{"table":"Data_PLS","column":"Country"},{"table":"Data_PLS","column":"Segment"}],"values":[[{"value":"Region_A"},{"value":"Premium"}],[{"value":"Region_B"},{"value":"Mass"}]]}
```

The SQL equivalent is `WHERE (Country = 'Region_A' AND Segment = 'Premium') OR (Country = 'Region_B' AND Segment = 'Mass')`.

### Reference table

| Type | `$schema` suffix | `filterType` | Selector |
|------|------------------|--------------|----------|
| Basic | `#basic` | `1` | `operator` + `values` |
| Advanced | `#advanced` | `0` | `logicalOperator` + `conditions` |
| Tuple | `#tuple` | `6` | `operator` + `target[]` + `values[][]` |

## Rules to respect

- `table` is the **table name in the model** and `column` the bare column name — no brackets, no `Table[Column]` notation.
- The target must be a **column**, never a measure.
- `values` is always an array, even for a single value.
- Text comparisons match the stored values exactly, case included.
- The target column does **not** need to be bound to any data role of the tile.

## Generating the JSON from a measure

Both boxes carry the **fx** (conditional formatting) button, so the payload can be produced by a DAX measure instead of being typed in. Mind the doubled quotes:

```dax
Filter On =
"{""$schema"":""http://powerbi.com/product/schema#basic"",""target"":{""table"":""Data_PLS"",""column"":""Country""},""filterType"":1,""operator"":""In"",""values"":[""" & SELECTEDVALUE( Data_PLS[Country] ) & """]}"
```

:::caution fx rules need a bound field
A value produced by an fx **rule** is delivered per data point, so the tile must have a field bound to its **Category** role for the rule to evaluate. A constant typed directly into the box works with no data at all.
:::

## Troubleshooting

| Symptom | What to check |
|---------|---------------|
| Nothing is filtered | *Edit interactions*: select the tile, then **Format → Edit interactions**, and make sure the target visuals are set to filter rather than none |
| Nothing is filtered, interactions are fine | The `table` name must match the model exactly — a renamed or related table silently fails to resolve |
| Both positions give the same result | The two boxes hold the same payload |
| The filter survives the button being turned off | Emptying a box means *no filter* for that position; flip the button once so the empty position is applied |

## Reference

- [The Visual Filters API — Microsoft Learn](https://learn.microsoft.com/en-us/power-bi/developer/visuals/filter-api) — the filter types, their interfaces and the operators
- [`applyJsonFilter` — Power BI Visuals API](https://microsoft.github.io/PowerBI-visuals/api/references/applyjsonfilter/)
- [`powerbi-models`](https://github.com/microsoft/powerbi-models) — the source of the filter interfaces and enumerations
