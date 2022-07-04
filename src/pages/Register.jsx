import React from "react";
import { Box, useMediaQuery, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import WallpaperLogin from "../components/web/WallpaperLogin";
import { Link } from "react-router-dom";
import RegisterField from "../components/fields/RegisterField";

const Register = () => {
    const isMobile = useMediaQuery("(max-width:425px)");
    return (
        <>
            {isMobile ? (
                <Box p={2}>
                    <Box  >
                        <Link to="/login">
                            <KeyboardBackspaceIcon />
                        </Link>
                    </Box>
                    <Box >
                        <RegisterField />
                    </Box>
                </Box>
            ) : (
                <>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <WallpaperLogin />
                            <Grid item lg={6} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>

                                <RegisterField />
                            </Grid>
                        </Grid>
                    </Box>
                </>
            )}
        </>
    );
}

export default Register
