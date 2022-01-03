
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IUsersRepository } from '../repositories/IUserRepository'
import { hash } from 'bcrypt';
import { AppError } from '../../../errors/AppErrors';


class CreateUserUseCase {

    constructor(private usersRepository: IUsersRepository ){}

    async execute({name, email, cpf, password, active, avatar }: ICreateUserDTO): Promise<void>{
        const nameAlreadyExists = await this.usersRepository.findByName(name)
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)
        const cpfAlreadyExists = await this.usersRepository.findByCpf(cpf)

        if (nameAlreadyExists || emailAlreadyExists || cpfAlreadyExists) {
            throw new AppError("User already exists", 401);
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({name, email, cpf, password: passwordHash, active, avatar})
    }
}

export {CreateUserUseCase}