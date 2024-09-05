import { CartCounter, HeaderContainer } from "./styles";

import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useContext } from "react";

export function Header(){
    const { cartCounter } = useContext(CoffeeContext);

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="Logo da Marca Coffee Delivery" />
            </NavLink>
            <nav>
                <span>
                    <MapPin size={22} weight="fill" />
                    <p>Fortaleza, CE</p>
                </span>
                <NavLink to="/checkout" title="Checkout de Produtos">
                    <ShoppingCart size={22} weight="fill" />
                    <CartCounter className={cartCounter > 0 ? "visible" : "invisible"}>
                        <p>
                            {cartCounter}
                        </p>
                    </CartCounter>
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}