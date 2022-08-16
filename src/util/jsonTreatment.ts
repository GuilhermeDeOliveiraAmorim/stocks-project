import transactions from "./all_transactions.json";

transactions.map((d) =>
    console.log(
        d.transaction_date.split("/").reverse().join("-") +
            " " +
            d.transaction_time +
            ":00.000"
    )
);

// export const transactionsPrint = transactions.map((t) =>
//     console.log(t.transaction_amount)
// );
