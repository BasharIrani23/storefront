import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import SimpleCart from "./Components/SimpleCart";
import { fetchProducts } from "./actions/productActions";

function App() {
    useEffect(() => {
        store.dispatch(fetchProducts());
    }, []);

    return (
        <Provider store={store}>
            <Header />
            <div className="main-content">
                <SimpleCart />
                <Categories />
                <Products />
            </div>
            <Footer />
        </Provider>
    );
}

export default App;
