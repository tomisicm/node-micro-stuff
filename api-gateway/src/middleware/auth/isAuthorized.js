const isAuthorizerd = req => {
	// console.log(req.user)
	if (!req.user) {
		throw new Error("Unauthorized!");
	}
	return true;
};

export default isAuthorizerd;
