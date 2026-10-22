/**
 * Podemos usar generics para definir o tipo de elemento html.
 * Se não for definido, o tipo inferido será Element, que é genérico.
 */
document
  .querySelector<HTMLInputElement>("#nome")
  ?.addEventListener("keyup", (event) => {
    console.log(event.key);
  });
