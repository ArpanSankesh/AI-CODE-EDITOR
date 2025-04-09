const express = require('express');
const app = express();

app.use(express.json()); // ✅ Add this line to parse JSON body

const aiRoutes = require('./routes/ai.routes.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/ai', aiRoutes);

module.exports = app;
