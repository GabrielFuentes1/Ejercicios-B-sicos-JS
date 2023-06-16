let lista =[]

let num1 = prompt("Inserte primer numero");
lista.push(num1)
let num2 = prompt("Inserte segundo numero");
lista.push(num2)
let num3 = prompt("Inserte tercer numero");
lista.push(num3)

let maxi = Math.max(...lista);

console.log("El mayor de los tres números es ",  maxi);