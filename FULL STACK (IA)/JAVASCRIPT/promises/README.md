# Promises

A tradução de promise seria promessa. No javascript essa "promessa" é um objeto resultado de uma ação assíncrona que pode ou não dar certo.

Sendo mais técnico, as promises em Javascript podem ter três estados:

1. Pending: estado a promessa está pendente até sua conclusão
2. Fulfilled: a promessa concluiu com êxito e um valor foi retornado
3. Rejection: a operação falhou e a promessa retornou um erro

Para tratar os resultados dessa promise, podemos usar os métodos then, catch e finally.

O `Promise.then()` é usado para tratar os casos que a promise é finalizada com sucesso.
O `Promise.catch()` é usado para tratar erros das promises.
o `Promise.finally()` é um método que é executado no fim da promise, independente dela ter sido rejeitada ou não.
