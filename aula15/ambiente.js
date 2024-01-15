let num = [5,8,9,3, ] //let equivale ao var
//num[4] = 6
num.push(7) //acrescenta valor ao array na ultima posição que não foi preenchida
console.log(`Nosso vetor contém ${num}`)
console.log(num.length)
console.log(`O primeiro valor do vetor não ordenado é ${num[0]}`)

for(var i = 0; i < num.length; i++){
    console.log(`O valor presente no indice ${i} é ${num[i]}`)
}

console.log(num.sort()) //ordena em ordem crescente 