/*Instalar el módulo con el administrador de paquetes NPM con npm install express*/
 
/*Incluir la biblioteca para poder ser usada en el código*/
 var express = require('express');

/*Crear una app de Express*/
var app = express();

/*Generar un método ‘.get()’ que recibe como argumento la dirección que detonará su funcionamiento 
 y hacer un callback a una función que definirá dicho comportamiento*/
app.get('/', function (req, res) {
    res.send('Hola Mundo');//Callback
});

/*Crear la función que escuche las solicitudes del usuario*/
app.listen(8000, function () {
    console.log('El servidor esta corriendo en el puerto 8000');
});