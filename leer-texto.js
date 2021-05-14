const texto = document.querySelector('.texto');
const boton_leer = document.querySelector('.btn_leer');

//METODO PARA LEER EL TEXTO
boton_leer.addEventListener('click', ()=>{
    //creando el objeto que leerá el texto con la clase Speech
    const locutor = new SpeechSynthesisUtterance();
    //clase que se encarga de hablar
    const voz = window.speechSynthesis;
    locutor.text = texto.value;
    voz.speak(locutor);
});
