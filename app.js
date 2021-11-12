const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    let parseValue = Math.floor(valueInYen * 100) / 100;
    return parseValue;
}
const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    let parseValue = Math.floor(valueInPound * 100) / 100;
    return parseValue;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }




