import { User } from "../../entities/entity";
import { IUsersRepository } from "../../repositories/IUserRepository";



class DeleteUsersUseCase {
    constructor(private usersRepository: IUsersRepository ){}

    async execute(id: string): Promise<void> {
        const users = this.usersRepository.delete(id);

    }
}

export { DeleteUsersUseCase }