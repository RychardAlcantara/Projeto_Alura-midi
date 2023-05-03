function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) { //contador = contador + 1 é a mesma coisa que: contador++, e pode ser declarado no for.

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio)
  
    }
    tecla.onkeydown =  function (evento) {

        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }

       
        
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }

    //console.log(contador);

    
}