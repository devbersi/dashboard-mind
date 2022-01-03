import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, email, cpf, password } = request.body;
        if(request.file){
            const avatar = request.file.filename
            await this.updateUserUseCase.execute({id, name, email, cpf, avatar, password})
        } else {
             await this.updateUserUseCase.execute({id, name, email, cpf, password})
        }

        return response.status(200).send()
    }
}

export { UpdateUserController }