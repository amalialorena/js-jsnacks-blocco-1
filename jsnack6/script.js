// 6 - Genera un array di 50 numeri random. 
//Nell’array non devono esserci doppioni.
// DONE => 1. clicchiamo sul pulsante "Genera numero";
// DONE => 2. generiamo un numero random (compreso tra 1 e 90)
// DONE => 3. controllare se è stato già estratto
//     DONE => 3.1 scorriamo la lista dei numeri già estratti
//     DONE => 3.2 se non è stato estratto, lo stampiamo
// DONE => 4. se abbiamo estratto 6 numeri diversi
//     DONE => 4.1 disabilitiamo il pulsante "Genera numero"
const numbers = [];
let element = numbers[0];
 // 6 - Genera un array di 50 numeri random.
while (numbers.length < 10) {
    //genera un numero
    let num = Math.floor(Math.random() * 10);
    let found = false;
    
    // confronta il numero con l'indice dell'array
    if(element === num) {
        found = true;
    }

    if(!found) {
        numbers.push(num);  
    }
     // incrementa di 1 la variabile = numbers[primo elemento]
    element++
}
console.log(numbers);


  //Non funziona:
    // for( let i = 0; i < numbers.length; i++) {
    //     if(numbers[i] === num){
    //             found = true;
    // }

    // if (!found) {
    //     numbers.push(num);  
    // }