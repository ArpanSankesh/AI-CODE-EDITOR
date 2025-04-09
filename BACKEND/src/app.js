const express = require('express');
const app = express(); // create server

const aiRoutes = require('./routes/ai.routes.js'); 


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/ai', aiRoutes)


module.exports = app;  