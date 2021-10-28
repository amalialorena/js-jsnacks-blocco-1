//5 - Crea un array vuoto.

let numbers = [];

for (let i = 0; i < 6; i++) {
    // Chiedi per 6 volte all’utente di inserire un numero,
    let num = parseInt(prompt("inserisci un numero"));
    // se è dispari inseriscilo nell’array. 
        if (num % 2 !== 0) {
            numbers.push(num);
        } 
}
console.log(numbers);
