import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={20} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder='Descrição' required/>
                    <input type="number" placeholder='Preço' required/>
                    <input type="text" placeholder='Categoria' required/>

                    <TransactionType>
                        <TransactionTypeButton variant='income' value='income'>
                            <ArrowUpCircle size={15} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant='outcome' value='outcome'>
                            <ArrowDownCircle size={15} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}