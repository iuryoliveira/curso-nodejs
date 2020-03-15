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

const Product = mongoose.model('Product');


// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build Native Apps',
        url: 'https://github.com/facebook/react-native'
    });

    res.send('Hello World!');
});

app.listen(3001);