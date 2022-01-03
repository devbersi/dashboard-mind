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
    avatar?: string;
    password?: string;
}


class UpdateUserUseCase {
    constructor(private usersRepository: IUsersRepository ){}

    async execute({id, name, email, cpf, avatar, password}: UserUpdateRequest): Promise<void> {
        const repo = getRepository(User)

        const user = await repo.findOne(id);

        if (!user){
            throw new AppError("Users does not exists!", 401)
        }

        const passwordHash = await hash(password, 8)

        user.name = name ? name : user.name;
        user.email = email ? email : user.email;
        user.cpf = cpf ? cpf : user.cpf;
        user.avatar = avatar ? avatar : user.avatar;
        user.password = password ? passwordHash : user.password;

        console.log(user)

        await repo.save(user);
    }
}

export { UpdateUserUseCase }