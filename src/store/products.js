import axios from "axios";

const initialState = [];

export const getProductsFromAPI = () => async (dispatch) => {
    try {
        const response = await axios.get(
            "https://api-js401.herokuapp.com/api/v1/products"
        );
        dispatch({ type: "SET_PRODUCTS", payload: response.data.results });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

export const updateProductInventory =
    (product, isAddingToCart) => async (dispatch) => {
        try {
            const updatedInventory = isAddingToCart
                ? product.inStock - 1
                : product.inStock + 1;

            await axios.put(
                `https://api-js401.herokuapp.com/api/v1/products/${product._id}`,
                { inStock: updatedInventory }
            );

            dispatch({
                type: isAddingToCart ? "ADD_TO_CART" : "REMOVE_FROM_CART",
                payload: product,
            });
        } catch (error) {
            console.error("Error updating product inventory:", error);
        }
    };

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return action.payload;
        case "ADD_TO_CART":
        case "REMOVE_FROM_CART":
            return state.map((product) =>
                product._id === action.payload._id
                    ? {
                          ...product,
                          inStock:
                              action.type === "ADD_TO_CART"
                                  ? product.inStock - 1
                                  : product.inStock + 1,
                      }
                    : product
            );
        default:
            return state;
    }
};

export default productsReducer;
