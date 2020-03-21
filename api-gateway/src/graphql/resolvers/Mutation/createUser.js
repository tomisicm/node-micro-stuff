import UserService from "#root/adapters/UserService";

const createUserResolver = async (obj, { userInput }) => {
	const email = userInput.email;
	const password = userInput.password;

	return await UserService.createUser({
		email,
		password
	});
};

export { createUserResolver as createUser };
