import { ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, Input, PriceContainer } from "./styles";
import { InputQuantitySelection } from "../../../../components/InputQuatitySelection";
import { CoffeeEntity } from "../../../../reducers/coffees/actions";
import { NavLink } from "react-router-dom";

export function CoffeeCard({id, name, img, tags, description, price, quantity } : CoffeeEntity){
    return (
        <CardContainer>
            <img src={img} alt="" />
            <span>
                {tags.map((tag:string) =>{ 
                        return <p key={tag}>{tag}</p>
                    }
                )}
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
            <PriceContainer>
                <p>R$ <strong>{price.toFixed(2).replace('.', ',')}</strong></p>
                <Input>
                    <InputQuantitySelection id={id} quantity={quantity} />
                    <NavLink to="/checkout">
                        <ShoppingCart size={22} weight="fill" />
                    </NavLink>
                </Input>
            </PriceContainer>
        </CardContainer>
    );
}