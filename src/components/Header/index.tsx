import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoIMG from '../../assets/ignite-simbol.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoIMG} alt="logotipo" />
                <NewTransactionButton>
                    Nova transação
                </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}