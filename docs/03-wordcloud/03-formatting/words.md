---
sidebar_position: 1
title: Words
---

# Words

The **Words** card cleans the text of the **Words** column before anything is counted.

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Case** | *As-is*, *lowercase*, *UPPERCASE* or *Capitalize* (first letter upper, the rest lower) | As-is |
| **Combine duplicates by** | How **Value** is combined when the same word appears on several rows: *Sum*, *Count* (number of rows) or *Average* | Sum |
| **Minimum length** | Words shorter than this number of characters are dropped | 1 |

## Why Case and Combine duplicates go together

Normalizing the case makes `Price`, `price` and `PRICE` the same text. The rows are then merged into a single word:

- **Value**, **Base**, **Comparison** and **Comparison Base** are **summed** over the merged rows (for *Sum* and, once converted, *Average*);
- with **Count** the word's value becomes the number of rows merged; with **Average**, the sum divided by that number;
- the first row's selection identity, Series Color and tooltip are kept.

## Order of processing

1. Case and trimming
2. [Minimum length](#properties) and [stop words](./filtering#limits)
3. Merging of duplicates
4. [Minimum value](./filtering#limits)
5. [Significance tests](./significance) — on the **whole** remaining set, so a word's flag does not change when you change Max words
6. [Max words](./filtering#limits): the words with the largest values are kept
