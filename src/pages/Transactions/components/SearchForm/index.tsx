import { Search } from "lucide-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Pesquise uma transação" />
            <button type="submit">
                <Search size={15} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}