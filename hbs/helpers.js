const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnyo', () => {
    return (new Date().getFullYear());
})

hbs.registerHelper('capitalizar', (texto) => {
    return (texto.replace(/\b\w/g, l => l.toUpperCase()));
})