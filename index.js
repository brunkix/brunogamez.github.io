const express = require('express');
const app = express();
const path = require('path');

// Esto sirve para que cargue tus carpetas de assets, css y js correctamente
app.use(express.static(__dirname));

// Rutas para tus páginas
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor listo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {res.sendFile(path.join(__dirname + 'index.html'));});
app.get('/panel', (req, res) => {res.sendFile(path.join(__dirname + '/page/panel.html'));});
app.get('/register', (req, res) => {res.sendFile(path.join(__dirname + '/page/register.html'));});
app.get('/login', (req, res) => {res.sendFile(path.join(__dirname + '/page/login.html'));});