const Cart = require('./Cart');


test("add an item to the empty cart", () => {
    const cart = new Cart();
    cart.addToCart("cheesecake");
    expect(cart.items).toEqual(['cheesecake']);

});


test("remove the item from the cart which has 1 item", () => {
    const cart = new Cart();
    cart.addToCart("cheesecake");
    cart.removeFromCart("cheesecake");

    expect(cart.items).toEqual([]);
});