const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = listaNumeros.filter(esImpar);
function esImpar(listaNumeros) {
    return listaNumeros % 2; //relamente no se que numero usar para los pares.
}
console.log(resultado)