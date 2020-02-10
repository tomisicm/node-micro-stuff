import { User } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";


export default class UsersService {
    static async createUser(
        {
            email,
            password
        }
    ) {
        try {
            const newUser = await User.create({
                email: email,
                id: generateUUID(),
                passwordHash: hashPassword(password)
            });
            return newUser;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}