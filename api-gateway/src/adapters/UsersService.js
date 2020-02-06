import got from "got";

// docker just knows the adress of users service
const USERS_SERVICE_URI = "http://users-service:7101"

export default class UsersService {
    static async createUser(
        {
            email,
            password
        }
    ) {
        const data = await got
            .post(`${USERS_SERVICE_URI}/users`, {
                json: { email, password }
            })
            .json();
        
        return data;
    }
}