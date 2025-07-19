function numbersSum (number1, number2){
    return `la suma de ${number1} + ${number2} es igual a ` + (number1 + number2)
}

console.log(numbersSum(1, 3))

function numbersRes (number1, number2){
    return `la resta de ${number1} - ${number2} es igual a ` + (number1 - number2)
}

console.log(numbersRes(7, 4))

function numbersMult (number1, number2){
    return `el producto de ${number1} x ${number2} es igual a ` + (number1 * number2)
}

console.log(numbersMult(28, 128))

function numbersDiv (number1, number2){
    return `la división de ${number1} entre ${number2} es igual a ` + (number1 / number2)
}

console.log(numbersDiv(3, 3))

function numbersPot (number1, number2){
    return `la potencia de ${number1} elevado a ${number2} es igual a ` + (Math.pow(number1, number2))
}

console.log(numbersPot(3, 3))