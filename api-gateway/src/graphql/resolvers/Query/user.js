import UsersService from "#root/adapters/UsersService";

const loginUserResolver = async (obj, { userInput }) => {
	const email = userInput.email;
	const password = userInput.password;

	return await UsersService.loginUser({ email, password });
};

module.exports = loginUserResolver;
