const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api/books',require('./routers/book.router'))
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true},()=>{
    console.log('conected to DB')
})

app.listen(5000 , ()=>{
    console.log('server on port 5000');
})
