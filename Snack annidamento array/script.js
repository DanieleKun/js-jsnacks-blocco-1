// #crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo, stampa dentro una UL dove ogni LI ha come
//  contenuto principale in ordine, le parole del primo array e come sotto-contenuto annidato le 2 parole del secondo array in una UL annidata, tipo:
// <ul>
//  	<li>parola1 arr1
// 		<ul>
//  			<li>parola1 arr2</li>
// 			<li>parola2 arr2</li>
// 		</ul>
// 	</li>
// 	<li>parola2 arr1
// 		<ul>
//  			<li>parola1 arr2</li>
// 			<li>parola2 arr2</li>
// 		</ul>
// 	</li>
// 	<li>parola3 arr1
// 	…etc

const myArray1 = ["Parola 1", "Parola 2", "Parola 3", "Parola 4", "Parola 5"];
const myArray2 = ["parola 1", "parola 2"];
const myList = document.querySelector(".list")
// console.log(myArray1, myArray2);

for (let i = 0; i < myArray1.length; i++) {
    myList.innerHTML += `<li>${myArray1[i]}</li>`;
    console.log(myList);
}
