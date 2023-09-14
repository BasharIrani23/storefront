const initialState = {
    categories: [
        { name: "electronics", displayName: "Electronics" },
        { name: "clothing", displayName: "Clothing" },
    ],
    activeCategory: "",
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_CATEGORY":
            return { ...state, activeCategory: action.payload };
        default:
            return state;
    }
};

export default categoriesReducer;
