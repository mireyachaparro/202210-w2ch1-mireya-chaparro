/* Airlines
(Los datos de los vuelos están al final del enunciado, podéis usarlos en vuestro código)

Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, 
cuando se llame a la función:

HECHO    Se preguntará por el nombre de usuario y dará la bienvenida.
HECHO    El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ 
y no realiza ninguna escala.
HECHO    A continuación, el usuario verá el coste medio de los vuelos.
HECHO    También podrá ver cuantos vuelos efectúan escalas.
HECHO    Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos. */

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
    console.log(`Hola ${name}, bienvenido.`);
};

const showFlights = () => {
    console.log("AQUI TIENES LOS VUELOS DISPONIBLES PARA HOY");
    console.log("---------------------");
    flights.forEach((flight)=>{
        if(flight.scale){
            console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y efectua escala`);
        }else{
            console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y NO efectua escala`);
        }})
    console.log("---------------------");
}

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
}

getName();
showFlights();
precioMedio();
escalas();
ultimosVuelos();