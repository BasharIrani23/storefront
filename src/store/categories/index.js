const initialState = {
    categories: [],
    activeCategory: "",
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            // Replace the state with the categories fetched from the server
            return { ...state, categories: action.payload };

        case "SET_ACTIVE_CATEGORY":
            return { ...state, activeCategory: action.payload };

        default:
            return state;
    }
};

export default categoriesReducer;
