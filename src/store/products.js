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
    {
        category: "books",
        name: "Fiction Book",
        description: "Best-selling fiction book",
        price: 15,
        inventoryCount: 20,
        imageUrl: "https://example.com/fiction-book.jpg",
    },
    {
        category: "books",
        name: "Mystery",
        description: "Popular Mystery",
        price: 20,
        inventoryCount: 15,
        imageUrl: "https://example.com/Mystery-book.jpg",
    },
    {
        category: "books",
        name: "Children's Book",
        description: "Colorful children's book",
        price: 10,
        inventoryCount: 25,
        imageUrl: "https://example.com/children-book.jpg",
    },
];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_PRODUCTS":
            return state.filter(
                (product) => product.category === action.payload
            );
        case "ADD_TO_CART":
            return state.map((product) =>
                product.name === action.payload.name
                    ? { ...product, inventoryCount: product.inventoryCount - 1 }
                    : product
            );
        case "REMOVE_FROM_CART":
            return state.map((product) =>
                product.name === action.payload.name
                    ? { ...product, inventoryCount: product.inventoryCount + 1 }
                    : product
            );
        default:
            return state;
    }
};

export default productsReducer;
