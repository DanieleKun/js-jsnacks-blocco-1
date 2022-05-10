// /Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri (generati come prima), stampiamo nell’id rosso i numeri dispari e in verde i numeri pari;
//
const pari = document.getElementById("pari")
const dispari = document.getElementById("dispari")
const myArray = [];

for (let i = 0; i < 20; i++) {
    myArray.push(Math.floor(Math.random() * 1001));

    if (i % 2 === 0) {
        pari.innerHTML += `${myArray[i]}`;
    } else {
        dispari.innerHTML += `${myArray[i]}`;
    }
}

console.log(myArray);

