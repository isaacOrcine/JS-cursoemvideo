let num =[0,9,8,7,6]

for(let posicao in num){ //para cada posição em num faça... (obs.: esse for simplificado só é válido para array e objetos)
    console.log(`O conteudo do indice ${posicao} é ${num[posicao]}`)
}

console.log(`Buscando o valor 9 encontrei dentro do vetor na posição ${num.indexOf(9)}`)
//indexof() busca pelo valor passado por parametro e retorna sua posição 
//se retorna -1 não foi encontrado no vetor 