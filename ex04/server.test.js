const fetch = require("isomorphic-fetch");

const app = require('./server');

const HOSTNAME = 'localhost';
const PORT = '3000';
const apiRoot = `http://${HOSTNAME}:${PORT}`;


// Helper functions
const addItem = (username, item) => fetch(`${apiRoot}/carts/${username}/items/${item}`,
        { method: "POST" });

const getItems = (username) => fetch(`${apiRoot}/carts/${username}/items`,
        { method: "GET" });

test("adding items to a cart", async () => {
    const initialItemsResponse = await getItems("Bharathiyaar");
    expect(initialItemsResponse.status).toEqual(404);

    const addItemResponse = await addItem("Bharathiyaar","Paanchaali sabatham");
    expect(await addItemResponse.json()).toEqual(["Paanchaali sabatham"])

    const finalItemsResponse = await getItems("Bharathiyaar");
    expect(await finalItemsResponse.json()).toEqual(["Paanchaali sabatham"]);
});

afterAll(() => app.close());