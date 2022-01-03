import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("users")
class User {
    delete() {
        throw new Error("Method not implemented.");
    }
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    password: string;

    @Column()
    administrator: boolean;

    @Column()
    active: boolean;

    @CreateDateColumn()
    creadet_at: Date

    @Column()
    avatar: string;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { User }