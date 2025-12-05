
let variabile = "valoreCheCambia"; //dichiarazione variabile mutabile
const Variabile = "VALORE_FISSO"; //dichiarazione variabile costante
console.log('Variabile');
console.log("Ciaooone");

let button = document.getElementById('off');

button.addEventListener('click',showMessages)

//#FUNZIONI UTILI
//Funzioni per mostrare i messaggi
function showMessages(){
if (button.id === "off") {button.id = "on";
    button.innerHTML =`<img src="b.png">`} 
else {button.id = "off"; button.innerHTML =`<i class="bi bi-star"></i>`}
}

