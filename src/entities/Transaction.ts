import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Stock } from "./Stock";

@Entity("transactions")
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    transaction_date: Date;

    @Column()
    transaction_description: string;

    @Column()
    transaction_amount: number;

    @Column()
    stock_id: string;

    @ManyToOne(() => Stock)
    @JoinColumn({ name: "stock_id" })
    stock: Stock;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
