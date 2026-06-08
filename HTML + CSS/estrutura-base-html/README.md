# Estrutura básica de um documento HTML

## Tags

Tags são os componentes que fazem a estrutura do documento HTML.

Todas possuem uma tag de abertura, com a maioria possuindo uma tag de fechamento . Tudo que tiver entre elas estará contido nessa tag e fará parte do seu conteúdo.

```html
<tagname>Conteúdo da tag</tagname>
```

Algumas abrem e fecham nela mesma. Nesses tipos de tags não definimos conteúdo entre elas.

```html
<tagname />
```

Algumas tags possuem atributos, tanto as que possuem abertura e fechamento como as que não têm.

```html
<tagname attribute="value" />
<othertagname attribute="value">Conteúdo</othertagname>
```

## Estrutura

```html
<!-- Informa ao navegador que será usado HTML 5, evitando diferentes formas de renderização e possíveis incompatibilidades -->
<!doctype html>

<!-- Tag raiz do documento, nela será agrupado absolutamente tudo relacionado ao site -->
<html lang="pt-br">
  <!-- Cabeçalho do site, nele serão definidas tags que irão configurar algumas coisas no nosso site, metadados, links de css... -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello, World</title>
  </head>

  <!-- Contém o conteúdo que será de fato exibido ao usuário -->
  <body>
    Hello World!
  </body>
</html>
```
