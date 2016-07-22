# Matadora CSS

## Descrição

Matadora é uma biblioteca CSS que provê um sistema simples para definição de grids e outros estilos úteis para construção de layouts. Sem cores, sem decoração, sem tema.

## Instalação

```
bower install matadora
```

## Utilização

### Sistema de grid

O grid é composto por uma classe pai **.mtd-row** (que representa uma linha) e imediatamente por uma classe filha (que representa uma coluna) que é formada por 3 variáveis _.x-y-z_, onde:
- _x_ define o tamanho da tela onde aquele estilo é aplicado, com intenção de definir o comportamento responsivo, que pode ser **lg** para **_large_** (grande) ou menos, **md** para **_medium_** (médio) ou menos, ou **sm** para **_small_** (pequeno);
- _y_ define o tamanho daquela coluna, que é um valor de porcentagem e múltiplo de 5 e no máximo 100, formatado com 3 casas decimais (incluindo zeros à esquerda, se necessário). Por exemplo, pode ser 005, 010, 015, ..., 100;
- _z_ define o alinhamento vertical daquela coluna em relação com as demais na mesma linha, pode ser **t** para **_top_** (topo), **m** para **_middle_** (meio), ou *b* para **_bottom_** (baixo).

**Notas:**

- a variável _y_ ainda aceita os valores especiais 033 e 066, para casos especiais.
- a variável _z_ pode ser omitida, se você não deseja especificar alinhamento vertical, então o nome da classe é definido apenas como _.x-y_.

**Exemplo:**

```
<div class="mtd-row">
	<div class="lg-025-m md-033-t sm-050-b">
		Essa div será mostrada com largura de 25% em telas grandes, e alinhada verticalmente ao meio;
		em telas médias, 33% e ao topo; em telas pequenas, 50% e em baixo.
	</div>
	<div class="lg-025-m md-033-t sm-050-b">
		Essa div será mostrada com largura de 25% em telas grandes, e alinhada verticalmente ao meio;
		em telas médias, 33% e ao topo; em telas pequenas, 50% e em baixo.
	</div>
	<div class="lg-050-m md-033-t sm-100-b">
		Essa div será mostrada com largura de 50% em telas grandes, e alinhada verticalmente ao meio;
		em telas médias, 33% e ao topo; em telas pequenas, 100% e em baixo.
	</div>
</div>
```

**Uso genérico:**

Opcionalmente você pode declarar uma coluna sem largura definida, e definindo apenas o alinhamento vertical, como no seguinte exemplo:

```
<div class="mtd-row">
	<div class="mtd-col">
		Uma coluna genérica.
	</div>
	<div class="mtd-col-t">
		Uma coluna genérica verticalmente alinhada ao topo.
	</div>
	<div class="mtd-col-m">
		Uma coluna genérica verticalmente alinhada ao meio.
	</div>
	<div class="mtd-col-b">
		Uma coluna genérica verticalmente alinhada a baixo.
	</div>
</div>
```

### Estilos auxiliares úteis

- **.ta-left, .ta-right, .ta-center, .ta-justify:** descreve a propriedade _text-align_;
- **.mw-1080, .mw-768, .mw-640:** descreve a propriedade _max-width_, que são os valores definidos para tamanhos de telas;
- **.lg-hide, .md-hide, .sm-hide:** oculta um elemento (_display: none_) naquele tamanho de tela.

### Notas gerais

- Os tamanhos de tela são definidos por 1080px+ para _grande_, 768px+ para _médio_, e 640px+ para _pequeno_;
- Matadora aplica a propriedade _box-sizing: border-box_ nos principais elementos html.