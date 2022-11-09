/*Importar el módulo "fs"*/
const fs = require('fs');

/*Permite escribir en un archivo, que de no existir debe crearse y en caso de que exista, se elimina su contenido*/
fs.writeFileSync('archivo1.txt', "Hola, este es un archivo nuevo, creado de manera sincrónica");

/*Cuando el archivo se genere de manera asíncrona es necesario el manejo de errores*/
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincrónica", (err) => {
   if (err)
      console.log(err);
   else {
   }
});

/*Permite leer un archivo y la información se devuelve como un buffer en el cual se debe indicar su codificación*/
fs.readFileSync('info.txt', 'utf8');

/*Esta información se almacena dentro de una variable y se muestra en consola*/
let informacion = fs.readFileSync('info.txt', 'utf8');
console.log(informacion);

/*Eliminar un archivo, para eso es necesario indicar el nombre del archivo a eliminar*/
fs.unlinkSync('archivo1.txt');