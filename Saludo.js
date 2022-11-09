/*Incluir la biblioteca para poder ser usada en el código*/
var express = require('express');

/*Crear una app de Express*/
var app = express();

/*Se crea un método de tipo "get" para obtener una solicitud y recibir como argumento la solicitud que detona 
el comportamiento de la función a la cual hace un callback*/
app.get('/mundo', function (req, res) {
   res.send('Hola Mundo');
});

app.get('/saludo', function (req, res) {
   res.send('Solicitud de saludo recibida');
});

/*Crear la función que escuche las solicitudes del usuario*/
app.listen(8000, function () {
  console.log('Servidor corriendo en el puerto 8000');
});