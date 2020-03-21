const isAuthorizerd = user => {
	if (!user) {
		throw new Error("Unauthorized!");
	}
	return true;
};

export default isAuthorizerd;
