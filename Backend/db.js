const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://somya:Gr9TB3aVDDKNgu39@cluster0.za01tsl.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})


const todo = mongoose.model('todos', todoSchema); 

module.exports = {
    todo
}
