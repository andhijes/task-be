const express = require('express')
const app = express()

// router
const omdbRouter = require('./routes/OmdbRoute')

// route
app.use('/omdb', omdbRouter);


app.get('/', (req, res) => res.send('Hello World!'))
module.exports = app;
