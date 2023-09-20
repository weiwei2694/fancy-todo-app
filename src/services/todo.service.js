const prisma = require("../../prisma/client");

const getTodos = async () => {
	const result = await prisma.todo.findMany();
	return result;
};

const getTodo = async ({ id }) => {
	const result = await prisma.todo.findUnique({
		where: { id },
	});
	return result;
};

const createTodo = async ({ title, description, status, dueDate, userId }) => {
	const result = await prisma.todo.create({
		data: {
			title,
			description,
			status,
			dueDate,
			userId,
		},
	});

	return result;
};

const updateTodo = async ({
	id,
	title,
	description,
	status,
	dueDate,
	userId,
}) => {
	const result = await prisma.todo.update({
		where: { id },
		data: {
			title,
			description,
			status,
			dueDate,
			userId,
		},
	});

	return result;
};

const deleteTodo = async ({ id }) => {
	const result = await prisma.todo.delete({
		where: { id },
	});

	return result;
};

module.exports = {
	getTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
};
