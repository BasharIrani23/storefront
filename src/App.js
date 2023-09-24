import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import SimpleCart from "./Components/SimpleCart";
import ProductDetails from "./Components/Products/ProductDetails";
import ShoppingCart from "./store/ShoppingCart";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div className="main-content">
                    <SimpleCart />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Categories />
                                    <Products />
                                </>
                            }
                        />
                        <Route
                            path="/products/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/cart" element={<ShoppingCart />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
