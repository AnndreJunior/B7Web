# Tipografia e cores

## Fontes

O tipo de fonte é definido pela propriedade font-family. Podemos definir uma fonte padrão no body, mas a maior prioridade é o elemento mais interno.

Podemos definir várias fontes no font-family, todas separadas por vírgula. Se uma não existir, o navegador tentará encontrar outra.

Também podemos usar fontes externas no site google fonts por exemplo. Podemos importar tanto no html com a tag link ou importanto direto no arquivo css, além de baixar ela e usar no sistema.

Ao usar uma fonte externa no CSS, precisamos usar seu nome entre aspas

**Exemplo importando a fonte direto no CSS**

```css
@import url("https://fonts.googleapis.com/css2?family=Pliant:ital,wght@0,100..900;1,100..900&display=swap");

h1 {
  font-family:
    "Pliant", sans-serif; /* Se não for encontrada por algum motivo, usará a sans-serif */
}
```

## Cores

As cores no CSS podem ser definidos por código RGB (Red, Green, Blue) ou hexadecimal. Normalmente é mais usado
o código hexadecimal.
