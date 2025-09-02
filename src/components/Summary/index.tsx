import { CircleArrowDown, CircleArrowUp, CircleDollarSign } from "lucide-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";

export function Summary() {

    const { transactions } = useContext(TransactionsContext);

    //Queremos reduzir o array transactions em um objeto que contenha { income: 0, outcome: 0, total: 0 } para isso usamos a função reduce do js.

    const summary = transactions.reduce(
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
    );

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <CircleArrowUp size={22} color="#00b37e" />
                </header>

                <strong>{summary.income}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <CircleArrowDown size={22} color="#f75a68" />
                </header>

                <strong>{summary.outcome}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CircleDollarSign size={22} color="#fff" />
                </header>

                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}