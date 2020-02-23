import UsersService from "#root/adapters/UsersService";

const createUserResolver = async (obj, { userInput }) => {
	const email = userInput.email;
	const password = userInput.password;

	return await UsersService.createUser({
		email,
		password
	});
};

export { createUserResolver as createUser };
