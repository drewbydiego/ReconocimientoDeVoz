const boton_grabar = document.querySelector('.btn_grabar');
const contenido = document.querySelector('.contenido');
const body = document.querySelector('.body');
const texto = document.querySelector('.texto');
const boton_leer = document.querySelector('.btn_leer');
//CREANDO EL RECONOCIMIENTO DE VOZ
const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition;
const reconocimiento = new reconocimientoVoz();

reconocimiento.onstart = ()=>{
    contenido.innerHTML = 'Estamos grabando la voz...';
}
reconocimiento.onresult = (e)=>{
    //console.log(e.results[0][0].transcript);
    let mensaje = e.results[0][0].transcript;
    //leerDictado(mensaje);
    leerCondicion(mensaje);
    contenido.innerHTML = '...';
}

//FUNCION PARA LEER LO QUE ACABAMOS DE GRABAR
const leerDictado = (mensaje)=>{
    const voz = new SpeechSynthesisUtterance();
    voz.text = mensaje;
    window.speechSynthesis.speak(voz);
}

boton_grabar.addEventListener('click',()=>{
    reconocimiento.start();
})
boton_leer.addEventListener('click', ()=>{
    //creando el objeto que leerá el texto con la clase Speech
    const locutor = new SpeechSynthesisUtterance();
    //clase que se encarga de hablar
    const voz = window.speechSynthesis;
    locutor.text = texto.value;
    voz.speak(locutor);
});

//FUNCION PARA CONDICIONAR LA RESPUESTA DE LO QUE HEMOS GRABADO
    //sin detectamos una palabra especifica la frase cambiará por lo que le indiquemos
const leerCondicion = (mensaje)=>{
    const voz = new SpeechSynthesisUtterance();
    if(mensaje.includes('canal')){
        voz.text = 'no me parece tan bueno';
        //si el
    }else if(mensaje.includes('oscuro')){
        body.classList.add('oscuro');
    }else{
        voz.text = mensaje
    }
    window.speechSynthesis.speak(voz);
}
/*
let rec;
if(!("webkitSpeechRecognition" in window)){
    alert('No puedes usar la api');
}else{
    rec = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result",iniciar);
}
function iniciar(event) {
    for(i =event.resultIndex;i <event.results.length; i++){
        document.getElementById('.contenido').innerHTML =
        console.log(event.results[i][0].transcript);
    }
}
rec.start();*/
