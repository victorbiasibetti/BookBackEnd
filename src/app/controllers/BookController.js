const Book = require('../models/Book')

class BookController {
  async store(req, res){
    try{
      const book = await Book.create(req.body)
      return res.send({book})
    }
    catch(err){
      console.log(err)
      return res.status(400).send({ error: 'Registration Failed'})
    }
  }

  async list(req, res){
    try{
      const books = await Book.find();
      return res.send({books})
    }catch(err){
      console.log(err)
      return res.status(400).send({ error: 'List Failed'})
    }
  }

  async get(req, res){
    try{
      const book = await Book.findById(req.params.id);
      return res.send({book})
    }catch(err){
      console.log(err)
      return res.status(400).send({ error: 'List Failed'})
    }
  }

  async update(req, res){
    try{
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, 
        {new: true});
      return res.send({book})
    }catch(err){
      console.log(err)
      return res.status(400).send({ error: 'Update Failed'})
    }
  }

  async delete(req, res){
    try{
      await Book.findByIdAndRemove(req.params.id);
      return res.send()
    }catch(err){
      console.log(err)
      return res.status(400).send({ error: 'Delete Failed'})
    }
  }
}

module.exports = new BookController()