let alunos = [  
                {nome: 'Thiago', nota: [10,10,10]}, 
                {nome: 'João', nota: [9.9,10,7]}, 
                {nome: 'Maria', nota: [9.9,10,4]}   
            ]

for (let i = 0; i < alunos.length; i++) {
    somaNotas = 0;
    for(let j = 0; j < alunos[i].nota.length; j++) {
        somaNotas = alunos[i].nota[j] + somaNotas
    }

    let media = somaNotas / alunos[i].nota.length
    alert(`${alunos[i].nome} tem média ${media}`)
}
