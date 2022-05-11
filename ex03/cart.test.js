const { db, closeConnection } = require('./dbConnection');
const { createCart, addItem } = require('./cart');


beforeEach(async () => {
    await db("carts_items").truncate();
    await db("carts").truncate();
});

afterAll(async () => await closeConnection());


test("createCart creates a cart for a username", async () => {
    await createCart("Bharathiyaar");
    const result = await db.select("username").from("carts");
    expect(result).toEqual([{ username: "Bharathiyaar" }]);

});

test("addItem adds an item in a cart", async () => {
    const username = "Bharathiyaar";
    await createCart(username);
    const  user = await db
        .select("id")
        .from("carts")
        .where({ username });
    const cartId = user[0].id;
    await addItem(cartId, "amla");
    const result = await db.select().from("carts_items");
    expect(result).toEqual([{ cartId, itemname: "amla" }]);

});