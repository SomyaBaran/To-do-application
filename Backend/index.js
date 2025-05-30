// 
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));  // This allows the frontend to access the backend

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    console.log(createPayload);
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload);

    if (!parsedPayload.success) {
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

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    console.log(todos); //saves as a promise 

    res.json({
        todos: todos
    })
})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
