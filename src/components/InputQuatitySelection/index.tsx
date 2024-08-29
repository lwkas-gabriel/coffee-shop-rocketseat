import { InputContainer } from "./styles";

interface InputProps{
    id: number;
    addItem: (id:number) => void;
    removeItem: (id:number) => void;
}

export function InputQuantitySelection({id, addItem, removeItem}:InputProps){

    return (
        <InputContainer>
            <button onClick={() => removeItem(id)}>
                -
            </button>

            <input type="number" placeholder="0" min={0} value={id}/>

            <button onClick={() => addItem(id)}>
                +
            </button>
        </InputContainer>
    );
}