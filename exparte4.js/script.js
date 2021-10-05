function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0 ) {
        window.alert('[erro] Faltam dados!')
    } else {
        res.innerHTML = 'contando'
        let i = Namber(ini.value)
        let f = Namber(fim.value)
        let p = Namber(passo.value)

        for(let c = i; c <= f; c <= p) {
            res.innerHTML += `$(c) \ u(1f449)` 
        }
        res.innerHTML += `\ u(1f3c1)`
    }
}