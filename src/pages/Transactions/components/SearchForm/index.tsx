import { Search } from "lucide-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    function handleSearchTransactions(data: SearchFormInputs) {

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Pesquise uma transação" {...register('query')} />
            <button type="submit" disabled={isSubmitting}>
                <Search size={15} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}