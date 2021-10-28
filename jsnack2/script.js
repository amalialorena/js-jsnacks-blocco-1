// 2- L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

//creo il primo prompt
    //salvo il suo valore in una variabile

let firstWord = prompt("inserisci una parola");

// creo il secondo prompt
    //salvo il suo valore in una variabile

let secondWord = prompt("inserisci un'altra parola");

// verifico quale è la parola più corta  -> .length
    //stampo nella console prima la parola più corta, poi l'altra

if(firstWord.length < secondWord.length) {
    console.log(firstWord);
    console.log(secondWord)
} else {
    console.log(secondWord);
    console.log(firstWord);
}    