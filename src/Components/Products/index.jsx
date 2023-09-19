import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    CardMedia,
    Typography,
    Grid,
} from "@mui/material";
import "./style.scss";

const Products = () => {
    const products = useSelector((state) => state.products);
    const activeCategory = useSelector(
        (state) => state.categories.activeCategory
    );
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <div>
            <Typography variant="h5" className="mb-3">
                Products in {activeCategory}
            </Typography>
            <Grid container spacing={4}>
                {filteredProducts.map((product) => (
                    <Grid item xs={12} md={4} key={product.name}>
                        <Card>
                            <CardMedia
                                component="img"
                                className="product-image"
                                height="140"
                                image={product.imageUrl}
                                alt={product.name}
                            />
                            <CardContent>
                                <p className="card-text">
                                    In Stock: {product.inventoryCount}
                                </p>
                                <Typography variant="h6">
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {product.description}
                                </Typography>
                                <Typography variant="body1">
                                    Price: ${product.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Products;
