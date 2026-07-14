# Texto e semântica

## Títulos

Os títulos são representados pelas seguintes tags

```html
<h1>Título 1</h1>
<h2>Título 2</h2>
<h3>Título 3</h3>
<h4>Título 4</h4>
<h5>Título 5</h5>
<h6>Título 6</h6>
```

Cada título possui uma importânica, sendo h1 o título mais importante da página e o h6 o menos importante

Algumas tags implementam uma estilização padrão. Por exemplo, cada título possui um tamanho diferente, mas todos possuem um leve negrito

## Textos

### Parágrafos

A principal tag para textos em geral é a tag de parágrafo

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

Cada parágrafo possui uma leve margem superior e inferior, dessa forma separando eles

### Negrito

Para deixar um trecho em negrito, umas a tag strong

```html
<p>Neste texto <strong>o seguinte texto estará em negrito</strong>.</p>
```

### Div e span

A tag div é uma divisão, ela cria uma espécie de container que contém um conteúdo

Ela é um container genérico, então não possui tanta semântica, pode ser usado quando queremos apenas dividir alguma parte da página sem que seja necessário uma semântica por trás

Essa tag é display block por padrão

As tags span seguem um princípio parecido, mas são inline

São úteis quando queremos separar alguma coisa dentro de um texto, mas também sem muita semântica envolvida

```html
<div>
  <p>
    Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>, sed do
    eiusmod tempor <span>incididunt ut labore et dolore magna aliqua.</span> Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea
    <span>
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    </span>
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
  </p>
</div>
```

## Classes e IDs

Praticamente todas as tags possuem dois atributos: class e id

Ambas servem como identificadores que podem ser usados para estilização ou uso do javascript

### Class

O class é a segunda forma mais geral de seleção, por tags é o jeito mais geral possível

Todas as tags identificadas com um mesmo valor para a class terão seus estilos modificados ou poderão ser acessados via javascript

Com isso podemos fazer uma certa organização como a seguinte: todo container será uma div, mas terá um estilo próprio, logo não podemos modificar os estilos usando diretamente a tag como seleção, mas queremos poder selecionar várias divs que funcionam como um container, logo definimos da seguinte forma:

```html
<div class="container">...conteúdo</div>
```

Dessa forma podemos reutilizar código, facilitando o desenvolvimento

### Id

Por outro lado, ids são identificadores únicos, então não podemos ter o mesmo id em duas tags diferentes

Elas são usadas justamente quando queremos identificar uma tag de forma única, tanto para estilização como para manipulação com js

```html
<div id="identificador-unico">...conteúdo</div>
```
