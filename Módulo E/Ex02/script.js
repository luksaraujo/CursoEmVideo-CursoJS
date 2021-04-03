function tabuada(){
    let num = document.getElementById('txtNum')
    let tab = document.getElementById('selTab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Você deve digitar um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //Atributo mais utilizado pela linguagem PHP
            tab.appendChild(item)
        }
    }
}