const listaNumeros = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
const esNegativo = (element) => element < 0;
console.log(listaNumeros.some(esNegativo));