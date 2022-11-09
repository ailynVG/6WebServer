/*Incluir la biblioteca para poder ser usada en el código*/
var express = require('express');

/*Crear una app de Express*/
var app = express();

/*Utilizar el módulo "path" para ser específico respecto a la ubicación del archivo en nuestro proyecto de Node.js*/
const path = require('path');

/*Decodificar la información enviada en formato Json*/
app.use(express.json());//Reconoce el objeto de solicitud entrante como un objeto JSON
app.use(express.urlencoded());//Reconoce el objeto de solicitud entrante como cadenas o matrices

/*El método "get" responde a la solicitud del directorio raíz del servidor enviando el archivo "index.html".*/
app.get('/',function(req,res){
    /*"path.join" permite hacer referencia a diversos directorios en el equipo. Para hacer referencia a la carpeta del proyecto Node.js*/
    res.sendFile(path.join(__dirname+'/html/index2.html'));//Se hace referencia a que el archivo se encuentra dentro de una carpeta en el directorio raíz del proyecto
});;

/*El método ‘post’ recibe como primer argumento el nombre que detonará el comportamiento que se ejecutará al 
recibir la información enviada y como segundo argumento hace un callback a la función que contiene dicho comportamiento*/
app.post('/respuesta', function (req, res) { //El comportamiento del método se ejecutará cuando se reciba la solicitud "/respuesta"
    res.send("Nombre ingresado: "+req.body.nombre);//Callback a la función que contiene el comportamiento, en
    console.log("Información enviada");//Imprimir en consola el texto.
});

/*Crear la función que escuche las solicitudes del usuario*/
app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });