var txtNumero = document.getElementById('txtNumero')
var selLog = document.getElementById('selLog')
var resultado = document.querySelector('div#res')
var arrayNumsAdds = []

selLog.innerHTML = ''

function addNumero() {
    if (txtNumero.value.length == 0) window.alert('[ERRO] Você precisa inserir um número!')
    else {
        var numeroAdicionado = Number(txtNumero.value)
        if (numeroAdicionado < 1 || numeroAdicionado > 100) window.alert('[ERRO] O número informado deve estar entre 1 e 100!')
        else {
            if (arrayNumsAdds.indexOf(numeroAdicionado) != -1) window.alert(`[ERRO] O número ${numeroAdicionado} já foi inserido!`)
            else {
                arrayNumsAdds.push(numeroAdicionado)
                let item = document.createElement('option')
                item.text = `Valor ${numeroAdicionado} adicionado.`
                selLog.appendChild(item)
                res.innerHTML = ''
            }
            txtNumero.value = ''
            txtNumero.focus()
        }
    }
}

function finalizar() {
    if (arrayNumsAdds.length == 0) window.alert('[ERRO] Adicione valores antes de finalizar!')
    else {
        
        let qtdeNumsCad = arrayNumsAdds.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${qtdeNumsCad} elementos.</p>`

        arrayNumsAdds.sort()
        let maiorNumCad = arrayNumsAdds[qtdeNumsCad-1]
        res.innerHTML += `<p>O maior número cadastrado é ${maiorNumCad}.`

        let menorNumCad = arrayNumsAdds[0]
        res.innerHTML += `<p>O menor número cadastrado é ${menorNumCad}.</p>`

        let soma = 0
        for (let pos in arrayNumsAdds) {
            soma += arrayNumsAdds[pos]
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        let media = soma / qtdeNumsCad
        res.innerHTML += `<p>A média dos valores digitados equivale à ${media}.</p>`
    }
}