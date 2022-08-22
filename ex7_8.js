let pesquisa = [  
    {nome: 'Thiago', idade: 8, resposta: '3'}, 
    {nome: 'João', idade: 8, resposta: '2'}, 
    {nome: 'Gabriel', idade: 8, resposta: '2' },
    {nome: 'Maria', idade: 8, resposta: '2' },
    {nome: 'Fulano', idade: 8, resposta: '2'},
    {nome: 'Siclano', idade: 8, resposta: '2'},
    {nome: 'Gustavo', idade: 8, resposta: '2'},
    {nome: 'Enzo', idade: 8, resposta: '1'},
    {nome: 'Fernando', idade: 8, resposta: '1'},
    {nome: 'Leticia', idade: 9, resposta: '1'},
    {nome: 'Helen', idade: 9, resposta: '1'},
    {nome: 'Bruno', idade: 9, resposta: '1'},
    {nome: 'Ronaldo', idade: 9, resposta: '1'},
    {nome: 'Edson', idade: 9, resposta: '1'},
    {nome: 'Rodrigo', idade: 9, resposta: '3'}, 
]

let mediaIdades = 0
let respostaRegular = 0
let respostaBom = 0
let porcentagemRespostaBom = 0
let somaIdades = 0
let i = 0

for (pessoa in pesquisa) {
    if (pesquisa[pessoa].resposta == '3') {
        i = i + 1
        somaIdades = somaIdades + pesquisa[pessoa].idade
        mediaIdades = somaIdades / i
    }

    if (pesquisa[pessoa].resposta == '1') {
        respostaRegular++
    }

    if (pesquisa[pessoa].resposta == '2') {
        respostaBom++
    }
}

porcentagemRespostaBom = (respostaBom * 100) / pesquisa.length

console.log(`A média das idades é ${mediaIdades}`)
console.log(`São ${respostaRegular} pessoa(s) com resposta (REGULAR)`)
console.log(`São ${porcentagemRespostaBom}% das pessoas com resposta (BOM)`)