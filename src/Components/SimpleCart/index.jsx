import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Button,
    Typography,
} from "@mui/material";

const SimpleCart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const removeFromCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    };

    return (
        <div className="simple-cart">
            <Typography variant="h5" gutterBottom>
                Shopping Cart
            </Typography>
            <List>
                {cartItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.name} />
                        <ListItemSecondaryAction>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => removeFromCart(item)}
                            >
                                Remove
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SimpleCart;
