let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numeroPrimo = 0
let somaNumerosPares = 0
let somaNumerosImpares = 0

for (numero in numeros) {
    if (numeros[numero] % 2 == 0) {
        somaNumerosPares = somaNumerosPares + numeros[numero]
    } else {
        somaNumerosImpares = somaNumerosImpares + numeros[numero]
    }
}

for (let i = 2; i <= numeros.length; i++) {
    let ehPrimo = true

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            ehPrimo = false
        }
    }
    if (ehPrimo) {
        numeroPrimo++
    }
}

console.log(`Soma dos números pares: ${somaNumerosPares}`)
console.log(`Soma dos números impares: ${somaNumerosImpares}`)
console.log(`Número de números primos: ${numeroPrimo}`)

