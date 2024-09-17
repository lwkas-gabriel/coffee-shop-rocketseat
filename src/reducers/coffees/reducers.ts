import { Action, ActionTypes, CoffeeEntity } from "./actions";

export function coffeeReducer(state: CoffeeEntity[], action: Action) {
    switch(action.type){
        case ActionTypes.ADD_ONE_ITEM:
            return action.payload.data;
        case ActionTypes.REMOVE_ONE_ITEM:
            return action.payload.data;
        case ActionTypes.REMOVE_FROM_CART:
            return action.payload.data;
        case ActionTypes.EMPTY_CART:
            return action.payload.data;
        default:
            return state
    }
}