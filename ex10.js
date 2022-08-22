let pessoas = [  
    {nome: 'Thiago', idade: 8, peso: 3, sexo: 'M'}, 
    {nome: 'João', idade: 8, peso: 2, sexo: 'M'}, 
    {nome: 'Gabriel', idade: 8, peso: 2, sexo: 'M' },
    {nome: 'Maria', idade: 8, peso: 1 ,sexo: 'F'},
    {nome: 'Fulano', idade: 8, peso: 2 ,sexo: 'M'},
    {nome: 'Siclano', idade: 8, peso: 2 ,sexo: 'M'},
    {nome: 'Gustavo', idade: 8, peso: 2 ,sexo: 'M'},
    {nome: 'Enzo', idade: 8, peso: 1 ,sexo: 'M'},
    {nome: 'Fernando', idade: 8, peso: 1 ,sexo: 'M'},
    {nome: 'Leticia', idade: 9, peso: 2 ,sexo: 'F'},
]

let totalDeHomens = 0
let totalDeMulheres = 0
let mediaDeIdadesHomens = 0
let mediaPesoMulheres = 0
let somaIdadesHomens = 0
let somaPesoMulheres = 0

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].sexo == 'M') {
        totalDeHomens++
        somaIdadesHomens = somaIdadesHomens + pessoas[i].idade
        mediaDeIdadesHomens = somaIdadesHomens / totalDeHomens
    } else {
        totalDeMulheres++
        somaPesoMulheres = somaPesoMulheres + pessoas[i].peso
        mediaPesoMulheres = somaPesoMulheres / totalDeMulheres
        
    }
}

console.log(`A média de idades dos homens é ${mediaDeIdadesHomens}`)
console.log(`A média de peso das mulheres é ${mediaPesoMulheres}`)
console.log(`A quantidade de homens é ${totalDeHomens}`)
console.log(`A quantidade de mulheres é ${totalDeMulheres}`)