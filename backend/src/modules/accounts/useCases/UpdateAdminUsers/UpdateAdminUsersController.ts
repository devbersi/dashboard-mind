import { Request, Response } from "express";
import { UpdateAdminUserUseCase } from "./UpdateAdminUsersUseCase";


class UpdateAdminUserController {
    constructor(private updateUserUseCase: UpdateAdminUserUseCase ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, email, cpf, active, administrator } = request.body;
        
         await this.updateUserUseCase.execute({id, name, email, cpf, active, administrator})

        return response.status(200).send()
    }
}

export { UpdateAdminUserController }