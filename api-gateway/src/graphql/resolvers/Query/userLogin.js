import UserService from "#root/adapters/UserService";

const loginUserResolver = async (obj, { userInput }) => {
	const email = userInput.email;
	const password = userInput.password;

	return await UserService.loginUser({ email, password });
};

export { loginUserResolver as userLogin };
