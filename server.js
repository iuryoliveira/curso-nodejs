const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o banco de dados
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// Primeira rota
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001);