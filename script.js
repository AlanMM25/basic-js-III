console.log('Números')

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

function numbersRem (number1, number2){
    return `el residuo de ${number1} entre ${number2} es igual a ` + (number1 % number2)
}

console.log(numbersRem(22, 75))

function numbersSquRoot (number){
    return `la raíz cuadrada de ${number} es igual a ` + Math.sqrt(number)
}

console.log(numbersSquRoot(22))

function numbersInteger (number){
    return `El valor entero de ${number} es igual a ` + Math.round(number)
}

console.log(numbersInteger(31.6667))


function numbersMinToMax (min, max){
    return Math.random() * (max - min) + min
}

console.log(numbersMinToMax(2, 6))


console.log('LETRAS')

function concaTen(userString1, userString2){
    return userString1 + userString2
}

console.log('Hola, me llamo', 'Pepe')

function textLength(userString){
    return str.length
}

console.log('Hola, me llamo', 'Pepe')

