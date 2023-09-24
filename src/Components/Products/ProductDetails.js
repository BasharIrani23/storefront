import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(
                    `https://api-js401.herokuapp.com/api/v1/products/${id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }
        fetchProduct();
    }, [id]);

    return (
        <div>
            <h2>{product.name}</h2>
            {/* Add more details here as per your design */}
        </div>
    );
}

export default ProductDetails;
