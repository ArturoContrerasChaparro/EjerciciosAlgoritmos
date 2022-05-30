let a =parseFloat(prompt("introduce primer número del 1 al 100"));
let b =parseFloat(prompt("introduce segundo número del 1 al 100"));
let c =parseFloat(prompt("introduce tercer número del 1 al 100"));
//Identificar número mayor 
if ((a>b) && (a>c)) {
    console.log("El número mayor es", a);
}   else if ((b>a) && (b>c)) {
    console.log("el número mayor es", b);
}   else if ((c>a) && (c>b)) {
    console.log("El número mayor es", c);
}   else console.log("Todos los numeros son repetidos");
//Identificar número menor
if ((a<b) && (a<c)) {
    console.log("El número menor es", a);
}   else if ((b<a) && (b<c)) {
    console.log("el número menor es", b);
}   else if ((c<a) && (c<b)) {
    console.log("El número menor es", c);
}      
//Identificar si son números iguales
if  ((a==b+c) || (a==c+b)) {
    console.log("EL PRIMER NÚMERO ES IGUAL A LA SUMA DE LOS OTROS 2 NÚMEROS ", a);
}   else if ((b==a+c) || (b==c+a)) {
    console.log("EL SEGUNDO NÚMERO ES IGUAL A LA SUMA DE LOS OTROS 2 NÚMEROS", b);
}   else if ((c==a+b) || (c==b+a)) {
    console.log("EL TERCER NÚMERO ES IGUAL A LA SUMA DE LOS OTROS 2 NÚMEROS", c);
}   else console.log("No hay números iguales o todos son iguales");   

//Identificar si son números pares o impares
let x = prompt("Introduce un número aleatorio para saber si es par o impar")
let y = x/2
if (y % 1 == 0) {
    console.log("Es un número par");
}    else  console.log("Es un número impar")
    
//Identificar si el número es múltiplo de 3
let d = prompt("Introduce un número entero entre el 100 y el 200 para saber si es múltiplo de 3")
let e =d/3;
if (e % 1 == 0) {
    console.log("Es un numero múltiplo de 3");
}    else  console.log("No es un número múltiplo de 3")

function Adivinar() {
    let superior = 100;
    let inferior = 0;
    let noEncontrado =true;
       while(noEncontrado){
        let mid = parseInt(inferior + ((superior-inferior)/ 2));
        console.log(mid);
         if (((superior-inferior)/ 2)<1){
            noEncontrado=false;
            alert("tu numero es el " +(parseInt(mid)+1));
                break;
           }//if
                 let res = confirm("Tu numero es menor o igual a " + mid)
         if (res) {
          superior=mid;
            }else {
               inferior=mid;
                }//if
                console.log(inferior, superior);
            
            }//while
            
            
            }//function
            Adivinar();