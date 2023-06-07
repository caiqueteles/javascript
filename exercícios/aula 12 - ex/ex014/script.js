function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var data = new Date()
    //var hora = data.getHours()

    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#C7873D'
    } else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#588BC4'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#473B61'
    }
}
