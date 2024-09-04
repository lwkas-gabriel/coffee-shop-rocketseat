import { useContext } from "react";
import { CoffeeItemCheckout } from "../..";
import { InputQuantitySelection } from "../../../../components/InputQuatitySelection";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { Container, InfoContainer, OperationContainer } from "./styles";
import { Trash } from "@phosphor-icons/react";



export function CoffeeQuantitySelector({id, name, img, quantity, price}:CoffeeItemCheckout){

    const { removeItemFromCart } = useContext(CoffeeContext);

    function handleClick(){
        removeItemFromCart(id);
    }

    return (
        <Container>
            <img src={img} alt="" />
            <InfoContainer>
                <p>{name}</p>
                <OperationContainer>
                    <InputQuantitySelection id={id} quantity={quantity}/>
                    <button onClick={handleClick} className="btn">
                        <span>
                            <Trash size={16}/>
                            <p>Remover</p>
                        </span>
                    </button>
                </OperationContainer>
            </InfoContainer>
            <p className="total-price">{price.toFixed(2).replace('.', ',')}</p>
        </Container>
    );
}