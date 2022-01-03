import {ICreateUserDTO} from '../dtos/ICreateUserDTO'
import { User } from '../entities/entity'

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByName(name: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByCpf(cpf: string): Promise<User>;
    findById(id: string): Promise<User>;
    findByActive(active: boolean): Promise<User>;
    list(): Promise<User[]>;
    delete(id: string): Promise<void>;
}

export { IUsersRepository }