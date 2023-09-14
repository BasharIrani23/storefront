const initialState = [
    {
        category: "electronics",
        name: "Laptop",
        description: "Latest Model",
        price: 1000,
        inventoryCount: 5,
    },
    {
        category: "electronics",
        name: "Phone",
        description: "Latest Smartphone",
        price: 500,
        inventoryCount: 10,
    },
    {
        category: "clothing",
        name: "Shirt",
        description: "Cotton T-shirt",
        price: 20,
        inventoryCount: 20,
    },
    {
        category: "clothing",
        name: "Jeans",
        description: "Blue jeans",
        price: 40,
        inventoryCount: 10,
    },
];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_PRODUCTS":
            return state.filter(
                (product) => product.category === action.payload
            );
        default:
            return state;
    }
};

export default productsReducer;
