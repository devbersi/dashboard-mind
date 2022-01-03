import { User } from "../../entities/entity";
import { IUsersRepository } from "../../repositories/IUserRepository";



class ListUsersUseCase {
    constructor(private usersRepository: IUsersRepository ){}

    async execute(): Promise<User[]> {
        const users = this.usersRepository.list();

        return await users;
    }
}

export { ListUsersUseCase }