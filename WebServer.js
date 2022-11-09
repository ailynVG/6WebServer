/*cargar el módulo "http" para la creación de un servidor*/
const http = require("http");

/*Crear dos constantes: una que contenga el host, es decir, la dirección IP del servidor que se creará, 
y otra con el puerto al cuál se conectará*/

//Como se puede notar, la variable "host" no contiene una dirección IP sino que contiene el texto "localhost". 
//Esta es una dirección privada que las computadoras usan para referirse a ellas mismas y sólo está disponible para usarse en la red local
const host = 'localhost'; //192.168.1.81(PC Mitzi)

//El puerto hace referencia a un número que los servidores usan como entrada a la dirección IP, en este caso se utiliza el puerto 8000.
const port = 8000;

/*Se genera un nuevo método encargado de escuchar las solicitudes*/
const requestListener = function (req, res) {
    //Permite escribir un mensaje como respuesta a la solicitud
    res.end("Mi primer servidor");
 };

 /*Se crea el servidor, este método recibe como argumento el escuchador de solicitudes que se generó anteriormente*/
 const server = http.createServer(requestListener);

 /*Se hace que el servidor escuche las solicitudes*/
 server.listen(port, host, () => {
    console.log(`El servidor esta corriendo en http://${host}:${port}`); 
 });