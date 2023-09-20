const express = require("express");
const router = express.Router();
const {
	getTodos,
	createTodo,
	updateTodo,
	getTodo,
	deleteTodo,
} = require("../controllers/todo.controller");

router.route("/")
    .get(getTodos)
    .post(createTodo)
router.route("/:id")
    .get(getTodo)
    .delete(deleteTodo)
    .put(updateTodo);

module.exports = router;
