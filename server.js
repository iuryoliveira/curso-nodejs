const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o banco de dados
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi',
    { useNewUrlParser: true,useUnifiedTopology: true }
);

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);