import { InputCotainer } from "./styles";

export function InputQuantitySelection(value : number){
    return (
        <InputCotainer>
            <button>
                -
            </button>

            <input type="number" placeholder="0" value={value} min={0} />

            <button>
                +
            </button>
        </InputCotainer>
    );
}