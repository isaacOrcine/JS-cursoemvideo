let amigo = {nome: 'João', 
sexo: 'M', 
peso: 85.4,
engordar(p=0){
    console.log(`Mas ${amigo.nome} engordou ${p} Kg`)
    this.peso += p
}
}

//console.log(typeof amigo) // mostra o tipo
//console.log(amigo)
console.log(`${amigo.nome} pesava ${amigo.peso} Kg`)
amigo.engordar(5)
console.log(`Agora o ${amigo.nome} pesa ${amigo.peso}`)