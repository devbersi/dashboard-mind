import { Router } from "express";
import multer from "multer";
import authenticateUserController from '../modules/accounts/useCases/authenticateUser/index';
import updloadConfig from '../config/upload';
import createUserController from '../modules/accounts/useCases/index';



const sessionRoutes = Router();
const uploadAvatar = multer(updloadConfig.upload("./tmp/avatar"))



sessionRoutes.post("/login", (request, response) => {
    return authenticateUserController().handle(request, response)
})

sessionRoutes.post("/autoCreate", uploadAvatar.single("avatar"), (request, response) => {
    return createUserController().handle(request, response)
})

export { sessionRoutes }