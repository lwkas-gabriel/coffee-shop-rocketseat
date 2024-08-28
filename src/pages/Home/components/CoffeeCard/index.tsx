import { ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, Input, PriceContainer } from "./styles";
import { InputQuantitySelection } from "../../../../components/InputQuatitySelection";
import { CoffeeEntity } from "../../../../contexts/CoffeeContext";

export function CoffeeCard({name, img, tags, description, price, quantity } : CoffeeEntity){
    return (
        <CardContainer>
            <img src={img} alt="" />
            <span>
                {tags.map((tag:string) =>{ 
                        return <p>{tag}</p>
                    }
                )}
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
            <PriceContainer>
                <p>R$ <strong>{price}</strong></p>
                <Input>
                    <InputQuantitySelection value={quantity} />
                    <button className="cartButton">
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </Input>
            </PriceContainer>
        </CardContainer>
    );
}