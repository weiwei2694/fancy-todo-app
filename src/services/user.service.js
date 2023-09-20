const prisma = require("../../prisma/client");

const getUsers = async () => {
	const result = await prisma.user.findMany();
	return result;
};

const getUser = async ({ id }) => {
	const result = await prisma.user.findUnique({
		where: { id },
	});
	return result;
};

const getUserTodos = async ({ id }) => {
	const result = await prisma.user.findUnique({
		where: { id },
        include: {
            todos: true
        }
	});
	return result;
};

const createUser = async ({ name, email, phone }) => {
	const result = await prisma.user.create({
		data: {
			name,
			phone,
			email,
		},
	});

	return result;
};

const updateUser = async ({ id, name, email, phone }) => {
	const result = await prisma.user.update({
		where: { id },
		data: {
			name,
			phone,
			email,
		},
	});

	return result;
};

const deleteUser = async ({ id }) => {
	const result = await prisma.user.delete({
		where: { id },
	});

	return result;
};

module.exports = {
	getUsers,
	getUser,
    getUserTodos,
	createUser,
	updateUser,
	deleteUser,
};
