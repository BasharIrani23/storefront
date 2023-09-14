import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./style.scss";

const Header = () => {
    return (
        <div className="header-root">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="header-title">
                        Storefront
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
