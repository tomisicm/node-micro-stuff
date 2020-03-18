import DataLoader from "dataloader"
import UserService from "#root/adapters/UserService";

export const userLoader = new DataLoader(ids => UserService.fetchUsersById(ids));