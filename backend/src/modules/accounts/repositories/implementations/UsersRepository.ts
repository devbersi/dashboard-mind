import { IUsersRepository } from "../IUserRepository";
import {ICreateUserDTO} from '../../dtos/ICreateUserDTO'
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/entity";



class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }

    async create({name, email, cpf, password, active, avatar, id}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, 
            email,
            cpf,
            password,
            active,
            avatar, 
            id
        })

        await this.repository.save(user)
    }

    async findByName(name: string): Promise<User> {
       const user = await this.repository.findOne({name})
       return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})
        return user;
    }
    async findByCpf(cpf: string): Promise<User> {
        const user = await this.repository.findOne({cpf})
       return user;
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
       return user;
    }

    async findByActive(active: boolean): Promise<User> {
        const user = await this.repository.findOne({active})
       return user;
    }

    async list(): Promise<User[]>{
       const users = await this.repository.find();
        console.log(users)
       return users;
    }

    async delete(id: string): Promise<void> {
        const user = await this.repository.findOne(id)
        console.log(user)
        this.repository.remove(user)
    }
}

export { UsersRepository }