const paises = ["Alemania", "Mexico", "Rusia", "China", "Estados Unidos", "Dinamarca", "Republica Dominicana"]
const numeros = [1, 2, 3, 4, 5, 6, 7]
function concatenar() {
    const listaConcat = paises.concat(numeros);
    console.log(listaConcat)
}
concatenar()