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
import { createContext, ReactNode, useReducer } from "react";
import { coffeeReducer } from "../reducers/coffees/reducers";
import { addOneItemAction, CoffeeEntity, emptyCartAction, removeItemAction, removeOneItemAction } from "../reducers/coffees/actions";

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

interface CoffeeContextType {
    coffeeList: CoffeeEntity[];
    totalPrice: number;
    addOneItem: (id: number) => void;
    removeOneItem: (id: number) => void;
    removeItemFromCart: (id: number) => void;
    emptyCart: () => void;
    cartCounter: number;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps{
    children: ReactNode;
}

export function CoffeeContextProvider({
    children,
} : CoffeeContextProviderProps){
    const [coffeeList, dispatch] = useReducer(coffeeReducer, CoffeeList);

    const initialTotal = 0;
    const totalPrice = coffeeList
        .filter(
            (coffee:CoffeeEntity) => coffee.quantity > 0)
        .reduce(
            (accumulator:number, currentValue:CoffeeEntity) => accumulator + (currentValue.price*currentValue.quantity),
            initialTotal,
        )
    ;

    const cartCounter = coffeeList.filter(
        (coffee:CoffeeEntity) => coffee.quantity > 0
    ).length;

    function addOneItem(id: number){
        const listWithOnePlusItem: CoffeeEntity[] = coffeeList.map((coffee:CoffeeEntity) => {
            if(coffee.id === id){
                return {...coffee, quantity: coffee.quantity+1};
            }
            return coffee;
        });
        dispatch(addOneItemAction(listWithOnePlusItem));
    }

    function removeOneItem(id: number){
        const listWithMinusOneItem: CoffeeEntity[] = coffeeList.map((coffee:CoffeeEntity) => {
            if(coffee.id === id && coffee.quantity > 0){
                return {...coffee, quantity: coffee.quantity-1};
            }
            return coffee;
        });
        dispatch(removeOneItemAction(listWithMinusOneItem));
    }

    function removeItemFromCart(id: number){
        const listWithCoffeeItemBackToZero: CoffeeEntity[] = coffeeList.map((coffee:CoffeeEntity) => {
            if(coffee.id === id){
                return {...coffee, quantity: 0};
            }
            return coffee;
        });
        dispatch(removeItemAction(listWithCoffeeItemBackToZero));
    }

    function emptyCart(){
        const quantitiesBackToZeroList: CoffeeEntity[] = coffeeList.map((coffee:CoffeeEntity) => {
            if(coffee.quantity >= 0){
                return {...coffee, quantity: 0};
            }
            return coffee;
        });
        dispatch(emptyCartAction(quantitiesBackToZeroList));
        //setCoffeeList(quantitiesBackToZeroList);
    }

    return(
        <CoffeeContext.Provider
            value={{
                coffeeList,
                totalPrice,
                addOneItem,
                removeOneItem,
                cartCounter,
                removeItemFromCart,
                emptyCart,
            }}>
            {children}
        </CoffeeContext.Provider>
    );
}