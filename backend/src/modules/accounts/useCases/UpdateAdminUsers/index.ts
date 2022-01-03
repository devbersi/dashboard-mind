import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateAdminUserController } from "./UpdateAdminUsersController";
import { UpdateAdminUserUseCase } from "./UpdateAdminUsersUseCase";


export default (): UpdateAdminUserController => {
    const usersRepository = new UsersRepository();
    const updateUserUseCase = new UpdateAdminUserUseCase(usersRepository);
    const updateAdminUserController = new UpdateAdminUserController(updateUserUseCase);

    return updateAdminUserController;
}