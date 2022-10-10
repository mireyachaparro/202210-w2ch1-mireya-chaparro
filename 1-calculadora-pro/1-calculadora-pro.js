/*Haz una calculadora. Un unico programa al que le pasaras dos parametros y el usuario podra visualizar por consola la suma, resta, multiplicacion 
y division entre ambos numeros. 
El resultado deberia ser mostrado con 3 decimales como mucho (en caso de que hubieran). 
El programa debe gestionar y actuar correctamente (gestion de errores) en el caso de que el usuario introduzca cualquier cosa que no sean numeros.

Si el usuario introduce un solo numero, debera mostrar SOLO su raiz cuadrada, si vuelve a introducir los dos, volvera a mostrar las 4 operaciones de siempre.
Si el usuario introduce una letra, debera mostrarle un aviso de que lo que ha introducido no es un numero.
Los resultados deberian almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

PRO
HECHO Podrías hacer que la calculadora realice operaciones sean cuales sean el número de argumentos pasados a la función?

HECHO Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más 
resultados y mostrándolos.
*/

let numeros = [];
let sumaResultado = 0;
let restaResultado;
let multiplicacionResultado = 1;
let divisionResultado;
let raizResultado;

const getNumber = () => {
    const newNumber = prompt(`Introduce un numero`);
    if(!newNumber){
        return getNumber();
    };
    numeros.push(parseInt(newNumber))    
};

const newTurn = () => confirm("¿Quieres introducir mas numeros?");

const suma = () => {
    for(i=0;i<numeros.length;i++){
        sumaResultado = sumaResultado + numeros[i];
    }
    console.log("La suma es " + sumaResultado);
}

const resta = () => {
    restaResultado = numeros[0];
    for(i=1;i<numeros.length;i++){
        restaResultado = restaResultado - parseInt(numeros[i]);
    }
    console.log("La resta es "+ restaResultado);
}

const multiplicacion = () => {
    for(i=0;i<numeros.length;i++){
        multiplicacionResultado = multiplicacionResultado * numeros[i];
    }
    console.log("La multiplicacion es "+ multiplicacionResultado);
}

const division = () => {
    divisionResultado = numeros[0];
    for(i=1;i<numeros.length;i++){
        divisionResultado = divisionResultado / parseInt(numeros[i]);
    }
    console.log("La division es "+ divisionResultado)
}

const operaciones = () => {
    const newNumber=getNumber()
    if(!newTurn()){
        raizResultado = (Math.sqrt(numeros[0])).toFixed(3);
        console.log("La raiz cuadrada de "+ numeros[0] + " es "+ raizResultado);
    }else{
        do{
            const newNumber=getNumber()
        }while (newTurn());
        alert("Los numeros ingresados son "+ numeros.join(", "));
        suma();
        resta();
        multiplicacion();
        division();
}
};

operaciones();

let pregunta;

const nuevaOperacion = () => {
    pregunta = prompt("¿Quieres ihacer otra operacion? (y/n)");
}

const calculadora = () => {
    nuevaOperacion();
    if(pregunta == "y"){
        numeros = [];
        sumaResultado = 0;
        restaResultado = 0;
        multiplicacionResultado = 1;
        divisionResultado;
        console.log("---------------------------")
        operaciones();
        calculadora();
    }else if(pregunta == "n"){
        console.log("Has terminado.")
        //nuevaOperacion();
    }else{
        console.log("Introduce una respuesta correcta.");
        nuevaOperacion();
    }
}

calculadora();