function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var palavraHora = 'hrs'
    
    msg.innerHTML = `Agora são ${hora} ${palavraHora}.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha2.png'
        document.body.style.background = '#b6d2a3'
    }
    else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde2.png'
        document.body.style.background = '#ff3e0e'
    }
    else {
        //boa noite
        img.src = 'fotonoite2.png'
        document.body.style.background = '#071817'
    }
}

