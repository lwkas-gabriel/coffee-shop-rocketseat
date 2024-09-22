export interface CoffeeEntity{
    id: number;
    img: string;
    name: string;
    tags: string[];
    description: string;
    price: number;
    quantity: number;
}

export enum ActionTypes {
    ADD_ONE_ITEM = 'ADD_ONE_ITEM',
    REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    EMPTY_CART = 'EMPTY_CART'
}

export interface Action {
    type: ActionTypes,
    payload: {
        data: CoffeeEntity[]
    },
}

export function addOneItemAction(listWithOnePlusItem: CoffeeEntity[]){
    return {
        type: ActionTypes.ADD_ONE_ITEM,
        payload: {
            data: listWithOnePlusItem
        },
    }
}

export function removeOneItemAction(listWithMinusOneItem: CoffeeEntity[]){
    return {
        type: ActionTypes.REMOVE_ONE_ITEM,
        payload: {
            data: listWithMinusOneItem
        },
    }
}

export function removeItemAction(listWithCoffeeItemBackToZero: CoffeeEntity[]){
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            data: listWithCoffeeItemBackToZero
        },
    }
}

export function emptyCartAction(quantitiesBackToZeroList: CoffeeEntity[]){
    return {
        type: ActionTypes.EMPTY_CART,
        payload: {
            data: quantitiesBackToZeroList
        },
    }
}