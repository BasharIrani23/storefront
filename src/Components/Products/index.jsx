import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
    const products = useSelector((state) => state.products);
    const activeCategory = useSelector(
        (state) => state.categories.activeCategory
    );

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <div>
            <h2 className="mb-3">Products in {activeCategory}</h2>
            <div className="row">
                {filteredProducts.map((product) => (
                    <div className="col-12 col-md-4 mb-4" key={product.name}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                                <p className="card-text">
                                    Price: ${product.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
