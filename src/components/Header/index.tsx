import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo da Marca Coffee Delivery" />
            <nav>
                <span>
                    <MapPin size={22} weight="fill" />
                    <p>Fortaleza, CE</p>
                </span>
                <NavLink to="/checkout" title="Checkout de Produtos">
                    <ShoppingCart size={22} weight="fill" />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}