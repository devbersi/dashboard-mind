import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { DeleteUsersController } from "./DeleteUsersController";
import { DeleteUsersUseCase } from "./DeleteUserUseCase";


export default (): DeleteUsersController => {
    const usersRepository = new UsersRepository();
    const deleteUsersUseCase = new DeleteUsersUseCase(usersRepository);
    const deleteUsersController = new DeleteUsersController(deleteUsersUseCase);

    return deleteUsersController;
}