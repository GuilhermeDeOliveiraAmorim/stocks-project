import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1660613968675 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "transaction_date",
                        type: "timestamp",
                    },
                    {
                        name: "transaction_description",
                        type: "varchar",
                    },
                    {
                        name: "transaction_amount",
                        type: "decimal",
                    },
                    {
                        name: "stock_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_transactions_stock",
                        columnNames: ["stock_id"],
                        referencedTableName: "stocks",
                        referencedColumnNames: ["id"],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions");
    }
}
