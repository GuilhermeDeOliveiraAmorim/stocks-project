import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStocks1660345988914 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stocks",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "ticker",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "icon",
                        type: "varchar",
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "sector",
                        type: "varchar",
                    },
                    {
                        name: "industry",
                        type: "varchar",
                    },
                    {
                        name: "market_cap",
                        type: "decimal",
                    },
                    {
                        name: "dividend_yield",
                        type: "decimal",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("stocks");
    }
}
