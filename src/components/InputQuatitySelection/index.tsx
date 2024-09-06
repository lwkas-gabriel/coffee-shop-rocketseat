import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { InputContainer } from "./styles";

interface InputProps{
    id: number;
    quantity: number;
}

export function InputQuantitySelection({id, quantity}:InputProps){

    const { addOneItem, removeOneItem } = useContext(CoffeeContext);

    const [value, setValue] = useState(quantity);

    function onChangeValue(){
        setValue(quantity);
    }

    function handleRemoveCoffee(){
        removeOneItem(id);
    }
    
    function handleAddCoffee(){
        addOneItem(id);
    }

    return (
        <InputContainer>
            <button onClick={handleRemoveCoffee}>
                -
            </button>

            <input type="number" placeholder="0" min={0} value={quantity} onChange={onChangeValue}/>

            <button onClick={handleAddCoffee}>
                +
            </button>
        </InputContainer>
    );
}