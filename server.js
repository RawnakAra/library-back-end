const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { env } = require('process')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api/books',require('./routers/book.router'))
mongoose.connect(process.env.DB_URL,{useNewUrlParser: true},()=>{
    console.log('conected to DB')
})

app.listen(process.env.PORT ||5000 , ()=>{
    console.log('server on port 5000');
})
