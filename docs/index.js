const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === "ac") {
            pantalla.textContent = "0";
            return;
        } else if (boton.id === "de") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else{
                pantalla.textContent = pantalla.textContent.slice(0 , -1);
            }
            return;
        } else if (boton.id === "igual") {
            pantalla.textContent = eval(pantalla.textContent);
            return;
        } else if (pantalla.textContent === "0") {
            pantalla.textContent = botonApretado;
        } else if (pantalla === '+' || pantalla === '*' || pantalla === '/' || pantalla === '-') {
            if (boton.id !== 'op'){
                pantalla.textContent += botonApretado;
            }else{
                pantalla.textContent = pantalla.textContent;
            }
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})
