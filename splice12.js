const paises = ["Alemania", "Mexico", "Rusia"]
const quitarTercerPais = (element) => (paises.splice(element), console.log(paises))
console.log(quitarTercerPais(2))
