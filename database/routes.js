const { model } = require("./model");

async function insertTodo(doc) {
  const result = await model.create(doc);
  return result;
}

async function getAllTodos() {
  console.log("getAll");
  const result = await model.find({}).then(function (docs) {
    return docs;
  });
  console.log("result in fn", result);
  return result;
}

async function updateTodo(filter, update) {
  const result = await model.updateOne(filter, update)
  return result
}
async function deleteTodo(filter) {
  const result = await model.deleteOne(filter)
  return result
}
async function deleteAll() {
  const result = await model.deleteMany({})
  return result
}
async function deleteDone(filter) {
  const result = await model.deleteMany(filter)
  return result
}

module.exports = { insertTodo, getAllTodos, updateTodo, deleteTodo, deleteAll, deleteDone };
