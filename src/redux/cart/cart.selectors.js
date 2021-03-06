import { createSelector } from "reselect";

const selectCart = state => state.cart;// input selector that returns a slice of a stste 

export const selectCartItems = createSelector( // output function
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemCounts = createSelector( // output function
    [selectCartItems], // used as input function
    cartItems =>
        cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
            0)
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity * cartItem.price
            , 0
        )
)
