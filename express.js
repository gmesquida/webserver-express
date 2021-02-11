const express = require('express')
const hbs = require('hbs');
const app = express()

require('./hbs/helpers')
require('dotenv').config();

const port = process.env.PORT || 3000;

// Publicamos el archivo estático
app.use(express.static(__dirname + '/public'))

// Registramos los parciales
hbs.registerPartials(__dirname + '/views/partials', (err) => {});

// Opción 1: utilizamos Express HBS Engine para generar páginas
/*app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'guillermo',
        title: 'Home!'
    });

})
app.get('/about', (req, res) => {

    res.render('about', {
        title: 'About'
    });

})*/

// Opción 2: Desplegando una aplicación con el http_server de angular o react

app.get('*', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})


app.listen(port, () => console.log(`Escuchando peticiones en puerto ${port}`))
    .on('error', (err) => console.log(`Error al arrancar el webserver ${err.code}`));