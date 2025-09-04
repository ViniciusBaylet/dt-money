import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react';
import z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

    const createTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createTransaction;
    });

    const { register, handleSubmit, formState: { isSubmitting }, control, reset } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    });

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data;

        createTransaction({
            description,
            price,
            category,
            type
        })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.DialogDescription />

                <CloseButton>
                    <X size={20} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text" placeholder='Descrição' required {...register('description')} />
                    <input type="number" placeholder='Preço' required {...register('price', { valueAsNumber: true })} />
                    <input type="text" placeholder='Categoria' required {...register('category')} />

                    <Controller
                        control={control}
                        name='type'
                        render={(props) => {
                            return (
                                <TransactionType onValueChange={props.field.onChange} value={props.field.value}>
                                    <TransactionTypeButton $variant='income' value='income'>
                                        <ArrowUpCircle size={15} />
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton $variant='outcome' value='outcome'>
                                        <ArrowDownCircle size={15} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }} />

                    <button type='submit' disabled={isSubmitting}>Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}