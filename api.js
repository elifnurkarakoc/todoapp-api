const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");
const { todos } = require("./todosDump");
const PORT = 8081;

const app = express();

app.use(cors());
app.use(json());

app.get("/todos", (req, res) => res.send({ todos }));

app.post("/todos", (req, res) => {
  const todo = { name: req?.body?.name, id: nanoid(), completed: false };
  todos.push(todo);
  return res.send({ todo });
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);

  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send({ todos });
});

app.put("/todos/:id", (req, res) => {
  const id = req?.params?.id;
  const index = todos.findIndex((todo) => todo?.id == id);
  const completed = Boolean(req?.body?.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send({ todo: todos[index] });
});

app.listen(PORT, console.log(`TODO List API running on port ${PORT}`));
