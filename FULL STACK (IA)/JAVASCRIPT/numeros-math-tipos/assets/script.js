/**
 * Gera números aleatórios entre 0 e o limite (incluindo o limite).
 *
 * @param {number} limite - Limite do intervalo para gerar números aleatórios.
 * @returns Número aleatório;
 */
function gerarNumeroAleatorioComIntervalo(limite) {
  return Math.floor(Math.random() * (limite + 1));
}

/**
 * Calcula o desconto de um determinado valor.
 *
 * @param {string} precoTexto - Preço em formato de texto.
 * @param {number} percentual - Número inteiro informando o percentual do desconto.
 * @returns O valor com o desconto
 */
function calcularDesconto(precoTexto, percentual) {
  let num = parseFloat(precoTexto);
  let desconto = (percentual / 100) * num;
  let final = num - desconto;
  return final.toFixed(2); // Retorna um valor com duas casas depois da vírgula
}

console.log(`Desconto: ${calcularDesconto("15", 10)}`);

let numero = 3.5;
console.log(typeof numero);

numero = 3.8;
let numeroArredondado = Math.round(numero);
console.log(numeroArredondado);

numeroArredondado = Math.floor(numero);
console.log(numeroArredondado);

console.log(gerarNumeroAleatorioComIntervalo(10));

document.getElementById("form-idade").addEventListener("submit", (event) => {
  event.preventDefault();

  let idadeValue = document.getElementById("idade").value;

  if (!idadeValue) {
    alert("Informe sua idade");
  } else {
    let idade = parseInt(idadeValue);

    if (idade <= 0) {
      alert("Como pode você ter 0 anos ou menos? Não faz sentido '-'");
    } else {
      let idadeOutput = document.getElementById("idade-output");
      idadeOutput.innerText = `Sua idade é de ${idadeValue} anos.`;
    }
  }
});
