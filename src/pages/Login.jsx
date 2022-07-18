import React from "react";
import { Box, useMediaQuery, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import WallpaperLogin from "../components/web/WallpaperLogin";
import LoginField from "../components/fields/LoginField";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Grid container spacing={2} >
                <WallpaperLogin />
                <Grid item lg={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                    }}>
                    <Box display={{xs : "block", md: "none"}} fontSize="1.5rem" sx={{px: { xs: "15px", lg: "10px" }}} mt="15px">
                        <Link to="/" >
                            <KeyboardBackspaceIcon  fontSize={"4rem"}/>
                        </Link>
                    </Box>
                    <LoginField />
                </Grid>
            </Grid>
        </>
    )
}

export default Login
