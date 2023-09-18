import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import SimpleCart from "./Components/SimpleCart";

function App() {
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
