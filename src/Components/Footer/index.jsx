import React from "react";
import { Paper, Typography } from "@mui/material";
import "./style.scss";

const Footer = () => {
    return (
        <Paper
            className="footer-root"
            elevation={3}
            style={{ padding: "1rem", backgroundColor: "#3f51b5" }}
        >
            <Typography
                variant="body1"
                className="footer-text"
                style={{ color: "white" }}
            >
                Copyright 2023 by Storefront
            </Typography>
        </Paper>
    );
};

export default Footer;
