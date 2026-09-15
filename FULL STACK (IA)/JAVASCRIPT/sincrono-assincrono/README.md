# Javascript síncrono e assíncrono

A linguagem é uma liguagem `single-threaded`, ou seja, trabalha com uma pilha de chamadas e executa cada instrução por vez.

Uma desvantagem disso é que, se um comando travar de alguma forma, o código vai travar completamente naquele ponto.

Essa forma de execução se chama `execução síncrona`.

`Execuções assíncronas` precisam esperar um tempo para executar, nesses casos não posso executar de forma síncrona.

Um bom exemplo são requisições HTTP de uma `Rest API`, pois há um tempo de resposta de milissegundos do servidor.
