import { hash } from "bcrypt";
import { getRepository } from "typeorm";
import { AppError } from "../../../../errors/AppErrors";
import { User } from "../../entities/entity";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface UserUpdateRequest {
    id?: string;
    name?: string;
    email?: string;
    cpf?: string;
    active?: boolean;
    administrator?: boolean;
}


class UpdateAdminUserUseCase {
    constructor(private usersRepository: IUsersRepository ){}

    async execute({id, name, email, cpf, active, administrator}: UserUpdateRequest): Promise<void> {
        const repo = getRepository(User)

        const user = await repo.findOne(id);

        if (!user){
            throw new AppError("Users does not exists!", 401)
        }

        user.name = name ? name : user.name;
        user.email = email ? email : user.email;
        user.cpf = cpf ? cpf : user.cpf;
        user.active = active ? active : user.active;
        user.administrator = administrator ? administrator : user.administrator;

        console.log(user)

        await repo.save(user);
    }
}

export { UpdateAdminUserUseCase }