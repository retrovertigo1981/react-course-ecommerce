/**
 * This function calculate total price of a new order
 * @param {array} products cartProducts: Array of Objets
 * @returns {number} Total Price
 */

export const totalPrice = (products) => {
    return products.reduce((acc, product) => acc + product.price, 0)    
} 