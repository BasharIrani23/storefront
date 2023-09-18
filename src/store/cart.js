// store/cart.js

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, items: [...state.items, action.payload] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.name !== action.payload.name
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
