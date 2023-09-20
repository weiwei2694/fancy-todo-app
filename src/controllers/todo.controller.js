const todoService = require("../services/todo.service");

const getTodos = async (req, res) => {
	try {
		const result = await todoService.getTodos();

		res.status(200).json({
			status: 200,
			ok: true,
			msg: "Get Todos Success",
			data: result,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			ok: false,
			msg: error.message,
		});
	}
};

const getTodo = async (req, res) => {
	try {
		const id = req.params.id;

		if (!id)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "id required",
			});

		const result = await todoService.getTodo({ id });

		if (!result)
			return res.status(404).json({
				status: 404,
				ok: true,
				msg: "todo not found",
			});

		res.status(200).json({
			status: 200,
			ok: true,
			msg: "Get Todo Success",
			data: result,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			ok: false,
			msg: error.message,
		});
	}
};

const createTodo = async (req, res) => {
	try {
		const { title, description, status, dueDate, userId } = req.body;

		if (!title)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "title required",
			});
		if (!description)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "description required",
			});
		if (!status)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "status required",
			});
		if (!dueDate)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "dueDate required",
			});
		if (!userId)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "userId required",
			});

		const result = await todoService.createTodo({
			title,
			description,
			status,
			dueDate,
			userId,
		});

		res.status(201).json({
			status: 201,
			ok: true,
			msg: "Create Todo Successfully",
			data: result,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			ok: false,
			msg: error.message,
		});
	}
};

const updateTodo = async (req, res) => {
	try {
		const id = req.params.id;
		const { title, description, status, dueDate, userId } = req.body;

		if (!id)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "id required",
			});
		if (!title)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "title required",
			});
		if (!description)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "description required",
			});
		if (!status)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "status required",
			});
		if (!dueDate)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "dueDate required",
			});
		if (!userId)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "userId required",
			});

		const result = await todoService.updateTodo({
			id,
			title,
			description,
			status,
			dueDate,
			userId,
		});

		res.status(201).json({
			status: 201,
			ok: true,
			msg: "Update Todo Succesfully",
			data: result,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			ok: false,
			msg: error.message,
		});
	}
};

const deleteTodo = async (req, res) => {
	try {
		const id = req.params.id;

		if (!id)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "id required",
			});

		await todoService.deleteTodo({ id });

		res.status(204).json(null);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			ok: false,
			msg: error.message,
		});
	}
};

module.exports = {
	getTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
};
