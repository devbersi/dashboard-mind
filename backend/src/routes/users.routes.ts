import { Router } from "express";
import 'reflect-metadata';
import createUserController from '../modules/accounts/useCases/index';
import authenticateUserController from '../modules/accounts/useCases/authenticateUser/index';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import listUsersController  from "../modules/accounts/useCases/ListUsers/index";
import deleteUsersController from '../modules/accounts/useCases/deleteUsers/index';
import updateUserController from '../modules/accounts/useCases/UpdateUsers/index';
import updateAdminUserController from '../modules/accounts/useCases/UpdateAdminUsers/index';
import updateUserAvatarController from '../modules/accounts/useCases/UpdateUserAvatar/index';
import findByEmailController from '../modules/accounts/useCases/FindByEmail/index';
import multer from "multer";
import updloadConfig from '../config/upload';


const usersRouter = Router();
const uploadAvatar = multer(updloadConfig.upload("./tmp/avatar"))

usersRouter.use(ensureAuthenticated)

usersRouter.post("/create", uploadAvatar.single("avatar"), (request, response) => {
    return createUserController().handle(request, response)
})
usersRouter.get("/list", (request, response) => {
    return listUsersController().handle(request, response)
})
usersRouter.delete("/delete/:id", (request, response) => {
    return deleteUsersController().handle(request, response)
})
usersRouter.put("/edit/:id", uploadAvatar.single("avatar"), (request, response) => {
    return updateUserController().handle(request, response)
})
usersRouter.put("/adminEdit/:id", (request, response) => {
    return updateAdminUserController().handle(request, response)
})
usersRouter.patch("/avatar", uploadAvatar.single("avatar"), (request, response) => {
    return updateUserAvatarController().handle(request, response)
})
usersRouter.get("/me/:email", (request, response) => {
    return findByEmailController().handle(request, response)
})



export { usersRouter }