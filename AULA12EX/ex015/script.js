function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = 'Homem'
        if (idade >=0  && idade < 10) {
            // Criança
           }   else if (idade < 21) {
                // Jovem
            } else if (idade <50) {
                // Adulto
            }else {
                //idoso
            }
        
    } else if (fsex[1].checked) {
        genero ='Mulher'
        if (idade >=0  && idade < 10) {
            // Criança
           }   else if (idade < 21) {
                // Jovem
            } else if (idade <50) {
                // Adulto
            }else {
                //idoso
            }
    }
}