const { db } = require('./dbConnection');

const createCart = username => db("carts").insert({ username });

const addItem = (cartId, itemName) => db("carts_items").insert({cartId, itemName});

module.exports = {
    createCart,
    addItem
}