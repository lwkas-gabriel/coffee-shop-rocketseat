import { InputQuantitySelection } from "../../../../components/InputQuatitySelection";

import image from "../../../../assets/Type=Americano.png"
import { Container, InfoContainer, OperationContainer } from "./styles";
import { Trash } from "@phosphor-icons/react";

export function CoffeeQuantitySelector(){
    return (
        <Container>
            <img src={image} alt="" />
            <InfoContainer>
                <p>Café Tradicional</p>
                <OperationContainer>
                    <InputQuantitySelection />
                    <button className="btn">
                        <span>
                            <Trash size={16}/>
                            <p>Remover</p>
                        </span>
                    </button>
                </OperationContainer>
            </InfoContainer>
            <p className="total-price">R$ 9,90</p>
        </Container>
    );
}