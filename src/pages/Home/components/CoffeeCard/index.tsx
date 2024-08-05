import { ShoppingCart } from "@phosphor-icons/react";
import americano from "../../../../assets/Type=Americano.png"
import { CardContainer, Input, PriceContainer } from "./styles";
import { InputQuantitySelection } from "../../../../components/InputQuatitySelection";

export function CoffeeCard(){
    return (
        <CardContainer>
            <img src={americano} alt="" />
            <span>
                <p>tradicional</p>
            </span>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <PriceContainer>
                <p>R$ <strong>9,90</strong></p>
                <Input>
                    <InputQuantitySelection />
                    <button className="cartButton">
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </Input>
            </PriceContainer>
        </CardContainer>
    );
}