const express = require('express')
const hbs = require('hbs');
const app = express()

require('./hbs/helpers')

const port = process.env.port || 3000

// Publicamos el archivo estático
app.use(express.static(__dirname + '/public'))

// Registramos los parciales
hbs.registerPartials(__dirname + '/views/partials', (err) => {});

// Express HBS Engine
app.set('view engine', 'hbs');



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

})


app.listen(port, () => console.log(`Escuchando peticiones en puerto ${port}`))
    .on('error', (err) => console.log(`Error al arrancar el webserver ${err.code}`));