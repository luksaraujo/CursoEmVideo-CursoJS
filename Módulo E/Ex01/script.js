function contar(){

    var txtInicio = document.getElementById('txtInicio')
    var txtFim = document.getElementById('txtFim')
    var txtPasso = document.getElementById('txtPasso')

    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) window.alert('[ERRO] Certifique-se de preencher os valores de início, fim e passo!')
    else {
        if (Number(txtInicio.value) > Number(txtFim.value)) window.alert('[ERRO] O valor de início não pode ser maior do que o valor de fim!')
        else {
            if (Number(txtPasso.value) <= 0) window.alert('[ERRO] O valor do passo tem que ser maior do que 0!')
            else {
                var res = document.getElementById('res')
                res.innerHTML = 'Contando: <br>'                
                for (var c = Number(txtInicio.value); c <= Number(txtFim.value); c += Number(txtPasso.value)) {
                    
                    res.innerHTML += ` ${c} \u{27A1}`

                }
                res.innerHTML += ` \u{1F3C1}`
            }
        }
    }
}