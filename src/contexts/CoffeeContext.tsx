import ExpressoTradicional from "../assets/Type=Expresso.png";
import ExpressoAmericano from "../assets/Type=Americano.png";
import ExpressoCremoso from "../assets/Type=ExpressoCremoso.png";
import ExpressoGelado from "../assets/Type=CaféGelado.png";
import CafeComLeite from "../assets/Type=CaféComLeite.png";
import Latte from "../assets/Type=Latte.png";
import Capuccino from "../assets/Type=Capuccino.png";
import Macchiato from "../assets/Type=Macchiato.png";
import Mocaccino from "../assets/Type=Mochaccino.png";
import ChocolateQuente from "../assets/Type=ChocolateQuente.png";
import Cubano from "../assets/Type=Cubano.png";
import Havaiano from "../assets/Type=Havaiano.png";
import Arabe from "../assets/Type=Árabe.png";
import Irlandes from "../assets/Type=Irlandês.png";
import { createContext, ReactNode, useState } from "react";

const CoffeeList = [
    {id: 1, img: ExpressoTradicional, name: "Expresso Tradicional", tags: ["Tradicional"], description: "O tradicional café feito com água quente e grãos moídos.", price: 9.90, quantity: 0},
    {id: 2, img: ExpressoAmericano, name: "Expresso Americano", tags: ["Tradicional"], description: "Expresso diluído, menos intenso que o tradicional.", price: 9.90, quantity: 0},
    {id: 3, img: ExpressoCremoso, name: "Expresso Cremoso", tags: ["Tradicional"], description: "Café expresso normal com espuma cremosa.", price: 9.90, quantity: 0},
    {id: 4, img: ExpressoGelado, name: "Expresso Gelado", tags: ["Tradicional", "Gelado"], description: "Bebida preparada com café expresso e cubos de gelo.", price: 9.90, quantity: 0},
    {id: 5, img: CafeComLeite, name: "Café com Leite", tags: ["Tradicional", "Com Leite"], description: "Meio a meio de expresso tradicional com leite vaporizado.", price: 9.90, quantity: 0},
    {id: 6, img: Latte, name: "Latte", tags: ["Tradicional", "Com Leite"], description: "Uma dose de café expresso com o dobro de leite e espuma cremosas.", price: 9.90, quantity: 0},
    {id: 7, img: Capuccino, name: "Capuccino", tags: ["Tradicional", "Com Leite"], description: "Bebida com canela feita de doses iguais de café, leite e espuma.", price: 9.90, quantity: 0},
    {id: 8, img: Macchiato, name: "Macchiato", tags: ["Tradicional", "Com Leite"], description: "Café expresso misturado com um pouco de leite quente e espuma.", price: 9.90, quantity: 0},
    {id: 9, img: Mocaccino, name: "Mocaccino", tags: ["Tradicional", "Com Leite"], description: "Café expresso com calda de chocolate, pouco leite e espuma.", price: 9.90, quantity: 0},
    {id: 10, img: ChocolateQuente, name: "Chocolate Quentes", tags: ["Especial", "Com Leite"], description: "Bebida feita com chocolate dissolvido no leite quente e café.", price: 9.90, quantity: 0},
    {id: 11, img: Cubano, name: "Cubano", tags: ["Especial", "Alcoólico", "Gelado"], description: "Drink gelado de café expresso com rum, creme de leite e hortelã.", price: 9.90, quantity: 0},
    {id: 12, img: Havaiano, name: "Havaiano", tags: ["Especial"], description: "Bebida adocicada preparada com café e leite de coco.", price: 9.90, quantity: 0},
    {id: 13, img: Arabe, name: "Árabe", tags: ["Especial"], description: "Bebida preparada com grãos de café árabe e especiarias.", price: 9.90, quantity: 0},
    {id: 14, img: Irlandes, name: "Irlandês", tags: ["Especial", "Alcoólico"], description: "Bebida a base de café, uísque irlandês, açúcar e chantilly.", price: 9.90, quantity: 0}
];

export interface CoffeeEntity{
    id: number;
    img: string;
    name: string;
    tags: string[];
    description: string;
    price: number;
    quantity: number;
}

interface CoffeeContextType {
    coffeeList: CoffeeEntity[];
    setCoffeeList: React.Dispatch<React.SetStateAction<CoffeeEntity[]>>;
    totalPrice: number;
    addOneItem: (id: number) => void;
    removeOneItem: (id: number) => void;
}

//export const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);
export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps{
    children: ReactNode;
}

export function CoffeeContextProvider({children} : CoffeeContextProviderProps){
    const [coffeeList, setCoffeeList] = useState(CoffeeList);
    
    const initialTotal = 0;
    const totalPrice = coffeeList
        .filter(
            (coffee) => coffee.quantity > 0)
        .reduce(
            (accumulator, currentValue) => accumulator + (currentValue.price*currentValue.quantity),
            initialTotal,
        )
    ;

    function addOneItem(id: number){
        const listWithOnePlusItem: CoffeeEntity[] = coffeeList.map(coffee => {
            if(coffee.id === id){
                console.log(coffee);
                return {...coffee, quantity: coffee.quantity+1};
            }
            return coffee;
        });
        //console.log(listWithOnePlusItem);
        setCoffeeList(listWithOnePlusItem);
    }

    function removeOneItem(id: number){
        const listWithMinusOneItem: CoffeeEntity[] = coffeeList.map(coffee => {
            if(coffee.id === id && coffee.quantity > 0){
                return {...coffee, quantity: coffee.quantity-1};
            }
            return coffee;
        });
        setCoffeeList(listWithMinusOneItem);
    }

    return(
        <CoffeeContext.Provider
            value={{
                coffeeList,
                setCoffeeList,
                totalPrice,
                addOneItem,
                removeOneItem
            }}>
            {children}
        </CoffeeContext.Provider>
    );
}