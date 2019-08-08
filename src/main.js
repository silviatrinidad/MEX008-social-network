// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';

myFunction();

//A
const startButton = document.getElementById('start-button');

//A-Comienzo haciendo una función (Sigue A)
const nodoOfPresentationMobile = () => {
//console.log('Funciona');

//Creando nodo del dom solo para presentación de vista mobile

//Identificar primer padre
let nodoPadre = document.getElementsByTagName('section')[0];

console.log(nodoPadre);

//Identificar hijo

let primerHijo = document.getElementsByTagName('div')[1];
console.log(primerHijo);

//Eliminar hijo antes de insertar nuevo
nodoPadre.removeChild(primerHijo);

//Imprimir nuevo nodo
//Paso 1: Crear elementos
let nuevoElemento = document.createElement('div');
//Paso 2: Crear tipo de nodo
let textoDelElemento = document.createTextNode('Prueba');

//Paso 4: Ligar padre con hijo
console.log(nuevoElemento.appendChild(textoDelElemento));
};

//Eventos que escuchan un click
//A
startButton.addEventListener('click', nodoOfPresentationMobile);