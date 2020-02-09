import bcrypt from "bcryptjs";

const comparePassword = (providedPassword, userPassword) =>
  bcrypt.compareSync(providedPassword, userPassword);

export default comparePassword;
