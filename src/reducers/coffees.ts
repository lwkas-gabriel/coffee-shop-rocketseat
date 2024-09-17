export interface CoffeeEntity{
    id: number;
    img: string;
    name: string;
    tags: string[];
    description: string;
    price: number;
    quantity: number;
}

export function coffeeReducer(state: CoffeeEntity[], action: any) {
    switch(action.type){
        case 'ADD_ONE_ITEM':
            return action.payload.listWithOnePlusItem;
        case 'REMOVE_ONE_ITEM':
            return action.payload.listWithMinusOneItem;
        case 'REMOVE_FROM_CART':
            return action.payload.listWithCoffeeItemBackToZero;
        case 'EMPTY_CART':
            return action.payload.quantitiesBackToZeroList;
        default:
            return state
    }
}