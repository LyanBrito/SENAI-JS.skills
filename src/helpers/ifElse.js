function validaNota(nota) {
  if (nota >= 60) {
    return console.log("aprovado");
  } else {
    return console.log("reptobado");
  }
}
validaNota(60)
validaNota(30)

// const nota = 60;
// const message = nota >= 60 ? "aprovado" : "reprovado.";
// console.log(message);
//com ternario n aparece undefined, n sei da onde é isso mas aparece

function verificaNum(num) {
  if (num > 1) {
    return console.log("positivo");
  } else if (num === 0) {
    return console.log("zero");
  } else
    return console.log("negativo");

}

verificaNum(0)
verificaNum(2)
verificaNum(-2)