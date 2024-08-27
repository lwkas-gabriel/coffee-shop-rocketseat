import ExpressoTradicional from "../../../../assets/Type=Expresso.png";
import ExpressoAmericano from "../../../../assets/Type=Americano.png";
import ExpressoCremoso from "../../../../assets/Type=ExpressoCremoso.png";
import ExpressoGelado from "../../../../assets/Type=CaféGelado.png";
import CafeComLeite from "../../../../assets/Type=CaféComLeite.png";
import Latte from "../../../../assets/Type=Latte.png";
import Capuccino from "../../../../assets/Type=Capuccino.png";
import Macchiato from "../../../../assets/Type=Macchiato.png";
import Mocaccino from "../../../../assets/Type=Mochaccino.png";
import ChocolateQuente from "../../../../assets/Type=ChocolateQuente.png";
import Cubano from "../../../../assets/Type=Cubano.png";
import Havaiano from "../../../../assets/Type=Havaiano.png";
import Arabe from "../../../../assets/Type=Arabe.png";
import Irlandes from "../../../../assets/Type=Irlandes.png";

const CoffeeList = [
    {id: 1, img: ExpressoTradicional, tags: ["Tradicional"], description: "O tradicional café feito com água quente e grãos moídos.", price: 9.90, quantity: 0},
    {id: 2, img: ExpressoAmericano, tags: ["Tradicional"], description: "Expresso diluído, menos intenso que o tradicional.", price: 9.90, quantity: 0},
    {id: 3, img: ExpressoCremoso, tags: ["Tradicional"], description: "Café expresso normal com espuma cremosa.", price: 9.90, quantity: 0},
    {id: 4, img: ExpressoGelado, tags: ["Tradicional", "Gelado"], description: "Bebida preparada com café expresso e cubos de gelo.", price: 9.90, quantity: 0},
    {id: 5, img: CafeComLeite, tags: ["Tradicional", "Com Leite"], description: "Meio a meio de expresso tradicional com leite vaporizado.", price: 9.90, quantity: 0},
    {id: 6, img: Latte, tags: ["Tradicional", "Com Leite"], description: "Uma dose de café expresso com o dobro de leite e espuma cremosas.", price: 9.90, quantity: 0},
    {id: 7, img: Capuccino, tags: ["Tradicional", "Com Leite"], description: "Bebida com canela feita de doses iguais de café, leite e espuma.", price: 9.90, quantity: 0},
    {id: 8, img: Macchiato, tags: ["Tradicional", "Com Leite"], description: "Café expresso misturado com um pouco de leite quente e espuma.", price: 9.90, quantity: 0},
    {id: 9, img: Mocaccino, tags: ["Tradicional", "Com Leite"], description: "Café expresso com calda de chocolate, pouco leite e espuma.", price: 9.90, quantity: 0},
    {id: 10, img: ChocolateQuente, tags: ["Especial", "Com Leite"], description: "Bebida feita com chocolate dissolvido no leite quente e café.", price: 9.90, quantity: 0},
    {id: 11, img: Cubano, tags: ["Especial", "Alcoólico", "Gelado"], description: "Drink gelado de café expresso com rum, creme de leite e hortelã.", price: 9.90, quantity: 0},
    {id: 12, img: Havaiano, tags: ["Especial"], description: "Bebida adocicada preparada com café e leite de coco.", price: 9.90, quantity: 0},
    {id: 13, img: Arabe, tags: ["Especial"], description: "Bebida preparada com grãos de café árabe e especiarias.", price: 9.90, quantity: 0},
    {id: 14, img: Irlandes, tags: ["Especial", "Alcoólico"], description: "Bebida a base de café, uísque irlandês, açúcar e chantilly.", price: 9.90, quantity: 0}
];

export function CoffeeContext(){
    return(
        <div>

        </div>
    );
}