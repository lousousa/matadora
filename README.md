# Matadora CSS Lib

## Description

That's my personal CSS library, which provides a simple grid system and another styles.

## Using

### Grid system

The grid is composed by a parent class **.mtd-row** (it represents a row) and immediately by a child class (it represents a column) which is formed by 3 variables _.x-y-z_, where:
- _x_ represents the screen size where that style is applied, intending responsive behaviour, it can be **lg** for _large_ or less, **md** for _middle_ or less, or **sm** for _small_ or less;
- _y_ represents the size of that column, it's a value of percentage and multiple by 5, excluding zero and up to 100, formatted with 3 places (displaying leading zeros, if needed). For instance, it can be 005, 010, 015, ...,100.
- _z_ represents the vertical alignment of that column, in relation with the others in that same row, it can be **t** for _top_, **m** for _middle_, or **b** for _bottom_.

**Note: **the _y_ value still accepts the special values 033 and 066.

**Example:**

```
<div class="mtd-row">
	<div class="lg-025-m md-033-t sm-050-b">
		This div will be displayed on large screens with 25% wide,and vertical aligned at middle;
		on medium screens, 33% and top; on small screens, 50% and bottom.
	</div>
	<div class="lg-025-m md-033-t sm-050-b">
		This div will be displayed on large screens with 25% wide,and vertical aligned at middle;
		on medium screens, 33% and top; on small screens, 50% and bottom.
	</div>
	<div class="lg-050-m md-033-t sm-100-b">
		This div will be displayed on large screens with 50% wide,and vertical aligned at middle;
		on medium screens, 33% and top; on small screens, 100% and bottom.
	</div>
</div>
```

- .fs-initial
- .ta-left, .ta-right, .ta-center, .ta-justify
- .mw-1080, .mw-768, .mw-640
- .lg-hide, .md-hide, .sm-hide