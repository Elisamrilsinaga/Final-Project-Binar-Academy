import React from "react";
import { Box, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import WallpaperLogin from "../components/web/WallpaperLogin";
import { Link } from "react-router-dom";
import RegisterField from "../components/fields/RegisterField";

const Register = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <WallpaperLogin />
                    <Grid item lg={6} sx={{
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
                        <RegisterField />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Register
