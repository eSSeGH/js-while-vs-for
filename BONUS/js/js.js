// Crea un array e popolalo con 40 carte (seme + numero)

const cardArray = []

for (i = 0; i < 10; i++) {

    cardArray.push("F" + [i + 1])
}

for (i = 0; i < 10; i++) {

    cardArray.push("P" + [i + 1])
}

for (i = 0; i < 10; i++) {

    cardArray.push("Q" + [i + 1])
}

for (i = 0; i < 10; i++) {

    cardArray.push("C" + [i + 1])
}

console.log(cardArray)

// MESCOLA GLI ELEMENTI DELL'ARRAY
// assegna ad ogni carta un numero (da 1 a 40).

let shuffledArray = []

for (i=0; i< 40; i++) {

    let card = cardArray[Math.floor(Math.random()*(cardArray.length - 1))]

    let x = cardArray.indexOf(card)
    console.log(card)

    cardArray.splice(card, 1)

    console.log("dopo lo splice", cardArray)

    shuffledArray.push(card)
    console.log("dopo il push", shuffledArray)
}

// consapevole che non c'è logica se si usa splice, diventa troppo facile. ci proverò, 
// senza, in un secondo momento



    // PROVE PRECEDENTI

// genera uun numero casuale da 1 a 40 per popolare un altro array 
// finchè non finiscono i numeri

// let cardIndex = 0

// const shuffledArray = []

// while (shuffledArray.length <= cardArray.length) {

//     cardIndex = Math.floor(Math.random() * (40 - 1) + 1)

//     console.log("il random è:", cardIndex)



  
// }

// const randomElement = array[Math.floor(Math.random() * array.length)];

// brutto tentativo

//   // la prima carta va sempre spostata nel shuffled
//   if (shuffledArray.length === 0) {
//     shuffledArray.push(cardArray[cardIndex - 1])
//     console.log("shuffledArray è:",shuffledArray)

//     // le successive carte vanno controllate: la carta se esiste già nel shuffledArray
//     // altrimenti va spostata nel shuffledArray
// } else {

//     for (i = 0; i <= shuffledArray.length; null) {
//         console.log("inizia il ciclo for di confronto carta")

//         if (cardIndex === shuffledArray[i]) {
//             console.log("la carta esiste già")

//             console.log("i è stato decrementato:", i)

//         } else {

//             console.log("la carta non c'è ancora")

//             shuffledArray.push(cardArray[cardIndex - 1])
//             console.log("shuffledArray è:",shuffledArray)
            
//             i++
//             console.log("i è:", i)
//         }
//     }
// }