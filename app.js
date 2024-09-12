let sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEurols = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

let fromDollarToYen = (dollarValue) => {
    let EuroValue = dollarValue / oneEurols.USD;
    return EuroValue * oneEurols.JPY
}

let fromEuroToDollar = (EuroValue) => {
    return EuroValue * oneEurols.USD;
}

let fromYenToPound = (yenValue) => {
    let yen = yenValue * oneEurols.JPY
    return yen * oneEurols.GBP 
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}
