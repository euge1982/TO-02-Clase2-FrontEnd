const boton = document.getElementById ('boton');
const footer = document.getElementById ('footer');
const imagen = document.getElementById ('imagen-giratoria');

/*Se agrega el evento click al boton SPINNER del html*/
boton.addEventListener ('click', ()=>{

    /*Escondo el boton y el footer*/
    boton.style.display = 'none';
    footer.style.display = 'none';

    /*Hago visible la imagen*/
    imagen.style.display = 'block';

    /*Cuando pasan los 10 segundos de la animacion, se vuelve a mostrar el boton,el footer y no se muestra la imagen*/
    setTimeout(() =>{
        boton.style.display = 'block';   
        footer.style.display = 'block';   
        imagen.style.display = 'none';
    }, 10000);
})