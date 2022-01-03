import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserAvatarUseCase } from "../UpdateUserAvatar/UpdateUserAvatarUseCase";
import { UpdateUserAvatarController } from "./UpdateUserAvatarController";

export default (): UpdateUserAvatarController => {
    const usersRepository = new UsersRepository();
    const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository);
    const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase);

    return updateUserAvatarController;
}