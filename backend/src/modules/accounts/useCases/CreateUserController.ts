import { Request, Response } from "express"
import 'reflect-metadata';
import { container, singleton } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"


class CreateUserController { 
    constructor(private createUserUseCase: CreateUserUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, cpf, password, active } = request.body;
        if(request.file){
            const avatar = request.file.filename;
            await this.createUserUseCase.execute({name, email, cpf, password, active, avatar})
        } else {
            await this.createUserUseCase.execute({name, email, cpf, password, active})
        }

        return response.status(201).send()
    }
}

export {CreateUserController}