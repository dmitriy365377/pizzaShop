import { addItemToCart } from './cart.utils'
import { removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case 'CLEAR_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        default:
            return state
    }
}

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
})

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})

export const clearItem = item => ({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: item
})


export default cartReducer