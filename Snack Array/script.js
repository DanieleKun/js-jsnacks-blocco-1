// 1#crea un array che parte vuoto ma viene riempito automaticamente  di 10 numeri casuali da 1 a 1000 generati dal pc, possono esserci anche doppioni;

const myArray = [];

for (let i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 1001));
}

console.log(myArray);

