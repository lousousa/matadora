# Matadora CSS Lib

## Synopsis

That's my personal CSS library.

## Structure Description

**Basics**

- .fs-initial
- .ta-left, .ta-right, .ta-center, .ta-justify
- .mw-1080, .mw-720, .mw-640
- .lg-hide, .md-hide, .sm-hide
- .mtd-row { .(lg,md,sm)-(005..100)-(t,m,b) }

**Buttons**

- .btn1-blue-(1..4)
- .btn1-red-(1..2)

**Forms**

```sh
form.mtd-form {
	>div.container-input {
		>label.label
		>(input,textarea,select).input
	}
	>ul.feedback-messages {
		>li.message
	}
}
```

**Modals**

```sh
div.mtd-modal(-opened,-closed) {
	>div.panel {
		>div.container-title {
			>span.title
			>a.btn-close {
				&:hover		
			}
		}
		>div.container-content
	}
}
```

**Tables**

```sh
table.mtd-table { 
	thead, tbody {
		tr {
			th.cell
		}
	}
}
```