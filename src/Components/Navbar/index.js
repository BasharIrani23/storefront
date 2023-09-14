import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const categories = useSelector((state) => state.categories.categories);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Storefront
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {categories.map((category) => (
                        <li className="nav-item" key={category.name}>
                            <a className="nav-link" href={`/${category.name}`}>
                                {category.displayName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
