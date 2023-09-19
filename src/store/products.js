const initialState = [
    {
        category: "electronics",
        name: "Laptop",
        description: "Latest Model",
        price: 1000,
        inventoryCount: 5,
        imageUrl: "https://example.com/laptop.jpg",
    },
    {
        category: "electronics",
        name: "Phone",
        description: "Latest Smartphone",
        price: 500,
        inventoryCount: 10,
        imageUrl: "https://example.com/phone.jpg",
    },
    {
        category: "electronics",
        name: "Headphones",
        description: "Noise-cancelling",
        price: 150,
        inventoryCount: 7,
        imageUrl: "https://example.com/headphones.jpg",
    },
    {
        category: "clothing",
        name: "Shirt",
        description: "Cotton T-shirt",
        price: 20,
        inventoryCount: 20,
        imageUrl: "https://example.com/shirt.jpg",
    },
    {
        category: "clothing",
        name: "Jeans",
        description: "Blue jeans",
        price: 40,
        inventoryCount: 10,
        imageUrl: "https://example.com/jeans.jpg",
    },
    {
        category: "clothing",
        name: "Jacket",
        description: "Leather jacket",
        price: 100,
        inventoryCount: 6,
        imageUrl: "https://example.com/jacket.jpg",
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
