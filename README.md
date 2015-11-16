# Matadora CSS Lib

## Synopsis

That's my personal CSS library.

## Structure Description

**Basics**

- .fs-initial
- .ta-left, .ta-right, .ta-center, .ta-justify
- .mw-1080, .mw-720, .mw-640
- .sm-hide, .md-hide, .lg-hide
- .mtd-row { .(lg,md,sm)-(005..100)-(t,m,b) }

**Forms**

form.mtd-form {
	>div.container-input {
		>label.label
		>(input,textarea,select).input
	}
	>ul.feedback-messages {
		>li.message
	}
}

**Modals**

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

**Tables**

table.mtd-table { 
	thead, tbody {
		tr {
			th.cell
		}
	}
}