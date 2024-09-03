import { CoffeeItemCheckout } from "../..";
import { InputQuantitySelection } from "../../../../components/InputQuatitySelection";
import { Container, InfoContainer, OperationContainer } from "./styles";
import { Trash } from "@phosphor-icons/react";



export function CoffeeQuantitySelector({id, name, img, quantity}:CoffeeItemCheckout){

    return (
        <Container>
            <img src={img} alt="" />
            <InfoContainer>
                <p>{name}</p>
                <OperationContainer>
                    <InputQuantitySelection id={id} quantity={quantity}/>
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