import { InputCotainer } from "./styles";

export function InputQuantitySelection(){
    return (
        <InputCotainer>
            <button>
                -
            </button>

            <input type="number" placeholder="0" min={0} />

            <button>
                +
            </button>
        </InputCotainer>
    );
}