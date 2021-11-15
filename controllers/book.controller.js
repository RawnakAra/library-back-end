const book  = require('../modul/book.modul')

const getAllBooks = (req ,res)=>{
  book.book.find({},(err , data)=>{
      return res.status(200).json(data)
    })
}
const getBookByYear = (req,res) =>{
    const {year} = req.params
    book.book.find({} , (err ,data)=>{
      let theyear = data.filter(book =>{
          return parseInt(book.public) ===parseInt(year) 
      }) 
      return res.status(200).send(theyear)  
    })
}

const newBook =(req ,res) =>{
    const {title,author,public,language,stars } = req.body
    let newBook = new book.book({
        title : title ,
        author : author ,
         public : public,
         language : language ,
         stars : stars 
    })
   newBook.save((err,data)=>{
       if(err) return res.status(404).send(err)
       return res.status(200).send(data)
   })
    
}
const deleteABook = (req ,res) =>{
  const {id}=req.params;
  book.book.findByIdAndDelete(id ,(err ,data)=>{
      if(err) throw err 
      if(data){
          return res.status(200).send(data)
      }
      return res.status(400).json({error : 'item not found'})
  })
}

const UpdateBook =(req,res)=>{
    const {id}=req.params;
    const {title,author,public,language,stars } = req.body
  book.book.findByIdAndUpdate(id ,{title : title ,author : author ,public : public,language : language ,stars : stars},{new: true, runValidators : true},(err ,data)=>{
      if(err) throw err 
      if(data){
          return res.status(201).send(data)
      }
      return res.status(401).json({error : 'item not found'})
  })
}

module.exports ={
    getAllBooks,
    getBookByYear,
    newBook,
    deleteABook,
    UpdateBook
}