// mongodb+srv://admin:somyadb_cluster@cluster0.za01tsl.mongodb.net/todos


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:somya123@cluster0.za01tsl.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema); 
module.exports = {
    todo: todo
}