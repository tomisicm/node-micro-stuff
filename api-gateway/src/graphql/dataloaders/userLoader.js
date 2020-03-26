import DataLoader from "dataloader"
import UserService from "#root/adapters/UserService";

export const userLoader = (user) => {
    return new DataLoader(ids => UserService.fetchUsersById(user.id, ids));
}
