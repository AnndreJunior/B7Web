let nome = "André Pinto";

// Exibe a quantidade de caracteres
console.log(nome.length);

// Exibe o texto em caixa baixa
console.log(nome.toLowerCase());

// Exibe o texto em caixa alta
console.log(nome.toUpperCase());

nome = " André Pinto   ";

// Exibe o nome sem os espaços nas bordas
console.log(nome.trim());

/**
 * Sanitiza o email informado, retornado ele sem espaços no começo e final da string e em caixa baixa
 * @param {string} email
 * @returns string - email sanitizado
 */
function limparEmail(email) {
  let emailLimpo = email.trim().toLocaleLowerCase();
  return emailLimpo;
}

console.log(`Email limpo: ${limparEmail("       USER@EMAIL.COM     ")}`);
