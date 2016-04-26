# Matadora CSS Lib

## Description

That's my personal CSS library, which provides a simple grid system and another useful auxiliary styles. No colors, no decoration, no theming.

## Installation

```
bower install matadora
```

## Usage

### Grid system

The grid is composed by a parent class **.mtd-row** (which represents a row) and immediately by a child class (which represents a column) is formed by 3 variables _.x-y-z_, where:
- _x_ describes the screen size where that style is applied, intending responsive behaviour, it can be **lg** for _large_ or less, **md** for _middle_ or less, or **sm** for _small_ or less;
- _y_ describes the size of that column, it's a value of percentage and multiple by 5, excluding zero and up to 100, formatted with 3 places (displaying leading zeros, if needed). For instance, it can be 005, 010, 015, ...,100;
- _z_ describes the vertical alignment of that column, in relation with the others in that same row, it can be **t** for _top_, **m** for _middle_, or **b** for _bottom_.

**Notes:**

- the _y_ value still accepts the special values 033 and 066.
- the _z_ value can still be omitted, if you don't desire to specify the vertical alignment, so the class name is defined just as _.x-y_.

**Example:**

```
<div class="mtd-row">
	<div class="lg-025-m md-033-t sm-050-b">
		This div will be displayed 25% wide on large screens, and vertical aligned at middle;
		on medium screens, 33% and top; on small screens, 50% and bottom.
	</div>
	<div class="lg-025-m md-033-t sm-050-b">
		This div will be displayed 25% wide on large screens, and vertical aligned at middle;
		on medium screens, 33% and top; on small screens, 50% and bottom.
	</div>
	<div class="lg-050-m md-033-t sm-100-b">
		This div will be displayed 50% wide on large screens, and vertical aligned at middle;
		on medium screens, 33% and top; on small screens, 100% and bottom.
	</div>
</div>
```

**Generic using:**

Optionally you can declare a column with no declared width, and defining just the vertical alignment, as the following example:

```
<div class="mtd-row">
	<div class="mtd-col">
		A generic column.
	</div>
	<div class="mtd-col-t">
		A generic column vertically aligned by top.
	</div>
	<div class="mtd-col-m">
		A generic column vertically aligned by middle.
	</div>
	<div class="mtd-col-b">
		A generic column vertically aligned by bottom.
	</div>
</div>
```

### Useful auxiliary styles

- **.ta-left, .ta-right, .ta-center, .ta-justify:** describes the _text-align_ property;
- **.mw-1080, .mw-768, .mw-640:** describes the _max-width_ property, it matches with the available screen sizes;
- **.lg-hide, .md-hide, .sm-hide:** hides an element (_display: none_) on that screen size.

### Notes

- The screen sizes are defined as 1080px+ for _large_, 768px+ for _middle_, and 640px+ for _small_;
- Matadora applies the property _box-sizing: border-box_ on the mainly html elements.