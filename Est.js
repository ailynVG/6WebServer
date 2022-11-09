/*Incluir la biblioteca para poder ser usada en el código*/
var express = require('express');

/*Crear una app de Express*/
var app = express();

/*Utilizar el módulo "path" para ser específico respecto a la ubicación del archivo en nuestro proyecto de Node.js*/
const path = require('path');

/*El método "get" responde a la solicitud del directorio raíz del servidor enviando el archivo "index.html".*/
app.get('/',function(req,res){
    /*"path.join" permite hacer referencia a diversos directorios en el equipo. Para hacer referencia a la carpeta del proyecto Node.js*/
    res.sendFile(path.join(__dirname+'/html/index.html'));//Se hace referencia a que el archivo se encuentra dentro de una carpeta en el directorio raíz del proyecto
});

/*Crear la función que escuche las solicitudes del usuario*/
app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });