let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(kgEngordado){
        console.log('Engordou!')
        this.peso += kgEngordado
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)