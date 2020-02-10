const isAuthorizerd = req => {
	if (!req.isAuth) {
		throw new Error("Unauthorized!");
	}
	return true;
};

export default isAuthorizerd;
