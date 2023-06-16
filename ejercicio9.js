let frase = prompt("Escriba su frase aquí");
let fraseMinus = frase.toLowerCase();
console.log

let contador = 0


for (let i = 0; i < fraseMinus.length; i++){
    if (fraseMinus[i] === "a") {
        contador = contador + 1}
    }

console.log("En la frase hay",contador , "a")