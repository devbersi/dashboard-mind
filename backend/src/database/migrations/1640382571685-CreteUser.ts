import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreteUser1640382571685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: "name",
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: "email",
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: "cpf",
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: 'varchar'
                    },
                    {
                        name: "administrator",
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: "active",
                        type: 'boolean',
                        default: true
                    },
                    {
                        name: "creadet_at",
                        type: 'timestamp',
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
