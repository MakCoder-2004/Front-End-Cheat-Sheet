// cart.js
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, selectedQuantity) {
    let matchingItem;

    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    });

    if (matchingItem) {
        // If the item already exists in the cart, add the selected quantity
        matchingItem.quantity += selectedQuantity;
    } else {
        // If the item is not in the cart, add it with the selected quantity
        cart.push({
            productId: productId,
            quantity: selectedQuantity,
            deliveryOptions: '1'

        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    cart = cart.filter((cartItem) => cartItem.productId !== productId);
    saveToStorage();
}

export function updateCartItemQuantity(productId, newQuantity) {
    const cartItem = cart.find((item) => item.productId === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
    }
    saveToStorage();
}