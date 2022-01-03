import { Request, Response } from "express";
import { FindByEmailUseCase } from "./FindByEmailUseCase";




class FindByEmailController {
    constructor(private findByEmailUseCase: FindByEmailUseCase){}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.params;

       const data =  await this.findByEmailUseCase.execute({email})

        return response.status(200).json(data);
    }
}  

export { FindByEmailController } 