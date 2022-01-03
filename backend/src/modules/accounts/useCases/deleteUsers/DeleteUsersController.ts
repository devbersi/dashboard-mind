import { Request, Response } from "express";
import { DeleteUsersUseCase } from "./DeleteUserUseCase";



class DeleteUsersController {
    constructor(private listUsersUseCase: DeleteUsersUseCase ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const all =  await this.listUsersUseCase.execute(id);
        return  response.json(all)
    }
}

export { DeleteUsersController }