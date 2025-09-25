const numeros = [11, 12, 13] //un solo numero menor a 10 para false
const mayorQueDiez = (valorActual) => valorActual > 10;
console.log(numeros.every(mayorQueDiez))