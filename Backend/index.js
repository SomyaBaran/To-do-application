// 
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app =express();
app.use(express.json());

// body{
     // title: string;
     // description: string;
// }
app.post("/todo", async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created Successfully"
    })
})

app.get("/todo", async(req,res) => {
    const todos = await todo.find({});
    console.log(todos); //saves as a promise 

    res.json({
        todos: todos
    })
})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
})

app.listen(3000);
