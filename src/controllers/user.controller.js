const userService = require("../services/user.service");

const getUsers = async (_, res) => {
	try {
		const result = await userService.getUsers();

		res.status(200).json({
			status: 200,
			ok: true,
			msg: "Get Users Success",
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

const getUser = async (req, res) => {
	try {
		const id = req.params.id;

		if (!id)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "id required",
			});

		const result = await userService.getUser({ id });

        if (!result) return res.status(404).json({
            status: 404,
            ok: true,
            msg: "data not found"
        })

		res.status(200).json({
			status: 200,
			ok: true,
			msg: "Get User Success",
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

const getUserTodos = async (req, res) => {
	try {
		const id = req.params.id;

		if (!id)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "id required",
			});

		const result = await userService.getUserTodos({ id });

        if (!result) return res.status(404).json({
            status: 404,
            ok: true,
            msg: "data not found"
        })

		res.status(200).json({
			status: 200,
			ok: true,
			msg: "Get User Todos Success",
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

const createUser = async (req, res) => {
	try {
		const { name, email, phone } = req.body;

		if (!name)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "name required",
			});
		if (!email)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "email required",
			});
		if (!phone)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "phone required",
			});

		const result = await userService.createUser({ name, email, phone });

		res.status(201).json({
			status: 201,
			ok: true,
			msg: "Create User Successfully",
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

const updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		const { name, email, phone } = req.body;

		if (!id)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "id required",
			});
		if (!name)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "name required",
			});
		if (!email)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "email required",
			});
		if (!phone)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "phone required",
			});

		const result = await userService.updateUser({ id, name, email, phone });

		res.status(201).json({
			status: 201,
			ok: true,
			msg: "Update User Succesfully",
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

const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;

		if (!id)
			return res.status(400).json({
				status: 400,
				ok: false,
				msg: "id required",
			});

		await userService.deleteUser({ id });

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
	getUsers,
	getUser,
    getUserTodos,
	createUser,
	updateUser,
	deleteUser,
};
