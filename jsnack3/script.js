// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Creo un prompt che chiede all’utente di inserire un numero.
// Lo ricreo 10 volte con un ciclo     
    //salvo i numeri dentro a un array 

let numbersArray = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
    let numbers = parseInt(prompt("Inserisci un numero"));
    numbersArray.push(numbers);
    sum += numbersArray[i];
}
console.log("il mio array:", numbersArray)

// oppure:

// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     let numbers = parseInt(prompt("Inserisci un numero"));
//     sum += numbers;
// }


console.log("la somma è:" ,sum);