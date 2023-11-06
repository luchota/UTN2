# UTN2 EJERCICIO 2 UTN ARGENTINA PROGRAMA 4.0

Ejercicio 1
El tercer parámetro recibido es una función que se va a ejecutar luego de la
suma de “a” y “b”, suelen utilizarse en programacion asincronica o para
operaciones largas como lectura de archivos o solicitudes a servidores,
tambien para eventos de usuario, promesas async/await o temporizacion, si
bien no son obligatorias, en ocasiones es esencial en aplicaciones para que el
codigo sea ejecutado de manera controlada y adecuada.
Ejemplo:
function miCallback() {
console.log("La suma se ha completado.");
}
function suma(a, b, callback) {
let c = a + b;
callback();
}
suma(3, 4, miCallback);
