import DataLoader from "dataloader"
import UserService from "#root/adapters/UserService";

export const userLoader = new DataLoader(ids => {
    return Promise.all(ids.map(id => UserService.fetchUserById(id)))
});