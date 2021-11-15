const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book.controller')

router.get('/',(req ,res)=>{
    bookController.getAllBooks(req,res)
})

router.get('/date/:year',(req,res)=>{
    bookController.getBookByYear(req,res)
})

router.post('/',(req,res)=>{
    bookController.newBook(req,res)
})

router.delete('/delete/:id',(req ,res)=>{
    bookController.deleteABook(req ,res)
})

router.put('/update/:id',(req,res)=>{
    bookController.UpdateBook(req,res)
})

module.exports = router