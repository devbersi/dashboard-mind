import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { deleteFile } from '../../../../utils/file';

interface IRequest {
    user_id: string;
    avatar_file: string;
}


class UpdateUserAvatarUseCase {
    constructor(private usersReposiytory: UsersRepository){}

    async execute({user_id, avatar_file}: IRequest): Promise<void>{
        const user = await this.usersReposiytory.findById(user_id)

        if(user.avatar){
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        user.avatar = avatar_file;

        await this.usersReposiytory.create(user)
    }
}

export { UpdateUserAvatarUseCase }