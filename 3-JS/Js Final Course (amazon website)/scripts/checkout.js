import { cart, removeFromCart, updateCartItemQuantity } from '../data/cart.js';
import { products } from '../data/products.js';
import { Money } from './util/money.js';
import { deliveryOptions } from '../data/deliveryOption.js';

// Function to render the cart summary
function renderCartSummary() {
    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        // Find the matching product
        const matchingProduct = products.find((product) => product.id === productId);

        // Generate HTML for the cart item
        cartSummaryHTML += `
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date">
                    Delivery date: ${matchingProduct.deliveryDate}
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image" src="${matchingProduct.image}">

                    <div class="cart-item-details">
                        <div class="product-name">
                            ${matchingProduct.name}
                        </div>
                        <div class="product-price">
                            $${Money(matchingProduct.priceCents)}
                        </div>
                        <div class="product-quantity">
                            <span>
                                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                            </span>
                            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                                Update
                            </span>
                            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                                Delete
                            </span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                            Choose a delivery option:
                        </div>
                        $${deliveryOptionHTML(matchingProduct)}
                    </div>
                </div>
            </div>
        `;
    });


    function deliveryOptionHTML(matchingProduct){
        deliveryOptions.forEach((deliveryOption) => {
            let HTMLstring = '';
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.days, 'days').format('dddd, MMMM DD');
            const deliveryPrice = deliveryOption.priceCents === 0 ? 'Free' : `$${Money(deliveryOption.priceCents)}`
            HTMLstring = `
                <div class="delivery-option">
                <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">
                        ${deliveryDate}
                    </div>
                    <div class="delivery-option-price">
                        ${deliveryPrice} Shipping
                    </div>
                </div>
            </div>
        `
        })

        return HTMLstring;
    }

    // Update the DOM with the new cart summary
    document.querySelector('.order-summary').innerHTML = cartSummaryHTML;

    // Update the number of items in the cart
    document.querySelector('.number-of-items').innerHTML = `${cart.length} items`;

    // Add event listeners for delete buttons
    document.querySelectorAll('.js-delete-link').forEach((deleteLink) => {
        deleteLink.addEventListener('click', () => {
            const productId = deleteLink.dataset.productId;
            removeFromCart(productId);

            // Update the number of items in the cart immediately after removing the item
            document.querySelector('.number-of-items').innerHTML = `${cart.length} items`;

            // Remove the item from the DOM
            const removeContainer = document.querySelector(`.js-cart-item-container-${productId}`);
            removeContainer.remove();
        });
    });

    // Add event listeners for update buttons
    document.querySelectorAll('.js-update-link').forEach((updateLink) => {
        updateLink.addEventListener('click', () => {
            const productId = updateLink.dataset.productId;

            // Find the container for the current cart item
            const cartItemContainer = updateLink.closest('.cart-item-container');

            // Hide the quantity label and update link
            const quantityLabel = cartItemContainer.querySelector('.quantity-label');
            const updateLinkElement = cartItemContainer.querySelector('.js-update-link');
            quantityLabel.style.display = 'none';
            updateLinkElement.style.display = 'none';

            // Create an input field for the new quantity
            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = quantityLabel.textContent;
            quantityInput.min = 1;
            quantityInput.classList.add('js-quantity-input');

            // Create a save button
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.classList.add('js-save-quantity');

            // Insert the input field and save button into the DOM
            const quantityContainer = cartItemContainer.querySelector('.product-quantity');
            quantityContainer.appendChild(quantityInput);
            quantityContainer.appendChild(saveButton);

            // Handle the save button click
            saveButton.addEventListener('click', () => {
                const newQuantity = parseInt(quantityInput.value);

                if (newQuantity > 0) {
                    // Update the quantity in the cart
                    updateCartItemQuantity(productId, newQuantity);

                    // Update the quantity label
                    quantityLabel.textContent = newQuantity;

                    // Show the quantity label and update link, and remove the input field and save button
                    quantityLabel.style.display = 'inline';
                    updateLinkElement.style.display = 'inline';
                    quantityInput.remove();
                    saveButton.remove();
                } else {
                    alert('Please enter a valid quantity.');
                }
            });
        });
    });


}

// Initial render of the cart summary
renderCartSummary();