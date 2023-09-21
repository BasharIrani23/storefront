const initialState = {
    products: [],
};

const updateInventoryCount = (products, productName, quantity) => {
    return products.map((product) =>
        product.name === productName
            ? { ...product, inventoryCount: product.inventoryCount + quantity }
            : product
    );
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };

        case "ADD_TO_CART":
            return {
                ...state,
                products: updateInventoryCount(
                    state.products,
                    action.payload.name,
                    -1
                ),
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                products: updateInventoryCount(
                    state.products,
                    action.payload.name,
                    1
                ),
            };

        default:
            return state;
    }
};

export default productsReducer;
