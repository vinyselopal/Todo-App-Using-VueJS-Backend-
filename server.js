const cors = require('cors')
const express = require('express')
const { ObjectId } = require('mongodb')

const app = express()
const port = 8080

const { connectDB } = require('./database/config')
connectDB()

const { insertTodo, getAllTodos, updateTodo, deleteTodo, deleteAll, deleteDone } = require('./database/routes')

app.use(express.json())
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'POST']
  })
)

app.post('/', async (req, res) => {
  try {
    console.log('post req')
    const result = await insertTodo(req.body)
    console.log('result', result)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
})
app.get('/', async (req, res) => {
  try {
    console.log('get all req')
    const result = await getAllTodos()
    console.log('result', result)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
})
app.put('/:id', async (req, res) => {
  try {
    const {id} = req.params
    console.log('update req')
    const result = await updateTodo({'id': ObjectId(id)}, req.body)
    console.log('result', result)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
})
app.delete('/', async (req, res) => {
  try {
    console.log('deleteAll req')
    const result = await deleteAll()
    console.log('result', result)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
})
app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('delete req')
    const result = await deleteTodo({'id': ObjectId(id)})
    console.log('result', result)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
})
app.delete('/done', async (req, res) => {
  try {
    console.log('delete req')
    const result = await deleteDone(req.body)
    console.log('result', result)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
