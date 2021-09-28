const express = require('express')
const mongoose = require('mongoose')

// Setup express app
const app = express()

// Connect to mongoDB
// mongoose.connect('mongodb://localhost:27017/nodejseventdb')
const data_name = 'sample_supplies'
mongoose.connect('mongodb+srv://samit:samit123456@cluster0.bhbl8.mongodb.net/'+data_name)
// mongoose.connect('mongodb://username:password@host:port/database?options...');
mongoose.Promise = global.Promise  // ทำให้เป็น asynchonize

// convert to json
app.use(express.json())

// การสร้าง router
// app.get('/api',(req , res) => res.send('It works'))

// โหลด router
app.use('/api', require('./routes/api'))

// error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message })
})

app.listen(process.env.port || 4000, function () {
    console.log('Ready...to GO !');
})