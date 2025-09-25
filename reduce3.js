const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
function sumaTotal() {
    const valorInicial = 0;
    const sumaValorInicial = numeros.reduce((contador, valorActual) => contador + valorActual, valorInicial);
    console.log(sumaValorInicial)
}
sumaTotal()
//en mdn hay un ejemplo de esto.