/* Interação pagina inicial Boas vindas*/

const elemento = document.getElementById("texto");
const texto = "Sejam Bem-Vindos.";
let i = 0;

function digitar() {
    if (i < texto.length){
        elemento.textContent += texto.charAt(i)
        i++;
        setTimeout(digitar, 100);
    }
}

digitar();
