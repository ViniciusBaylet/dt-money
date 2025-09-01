import { CircleArrowDown, CircleArrowUp, CircleDollarSign } from "lucide-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <CircleArrowUp size={15} color="#00b37e" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <CircleArrowDown size={15} color="#f75a68" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CircleDollarSign size={15} color="#fff" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}