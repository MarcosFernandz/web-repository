console.log("Hello")
// Iteration 1: Names and Input
let hackerOne ="Diego";
let hackerTwo = "Marcos";

//oldchool 001
console.log("El nombre del conductor es" + hackerOne);
//using template literals``
console.log(`El nombre del conductor es ${hackerOne}`);

console.log(`El nombre del conductor es  ${hackerOne}`);
console.log(`El nombre del conductor es  ${hackerTwo}`);


console.log(hackerOne.length);
console.log(hackerTwo.length);

console.log("Que variable contiene el nombre mas largo?");

//hacker 1 mas largo

if (hackerOne.length > hackerTwo.length) {
    console.log(`El conductor "${hackerOne}" tiene el nombre mas largo, tiene ${hackerOne.length}caracteres`);
}

//hacker 2 mas largo
else if (hackerOne.length < hackerTwo.length){
    console.log(`Parece que el navegante "${hackerTwo}" tiene el  nombre  mas largo, tiene  ${hackerTwo.length} caracteres`)
}
//hacker1yhacker2 mismo  numero de letras
else {
    console.log(`¡Vaya,ambos tienen el nombre mas largo, tiene ${hackerOne.length} caracteres!`)
    
}


// Iteration 2: Conditionals


// Iteration 3: Loops
