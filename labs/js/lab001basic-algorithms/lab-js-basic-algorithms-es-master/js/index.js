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


// Iteration 2: Conditionals
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


// Iteration 3: Loops


//3.1  Mayúscula+Espaciado
let driver = "Marcos";
let newName ="";


for (let indice = 0; indice < driver.length; indice++) {
    newName +=driver[indice].toUpperCase() + " ";
}console.log(newName);

//3.2 Reverse+Mayúscula+Espaciado   

let driverName = "Marcos"
let driverNameReversed =" "

for (let i = driverName.length -1; i >= 0; i--) {
    driverNameReversed +=driverName[i].toUpperCase() + " ";
}console.log(driverNameReversed);

//3.3  Orden  Lexicografico

//El nombre del conductor va primero

let driver1=""
let navi1="John"

if (driver1<navi1) {
    console.log("El nombre del  conductor va primero.");
    } else if (driver1 > navi1) {
        console.log("Yo, el navegador va priemro definitivamente.");
    } else  {
        console.log ("¿Qué? ¿Los dos tienen el mismo nombre?");
    }

    //Yo,  el  navegador va primero   definitivamente
    let driver2 = "John"
    let navi2 =""

    if (driver2   < navi2) {
        console.log("El nombre del conductor va primero.");
    }else  if (driver2  >navi2  )   {
        console.log("Yo,  el navegador va primero definitivamente.");
    }  else  {
        console.log("¿Qué?  ¿Los dos tiene el mismo  nombre?");}

        //¿Qué?¿Los dos  tienen el mismo nombre?
    
    let  driver3  ="John"
    let navi3="John"

    if (driver3<navi3) {
        console.log("El nombre del  conductor va primero.");
        } else if (driver3 > navi3) {
            console.log("Yo, el navegador va primero definitivamente.");
        } else (driver3 =  navi3); {
            console.log ("¿Qué? ¿Los dos tienen el mismo nombre?");
        }