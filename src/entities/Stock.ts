import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("stocks")
export class Stock {
    @PrimaryColumn()
    id: string;

    @Column()
    ticker: string;

    @Column()
    name: string;

    @Column()
    icon: string;

    @Column()
    type: string;

    @Column()
    sector: string;

    @Column()
    industry: string;

    @Column()
    market_cap: number;

    @Column()
    dividend_yield: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
