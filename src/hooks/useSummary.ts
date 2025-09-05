import { useMemo } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    });

    //Queremos reduzir o array transactions em um objeto que contenha { income: 0, outcome: 0, total: 0 } para isso usamos a função reduce do js.

    const summary = useMemo(() => {
        return transactions.reduce(
        (acc, transaction) => {
            if (transaction.type == 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
            return acc;
        },
        { income: 0, outcome: 0, total: 0 }
    )
    }, []);

    return summary;
}