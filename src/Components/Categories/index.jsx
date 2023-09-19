import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Categories = () => {
    const categories = useSelector((state) => state.categories.categories);
    const activeCategory = useSelector(
        (state) => state.categories.activeCategory
    );
    const dispatch = useDispatch();

    return (
        <div className="mb-4">
            <h2 className="mb-3">Product Categories</h2>
            {categories.map((category) => (
                <Button
                    variant={
                        activeCategory === category.name
                            ? "contained"
                            : "outlined"
                    }
                    color="primary"
                    onClick={() =>
                        dispatch({
                            type: "SET_ACTIVE_CATEGORY",
                            payload: category.name,
                        })
                    }
                >
                    {category.displayName}
                </Button>
            ))}
        </div>
    );
};

export default Categories;
