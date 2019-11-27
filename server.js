const express = require('express')
const app = express()
const hbs = require('hbs');
//helpers importados
require('./hbs/helpers');


//middleware
//con esto sirvo todos los archivos de /public y son accesibles via http://localhost:3000/home.html y etc..
app.use(express.static(__dirname + '/public'));


//express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers
/*hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});*/

app.get('/', function(req, res) {
    res.render("index", {
        nombre: 'pakito'
            //no estoy pasando el año pero lo pilla del metodo de arriba
    });
});

app.get('/home', function(req, res) {
    res.render("home", {
        nombre: 'pakito',
        anio: new Date().getFullYear()
    });
});

app.get('/objeto', function(req, res) {

    let salida = {
        nombre: 'paco',
        edad: 35,
        url: req.url
    }

    res.send(salida); //automaticamente
})


/*
app.listen(3000, () => {
    console.log("Escuchando peticiones en el puerto 3000...")
});*/


//en heroku no se k puerto me daran => hago esto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}...`);
});

//como indicar a heroku como ejecutar el entorno ?? => es decir node server.js voy a package.json y en scripts creo el start
//        "start": "node server.js",