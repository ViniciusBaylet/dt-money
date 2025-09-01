import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransictionType, TransictionTypeButton } from './styles';
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

                    <TransictionType>
                        <TransictionTypeButton variant='income'>
                            <ArrowUpCircle size={15} />
                            Entrada
                        </TransictionTypeButton>

                        <TransictionTypeButton variant='outcome'>
                            <ArrowDownCircle size={15} />
                            Saída
                        </TransictionTypeButton>
                    </TransictionType>

                    <button type='submit'>Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}