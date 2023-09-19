const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, items: [...state.items, action.payload] };

        case "REMOVE_FROM_CART":
            const index = state.items.findIndex(
                (item) => item.name === action.payload.name
            );
            if (index !== -1) {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, index),
                        ...state.items.slice(index + 1),
                    ],
                };
            }
            return state;

        default:
            return state;
    }
};

export default cartReducer;
