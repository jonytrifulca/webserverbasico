//webserver basico backend
const http = require('http');
//crea un webserver con un callback para request y para responses
http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'paco',
            edad: 35,
            url: request.url
        }
        response.write(JSON.stringify(salida));
        response.end();

    })
    .listen(8080);

console.log("servidor escuchando en puerto 8080");


/*

EN FORMATO ES6

//webserver basico backend
import { createServer } from 'http';
//crea un webserver con un callback para request y para responses
createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'paco',
            edad: 35,
            url: request.url
        }
        response.write(JSON.stringify(salida));
        response.end();

    })
    .listen(8080);

console.log("servidor escuchando en puerto 8080");

*/