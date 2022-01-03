
interface ICreateUserDTO {
    name: string;
    email: string;
    cpf: string;
    password: string;
    active: boolean;
    id?: string;
    avatar?: string;
}

export { ICreateUserDTO }