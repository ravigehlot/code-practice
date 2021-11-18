#
# The fr CSS length unit explained.

> **fr unit:** solves overflow issues.

**repeat()** is a CSS shorthand.

> Can be done with calc() but fr is better because
> it takes overflows into consideration.

**fr unit:** Calculates the percentage of free space that
can be allocated for evenly for all four columns.

**Issue:** If gaps are used, it will cause an overflow
because all columns at 25% plus the gap of 10px will
be more than 100%. <-- **THIS IS WHERE the fr unit helps.**
```
display: grid;
grid-template-columns: repeat(4, calc(100% / 4));
grid-column-gap: 10px;
```

The fr unit is (a fraction) unit.

    ex: 1fr the same as 1/4 or 25%

There is no overflow because 1fr takes gaps into
account by substracting it from the total.
```
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 10px;
```

/* New way */
`grid-template-columns: repeat(3, 1fr);`

/* Old way */
`grid-template-columns: 1fr 1fr 1fr;`


#
# Grid CSS Module

1. Define a container with `display: grid;`
2. Set the column and row sizes with `grid-template-columns` and `grid-template-rows`.
3. Next place its child elemtns into the grid with grid-column and grid-row.

> The source order of the grid elements does not matter.
> 
> CSS can place elements in any order.
> 
> Makes it easy to rearrange your grid with media queries.

## **Terminology:**

### Parent:

- Grid Container: The element on which display: grid; is applied
It is the direct --parent-- of all the --grid items--.

- Grid Line: The dividing lines that make up the --structure-- of the grid.
They can be either vertical (column grid lines) or horizontal (row grid lines)
and reside on either side of a row or column. 
    Grid lines are created when you define tracks.

- Grid Track: The space between two adjacent grid lines. You can think of
them as the columns or rows of the grid. The grid track between the second
and third-row grid lines.
    They are defined by using the grid-template-columns and grid-template-rows.

- Grid Area: The total space surrounded by four grid lines.

### Children:

- Grid Items: The children (direct descendants) of the grid container. Here the items elements are grid items, but sub-item is not:
```
<div class="container">
    <div class="item"></div>
    <div class="item">
    <p class="sub-item"></p>
    </div>
    <div class="item"></div>
</div>
```

- Grid Cell: The space between two adjacent row and two adjacent column grid lines. It is a single unit of the grid.

### CSS Grid Properties for the Parent:

- Grid Container:
    `display: grid` or `display: inline-grid`

- Grid Columns and Rows:
  
  - `grid-template-columns`: (**Grid Track**) track size, (**Grid Line**) line name

  - `grid-template-rows`: (**Grid Track**) track size, (**Grid Line**) line name

**track:** length, percentage or fraction of the free space in the grid (using the fr unit)

**CSS Length Unit:** fr

#
## **CSS Functions:**

The minmax() CSS function defines a **size** *range*: 
  - `greater than`(>) 
    - **OR** 
      - `equal to`(==) *MIN* 
      - **AND** 
      - `less than`(<) 
    - **OR** 
  - `equal to`(==) *MAX*.

```
(something > MIN || something == MIN) AND (something < MAX || something == MAX)
```

---
Resources:

- [MDN - CSS Grid Layout:] (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

- [CSS-Tricks - Grids:] (https://css-tricks.com/snippets/css/complete-guide-grid/)