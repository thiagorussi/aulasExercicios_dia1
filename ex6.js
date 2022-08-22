let alunos = [  
    {nome: 'Thiago', altura: 1.30}, 
    {nome: 'João', altura: 1.99}, 
    {nome: 'Gabriel', altura: 1.81},
    {nome: 'Fulano', altura: 1.50},
    {nome: 'Siclano', altura: 1.55},
    {nome: 'Gustavo', altura: 1.55},
    {nome: 'Enzo', altura: 1.75},
    {nome: 'Fernando', altura: 1.90},
    {nome: 'Leticia', altura: 1.90},
    {nome: 'Helen', altura: 1.72},
    {nome: 'Bruno', altura: 1.72},
    {nome: 'Ronaldo', altura: 1.60},
    {nome: 'Edson', altura: 1.60},
    {nome: 'Rodrigo', altura: 1.60},
    {nome: 'Maria', altura: 1.81},   
]

let somaAlturas = 0
let mediaAltura = 0
let maiorAltura = alunos[0].altura
let menorAltura = alunos[0].altura
let alturaOitentaUm = 0

for (aluno in alunos) {
    
    if (alunos[aluno].altura > maiorAltura) {
        maiorAltura = alunos[aluno].altura
    } 
    
    if (alunos[aluno].altura < menorAltura) {
        menorAltura = alunos[aluno].altura
    }

    if (alunos[aluno].altura == 1.81) {
        alturaOitentaUm++
    }

    somaAlturas = somaAlturas + alunos[aluno].altura
}

mediaAltura = somaAlturas / alunos.length

console.log(`A média das alturas é ${mediaAltura}`)
console.log(`A maior altura é ${maiorAltura}`)
console.log(`São ${alturaOitentaUm} pessoa(s) com altura 1.81`)