const { nanoid } = require("nanoid");

let todos = [
  {
    id: nanoid(),
    name: "First Item",
    completed: true,
  },
  {
    id: nanoid(),
    name: "Second Item",
    completed: false,
  },
  {
    id: nanoid(),
    name: "Third Item",
    completed: false,
  },
  {
    id: nanoid(),
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    completed: false,
  },
];

module.exports = {
  todos,
};
