function darCerto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Deu bom!");
    }, 2000);
  });
}

function darErrado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Deu bom não '-'");
    }, 2000);
  });
}

function finalDaPromise() {
  alert("Acabou a promise");
}

console.log(darCerto());
console.log(darErrado());

darCerto()
  .then((data) => console.log(data))
  .finally(finalDaPromise);
darErrado()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(finalDaPromise);
