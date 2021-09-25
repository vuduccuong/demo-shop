const KEYCART = 'cart';
const strCartItems = localStorage.getItem(KEYCART);
let cartItems = [];

if (strCartItems) {
    cartItems = JSON.parse(strCartItems);
}

export const updateCartToStore = products =>{
    localStorage.setItem(KEYCART, JSON.stringify(products));
}

export const getCartItemFromStore = () =>{
    return cartItems;
};
