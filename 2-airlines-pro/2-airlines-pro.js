/* Airlines
(Los datos de los vuelos están al final del enunciado, podéis usarlos en vuestro código)

Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, 
cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ 
y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos. 

PRO
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:
Si eres ADMIN, la función debería permitir:
MEDIO HECHO (falta que sean menos de 15)    Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, 
            si se intenta introducir uno más, saltará un alert().
HECHO    Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:
HECHO    El usuario debe poder buscar por precio. Cuando el usuario ponga el precio, debera mostrar los vuelos que tengan ese precio o mas baratos.
*/

// This is a example of array of objects... each position of array contains one object...

//sin escala 6
//con escala 4

let flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let precios=[];
let sumaPrecios=0;

const getName = () => {
    const name = prompt("¿Cual es tu nombre?");
    if(name === ""){
        alert("No has ingresado ningun nombre.")
        getName();
    }else{
    console.log(`Hola ${name}, bienvenido.`);
    }
};

const showFlights = () => {
    console.log("AQUI TIENES LOS VUELOS DISPONIBLES PARA HOY");
    console.log("---------------------");
    flights.forEach((flight)=>{
        if(flight.scale){
            console.log(`Id: ${flight.id}. El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y efectua escala`);
        }else{
            console.log(`Id: ${flight.id}. El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y NO efectua escala`);
        }})
    console.log("---------------------");
};

const precioMedio = () => {
    for(i=0;i<flights.length;i++){
        sumaPrecios = sumaPrecios + flights[i].cost ;
    }
    console.log("El precio medio de los vuelos es "+(sumaPrecios)/i+"€");
    console.log("---------------------");
};

const escalas = () => {
    let conEscalas = flights.filter((flight) => flight.scale == true);
    console.log("LOS VUELOS QUE EFECTUAN ESCALAS SON:")
    console.log("---------------------");
    conEscalas.forEach((conEscala)=>console.log(`El vuelo con origen: ${conEscala.from}, y destino: ${conEscala.to} tiene un coste de ${conEscala.cost}€`));
    console.log("----------------")
};

const ultimosVuelos = () => {
    console.log("LOS ULTIMIOS 5 DESTINOS DE HOY SON:")
    flights.slice(-5).forEach((flight)=>console.log(`${flight.to}`));
};

const checkRole = () => {
    const role = prompt ("¿Eres ADMIN o USER?");
    if(role === ""){
        alert("No has ingresado ningun rol.")
        checkRole();
    } else if (role.toLowerCase() !=="user" && role.toLowerCase() !=="admin"){
        alert("El rol ingresado no es correcto.")
        checkRole();
    }else{
        return role.toLowerCase();
    }
};

const checkAdminAction = () => {
    const action = prompt ("¿Quieres CREAR o ELIMINAR?");
    if(action === ""){
        alert("No has ingresado ninguna accion.")
        checkAdminAction();
    } else if (action.toLowerCase() !=="crear" && action.toLowerCase() !=="eliminar"){
        alert("La accion ingresada no es correcta.")
        checkAdminAction();
    }else{
        return action.toLowerCase();
    }
};

const adminAction = () => {
    const action = checkAdminAction();
    if ( action === "crear"){
        const newFlight={}
        newFlight.to = prompt("Ingresa destino");
        newFlight.from = prompt("Ingresa partida");
        newFlight.cost = prompt("Ingresa precio");
        newFlight.scale = prompt("Ingresa SI si tiene escala, si no tiene escala dejar en blanco");
        newFlight.id = flights.length + 1;
        flights.push(newFlight);
        showFlights();
    }
  
    if(action==="eliminar"){
        showFlights();
        const idToDelete = +prompt("Ingresa el id para eliminar");
        flights = flights.filter((flight) => flight.id !== idToDelete);
        showFlights();
    }
};

const userAction = () => {
    const userPrecio = +prompt("Ingresa el precio maximo");
    flights = flights.filter((flight) => flight.cost <= userPrecio);
    showFlights();
};

const flightExercise = () => {
    getName();
    showFlights();
    precioMedio();
    escalas();
    ultimosVuelos();
    const role = checkRole();

    if(role === "user"){
      userAction();
    }
    if(role === "admin"){
      adminAction();
    }
};

flightExercise();