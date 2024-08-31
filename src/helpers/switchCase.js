function validaMes(mes) {
  switch (mes) {
    case 1:
      return "JA";
    case 2:
      return "F";
    case 3:
      return "MC";
    case 4:
      return "A";
    case 5:
      return "MO";
    case 6:
      return "JN";
    case 7:
      return "JL";
    case 8:
      return "A";
    case 9:
      return "S";
    case 10:
      return "O";
    case 11:
      return "N";
    case 12:
      return "D";
    default:
      return "não corresponde aos 12 meses do ano";
  }
}
console.log(validaMes(11));


function validaNivel(nivel){
  switch(nivel){
    case "iniciante": return "novato";
    case "intermediário": return "inter";
    case "anavçado": return "experiente";
  }
}
console.log(validaNivel("avançado"))