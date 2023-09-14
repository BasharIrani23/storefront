import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
                <button
                    key={category.name}
                    className={`btn btn-${
                        activeCategory === category.name
                            ? "primary"
                            : "outline-primary"
                    } mr-2`}
                    onClick={() =>
                        dispatch({
                            type: "SET_ACTIVE_CATEGORY",
                            payload: category.name,
                        })
                    }
                >
                    {category.displayName}
                </button>
            ))}
        </div>
    );
};

export default Categories;
