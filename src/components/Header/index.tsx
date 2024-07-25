import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.png";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo da Marca Coffee Delivery" />
            <section>
                <button></button>
                <button></button>
            </section>
        </HeaderContainer>
    );
}