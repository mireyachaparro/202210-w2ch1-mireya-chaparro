/*Haz una calculadora. Un unico programa al que le pasaras dos parametros y el usuario podra visualizar por consola la suma, resta, multiplicacion 
y division entre ambos numeros. 
El resultado deberia ser mostrado con 3 decimales como mucho (en caso de que hubieran). 
El programa debe gestionar y actuar correctamente (gestion de errores) en el caso de que el usuario introduzca cualquier cosa que no sean numeros.

Si el usuario introduce un solo numero, debera mostrar SOLO su raiz cuadrada, si vuelve a introducir los dos, volvera a mostrar las 4 operaciones de siempre.
Si el usuario introduce una letra, debera mostrarle un aviso de que lo que ha introducido no es un numero.
Los resultados deberian almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.*/


let numero1 = +prompt("Ingrese el primer numero");
let numero2 = +prompt("Ingrese el segundo numero");
let resultados = [];

const suma = () => {
    let sumaResultado = numero1+numero2;
    resultados.push(sumaResultado);
    console.log(`Suma: ${numero1}+${numero2}=${resultados[0]}`);
};

const resta = () => {
    let restaResultado = numero1-numero2;
    resultados.push(restaResultado);
    console.log(`Resta: ${numero1}-${numero2}=${resultados[1]}`);
};

const multiplicacion = () => {
    let multiplicacionResultado = numero1*numero2;
    resultados.push(multiplicacionResultado);
    console.log(`Multiplicacion: ${numero1}x${numero2}=${resultados[2]}`);
};

const division = () => {
    let divisionResultado = (numero1/numero2).toFixed(3);
    resultados.push(divisionResultado);
    console.log(`Division: ${numero1}/${numero2}=${resultados[3]}`);
};

const operaciones = () => {
    suma();
    resta();
    multiplicacion();
    division();
};

const raizcuadrada = () => {
    if(numero1===0){
        let raizResultado = (Math.sqrt(numero2)).toFixed(3);
        resultados.push(raizResultado);
        console.log(`La raiz cuadrada de ${numero2} es ${resultados[0]}`);
    }else if(numero2===0){
        let raizResultado = (Math.sqrt(numero1)).toFixed(3);
        resultados.push(raizResultado);
        console.log(`La raiz cuadrada de ${numero1} es ${resultados[0]}`);
    }
};

const checkIfNumber = () => {
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Algun dato no es un numero");
    }else if(numero1=="" && numero2==""){
        alert("No has introducido ningun numero");
    }else if(numero1=="" || numero2==""){
        raizcuadrada();
    }else{
        operaciones();
    };
};
checkIfNumber();
