function connectDB () {
/* return object from db during
connection and interact with it to run subseq query */

  const mongoose = require('mongoose')
  // const todo = require('./todo');
  const db = 'todoapp'
  const uri = `mongodb://127.0.0.1:27017/${db}`
  mongoose.connect(uri, () => { // see return value of fn
    console.log('connected to mongo server')
  })
}
module.exports = {
  connectDB
}
