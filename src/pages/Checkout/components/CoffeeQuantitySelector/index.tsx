import { useContext } from "react";
import { InputQuantitySelection } from "../../../../components/InputQuatitySelection";
import { CoffeeContext, CoffeeEntity } from "../../../../contexts/CoffeeContext";

// import image from "../../../../assets/Type=Americano.png"
import { Container, InfoContainer, OperationContainer } from "./styles";
import { Trash } from "@phosphor-icons/react";



export function CoffeeQuantitySelector({id, name, img}:CoffeeEntity){
    const {addOneItem, removeOneItem} = useContext(CoffeeContext);

    return (
        <Container>
            <img src={img} alt="" />
            <InfoContainer>
                <p>{name}</p>
                <OperationContainer>
                    <InputQuantitySelection id={id} addItem={addOneItem} removeItem={removeOneItem} />
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