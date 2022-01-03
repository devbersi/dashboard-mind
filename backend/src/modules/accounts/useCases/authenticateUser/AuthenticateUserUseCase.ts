import { IUsersRepository } from "../../repositories/IUserRepository";
import {compare} from 'bcrypt';
import { sign } from 'jsonwebtoken'
import { AppError } from "../../../../errors/AppErrors";


interface IRequest {
    cpf?: string;
    email?: string;
    password: string,
}

interface IResponse {
    user: {
        name: string,
        email: string,
        administrator: boolean,
    };
    token: string
}


class AuthenticateUserUseCase {
    constructor(private usersRepository: IUsersRepository){}

    async execute({cpf, email, password}: IRequest,): Promise<IResponse>{
       if(email){
            const user = await this.usersRepository.findByEmail(email)
            const userActive = user.active

            if(!user) {
                throw new AppError("Email or password incorrect!", 401)
            }

            if(userActive == false) {
                throw new AppError("User does not Exist", 401)
            }

            const passwordMatch = await compare(password, user.password);

            if(!passwordMatch) {
                throw new AppError("Email or password incorrect!", 401)
            }

            const token = sign({}, "6b05f28da8008effd216e7c01361eba5", {
                subject: user.id,
                expiresIn: "1d"
            });

            const tokenReturn: IResponse = {
                token, 
                user: {
                    name: user.name,
                    email: user.email,
                    administrator: user.administrator,
                }
            }

            return tokenReturn;
        }
        if(cpf){
            const user = await this.usersRepository.findByCpf(cpf)
            const userActive = user.active

            if(!user) {
                throw new AppError("Email or password incorrect!", 401)
            }

            if(userActive == false) {
                throw new AppError("User does not Exist", 401)
            }

            const passwordMatch = await compare(password, user.password);

            if(!passwordMatch) {
                throw new AppError("Email or password incorrect!", 401)
            }

            const token = sign({}, "6b05f28da8008effd216e7c01361eba5", {
                subject: user.id,
                expiresIn: "1d"
            });

            const tokenReturn: IResponse = {
                token, 
                user: {
                    name: user.name,
                    email: user.email,
                    administrator: user.administrator,
                }
            }

            return tokenReturn;
        }
    }
}

export { AuthenticateUserUseCase }