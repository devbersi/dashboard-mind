import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { deleteFile } from '../../../../utils/file';
import { copyFile } from "fs";
import { User } from "../../entities/entity";

interface IRequest {
    email: string;
}


class FindByEmailUseCase {
    constructor(private usersReposiytory: UsersRepository){}

    async execute({email}: IRequest): Promise<User>{
        const user = await this.usersReposiytory.findByEmail(email)

        return await user
    }
}

export { FindByEmailUseCase }