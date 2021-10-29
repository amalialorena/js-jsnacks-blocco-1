// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Creo un prompt che chiede all’utente di inserire un numero.
// let numbers = parseInt(prompt("Inserisci un numero"));

// Lo ricreo 10 volte con un ciclo     
    //salvo i numeri dentro a un array 

    // Ci sono quasi
let numbersArray = []
while (numbersArray.length < 3) {
    let numbers = parseInt(prompt("Inserisci un numero"));
    numbersArray.push(numbers);
}
console.log(numbersArray)

    //faccio un ciclo che mi somma tutti i numeri

let number = numbersArray [0];
let sum = 0;
console.log("number è: " ,number)
for (let i = 0; i < numbersArray.length; i++) {
    sum = number + numbersArray [i];
}

console.log("la somma è:" ,sum);