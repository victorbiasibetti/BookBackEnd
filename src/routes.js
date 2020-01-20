const {Router} = require('express')

const BookController = require('./app/controllers/BookController')

const routes = new Router();

routes.get('/hello', async (req, res) => res.send({message: "hello world"}))
routes.post('/', async (req, res) => BookController.store(req, res))
routes.get('/', async (req, res) => BookController.list(req, res))
routes.get('/:id', async (req, res) => BookController.get(req, res))
routes.put('/:id', async (req, res) => BookController.update(req, res))
routes.delete('/:id', async (req, res) => BookController.delete(req, res))

module.exports = routes;