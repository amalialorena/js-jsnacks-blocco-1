// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//Creo un array con i nomi degli invitati
let list = ["Pinco", "Pallino", "Mario", "Rossi"]

//Creo un prompt che chiede il nome all'utente 

let userName = prompt("Come ti chiami?")

//Creo un ciclo che mi confronta il nome dell'utente con gli elementi dell'array

let invited = false;
for (let i = 0; i < list.length; i++) {
  if(userName === list[i]){
      invited = true;
      console.log(invited);
  } 
};

//Communico all'utente il risultato
if(invited === true) {
    console.log("Sei invitato alla festa")
}else{
    console.log("Non sei invitato alla festa")
}


