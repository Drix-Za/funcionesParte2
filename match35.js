const oracion = "Hola, hoy es jueves"
function matchVocal(element) {
    const vocalA = /a/g;
    const vocalE = /e/g;
    const vocalI = /i/g;
    const vocalO = /o/g;
    const vocalU = /u/g;
    console.log("Veces que aparece la vocal A: " + element.match(vocalA) + " ", "Veces que aparece la vocal E: " + element.match(vocalE) + " ", "Veces que aparece la vocal I: " + element.match(vocalI) + " ", "Veces que aparece la vocal O: " + element.match(vocalO) + " ", "Veces que aparece la vocal U: " + element.match(vocalU) + " ")
}
matchVocal(oracion)