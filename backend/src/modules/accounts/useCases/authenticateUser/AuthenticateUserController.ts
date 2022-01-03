import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";



class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { email, cpf, password } = request.body;

        if(email){
            console.log(email)
            const token = await this.authenticateUserUseCase.execute({email, password});
            return response.json(token)
        }

        if(cpf) {
            console.log(cpf)
            const token = await this.authenticateUserUseCase.execute({cpf, password});
            return response.json(token)
        }
    }
}

export { AuthenticateUserController }