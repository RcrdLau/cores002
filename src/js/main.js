let ciano = false

let magenta = false

let amarela = false

let preto = false

let todasCores = false

const colocaCor = (cor) => {
    $('.vazio-'+cor)
        .removeClass('vazio')
        .addClass(cor)
}

const removeCor = (cor) => {
    $('.vazio-'+cor)
        .removeClass(cor)
        .addClass('vazio')
}

const colocaDetalhe = (cor) => {
    $('.box-'+cor)
        .addClass('detalhe')
}
const removeDetalhe = (cor) => {
    $('.box-'+cor)
        .removeClass('detalhe')
}

const verificaCiano = () => {
    // Inverte o valor do false / true
    ciano = !ciano
    
    if(ciano) {    
        colocaCor('ciano')
        colocaDetalhe('ciano')
    } else {
        removeCor('ciano')
        removeDetalhe('ciano')
    }

    verificaVerde()
    verificaAzul()
    verificaPreto()
}

const verificaMagenta = () => {
    // Inverte o valor do false / true
    magenta = !magenta
    
    if(magenta) {    
        colocaCor('magenta')
        colocaDetalhe('magenta')
    } else {
        removeCor('magenta')
        removeDetalhe('magenta')
    }

    verificaVermelho()
    verificaAzul()
    verificaPreto()
}

const verificaAmarela = () => {
    // Inverte o valor do false / true
    amarela = !amarela
    
    if(amarela) {    
        colocaCor('amarela')
        colocaDetalhe('amarela')
    } else {
        removeCor('amarela')
        removeDetalhe('amarela')
    }

    verificaVerde()
    verificaVermelho()
    verificaPreto()
}

const clicaPreto = () => {
    preto = !preto
    
    if(preto) {    
        colocaCor('preto')
        colocaDetalhe('preto')
    } else {
        removeCor('preto')
        removeDetalhe('preto')
    }
    
    verificaPreto()
}

const verificaAzul = () => {
    if(ciano && magenta) {
        // $('.vazio-azul')
        //     .removeClass('vazio')
        //     .addClass('azul')
        colocaCor('azul')
    } else {
        // $('.vazio-azul')
        //     .removeClass('azul')
        //     .addClass('vazio')
        removeCor('azul')
    }
}

const verificaVerde = () => {
    if(ciano && amarela) {
        // $('.vazio-verde')
        //     .removeClass('vazio')
        //     .addClass('verde')
        colocaCor('verde')
    } else {
        // $('.vazio-verde')
        //     .removeClass('verde')
        //     .addClass('vazio')
        removeCor('verde')
    }
}

const verificaVermelho = () => {
    if(magenta && amarela) {
        // $('.vazio-vermelho')
        //     .removeClass('vazio')
        //     .addClass('vermelho')
        colocaCor('vermelho')
    } else {
        // $('.vazio-vermelho')
        //     .removeClass('vermelho')
        //     .addClass('vazio')
        removeCor('vermelho')
    }
}

const verificaPreto = () => {
    // && = E
    todasCores = ciano && magenta && amarela
console.log('teste: ', todasCores)
    // || = OU
    if(todasCores || preto) {
        preto = true
        colocaCor('preto')
        colocaDetalhe('preto')
    } else {
        removeCor('preto')
        removeDetalhe('preto')
    }
}

const iniciar = () => {
    $('.ciano').click(verificaCiano)

    $('.magenta').click(verificaMagenta)

    $('.amarela').click(verificaAmarela)

    $('.preto').click(clicaPreto)


}

$(document).ready(iniciar)