import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ButtonJual = () => {
  return (
    <Box
      width={1.0}
      flexWrap="wrap"
      textAlign="center"
      sx={{
        position: "fixed",
        bottom: 16,
        left: 0,
      }}
    >
      <Button
        href={"/daftar-jual/add"}
        variant="contained"
        sx={{
          backgroundColor: "#7126B5",
          textTransform: "none",
          padding: "14px 24px",
          width: "108px",
          height: "48px",
          borderRadius: "12px",
          color: "white",
          marginRight: "10px",
          boxShadow: "0 0px 12px 0.15px #7126B5",
          spacing: 4,
        }}
      >
        <AddIcon sx={{ fontSize: "20px", color: "#fff", mr: 1 }} />
        <Typography variant="body2" color="#fff">
          Jual
        </Typography>
      </Button>
    </Box>
  );
};

export default ButtonJual;
