const assert = require('assert');
const Cart = require('./Cart');


test("add an item to the empty cart", () => {
    const cart = new Cart();
    cart.addToCart("cheesecake");
    assert.deepStrictEqual(cart.items, ['cheesecake']);
});