function verificar(){
    var date = new Date()
    var ano = date.getFullYear() //ano atual
    var fano = document.getElementById('txtano') //formulario ano
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('verifique o ano e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'masculino'
            if(idade >= 0 && idade <12){
                //criança
                //img.setAttribute('src', 'img/caminhoDaImagem.png')
            }else if(idade < 21){
                //jovem
            }else if(idade < 60){
                //adulto
            }else{
                //idoso
            }

        }else if(fsex[1]){
            genero = 'feminino'
            if(idade >= 0 && idade <12){
                //criança
            }else if(idade < 21){
                //jovem
            }else if(idade < 60){
                //adulto
            }else{
                //idoso
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}