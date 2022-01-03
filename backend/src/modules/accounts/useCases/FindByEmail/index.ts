import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindByEmailUseCase } from "./FindByEmailUseCase";
import { FindByEmailController } from "./FindByEmailController";

export default (): FindByEmailController => {
    const usersRepository = new UsersRepository();
    const findByEmailUseCase = new FindByEmailUseCase(usersRepository);
    const findByEmailController = new FindByEmailController(findByEmailUseCase);

    return findByEmailController;
}