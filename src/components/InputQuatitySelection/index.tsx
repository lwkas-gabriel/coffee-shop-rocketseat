import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { InputContainer } from "./styles";

interface InputProps{
    id: number;
    quantity: number;
}

export function InputQuantitySelection({id, quantity}:InputProps){

    const { addOneItem, removeOneItem } = useContext(CoffeeContext);

    //const [, setValue] = useState(quantity);

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

            <input type="number" placeholder="0" min={0} value={quantity} readOnly/>

            <button onClick={handleAddCoffee}>
                +
            </button>
        </InputContainer>
    );
}