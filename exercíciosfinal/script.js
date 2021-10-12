let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
} 
/*
function inLista(n, 1){
    if ( l.indexOf(Number(n) = -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = valor ${num.value} adicionado.
        lista.appendChild(item)

        
    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }
    num.value = ''
num.focus()
}
function finalizar(){
    if(valores.lenght == 0){
        window.alert ('adicione valores antes de finalizar!'){

        } else {
            ler tot = valores.length
            res.innerHTML =''
            res.innerHTML += `<p> Ao todo, temos ${tot} nÚMEROS CADASTRADOS.</P>`
        }
    }
}

*/