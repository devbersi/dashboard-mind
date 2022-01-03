import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppErrors";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayload { 
    sub: string;
}

export async function ensureAuthenticated( request: Request, response: Response, next: NextFunction){

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, "6b05f28da8008effd216e7c01361eba5")as IPayload;
        
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id)

        if (!user){
            throw new AppError("User does not exists!", 401)
        }

        request.user = {
            id: user_id
        }

        next();
    } catch {
        throw new AppError("Invalid Token!", 401);
    }
}