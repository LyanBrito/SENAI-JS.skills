const num = 7;
const message = num % 2 === 0 ? "par" : "impar";
console.log(message);

function validaFidelidade(clientFidelidade) {
  return clientFidelidade === true ? "desconto de 10%" : "desconto de 5%";
}

console.log(validaFidelidade(true));
