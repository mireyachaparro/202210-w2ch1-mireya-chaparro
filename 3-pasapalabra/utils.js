/*HECHO     Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar que palabra estamos tratando, por ejemplo:

'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!

HECHO Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. 
HECHO    Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. 
HECHO    El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.*/

//CONVERTIR A MAYUSCULAS

export let isPlaying = true;
export let i;
export const validWords = [
    'ala',
    'botella',
    'camisa',
    'decena',
    'electricista',
    'favorito',
    'garaje',
    'helicoptero',
    'imposible',
    'jarabe',
    'ketchup',
    'lenteja',
    'moneda',
    'nariz',
    'olfato',
    'pizza',
    'queso',
    'raton',
    'silencio',
    'tarta',
    'uva',
    'vela',
    'xilofono',
    'yema',
    'zarzamora',
];

export const preguntas = [
    'Con la A. Parte del cuerpo de algunos animales que les permite volar',
    'Con la B. Recipiente de cuello estrecho que contiene liquidos',
    'Con la C. Prenda de vestir suprerior',
    'Con la D. Conjunto de 10 unidades',
    'Con la E. Persona que arregla o pone la electricidad',
    'Con la F. Sinonimo de preferido',
    'Con la G. Local público o privado en el que se guardan vehículos.',
    'Con la H. Vehiculo que vuela movido por helices grandes que tiene arriba',
    'Con la I. Antonimo de posible',
    'Con la J. Medicina que tomamos cuando estamos enfermos',
    'Con la K. Salsa de color rojo que echamos a alagunas comidas',
    'Con la L. Legumbra pequeña y de color marron que es muy saludable',
    'Con la M. Pieza de metal, generalmente redonda y con un relieve en cada cara, a la que se le asigna un valor económico determinado y se emplea como medio legal de pago.',
    'Con la N. Parte saliente del rostro humano situada entre los ojos y la boca, con dos orificios en la parte inferior y que sirve para respirar y oler.',
    'Con la O. Sentido por el que se perciben los olores',
    'Con la P. de harina redonda y aplastada con queso, tomate y otros ingredientes',
    'Con la Q. Alimento sólido que se obtiene por maduración de la cuajada de la leche una vez eliminado el suero',
    'Con la R. Mamífero roedor de pequeño tamaño, pelo fino, cola larga, patas cortas, cabeza pequeña y orejas tiesas',
    'Con la S. Ausencia de ruido',
    'Con la T. Pastel redondo, dulce o salado, hecho con una masa en un molde de paredes bajas, que se cuece al horno y se rellena o cubre con diversos ingredientes que suelen mezclarse con huevos, leche o crema.',
    'Con la U. Fruto de la vid, comestible, pequeño y de forma redonda u ovalada, piel muy fina y carne muy jugosa; nace junto a otros formando racimos.',
    'Con la V. Pieza generalmente cilíndrica o prismática y de cera o parafina , con un pabilo en su eje y que se utiliza para alumbrar',
    'Con la X. Instrumento musical de percusión formado por una serie de láminas de madera dispuestas horizontalmente y ordenadas según su tamaño que, al ser golpeadas, emiten sonidos correspondientes a diferentes notas musicales; se toca con dos o cuatro macillas.',
    'Con la Y. Núcleo de los huevos de los vertebrados ovíparos; es esferoidal, de color amarillo y está rodeada por la clara.',
    'Con la Z. Fruto de la zarza, comestible, de forma redondeada, color verde al nacer y morado o negro cuando está maduro y de sabor dulce.',
];

export let respuestas = [];

export let correctas = 0;

export let rankingUser = [{ nombre: 'usuario1', acertadas: '2' }];

export const showRanking = () => {
    rankingUser.sort(function (nombre, acertadas) {
        if (nombre.acertadas < acertadas.acertadas) {
            return 1;
        }
        if (nombre.acertadas > acertadas.acertadas) {
            return -1;
        }
        return 0;
    });

    console.log('-------RANKING-------');
    rankingUser.forEach((user) =>
        console.log(`Nombre: ${user.nombre} Acertadas: ${user.acertadas}`)
    );
    console.log('---------------------');
};

export const empezarDeCero = () => {
    correctas = 0;
    respuestas = [];
};

export const getPlayerName = () => {
    const playerName = prompt('Ingresa tu nombre');
    if (!playerName) {
        return getPlayerName();
    }
    console.log(`Hola ${playerName}`);
    return playerName;
};

export const hacerPreguntas = () => {
    let respuesta = '';
    for (i = 0; i < preguntas.length; i++) {
        alert(`${preguntas[i]}`);
        respuesta = prompt('Respuesta');
        respuestas.push(respuesta.toLowerCase());
    }
};

export const checkIfCorrect = () => {
    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] == 'pasapalabra' || respuestas[i] == '') {
            alert(`${preguntas[i]}`);
            let respuesta = prompt('Respuesta');
            respuestas[i] = respuesta;
        }
        if (validWords[i] === respuestas[i]) {
            correctas = correctas + 1;
        }
    }
    console.log(
        `Has acertado ${correctas} palabras. Has fallado ${
            validWords.length - correctas
        }`
    );
    return correctas;
};

export const ranking = () => {
    const playerName = getPlayerName();
    const newUser = {};
    newUser.nombre = playerName;
    newUser.acertadas = correctas;
    rankingUser.push(newUser);
    showRanking();
};

export const pasapalabra = () => {
    do {
        if (confirm('¿Preparado?')) {
            getPlayerName();
            hacerPreguntas();
            checkIfCorrect();
            ranking();
            empezarDeCero();
        } else {
            isPlaying = false;
        }
    } while (isPlaying);
};

pasapalabra();
empezarDeCero();
