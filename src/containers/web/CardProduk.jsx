import { Box, Link } from "@mui/material";
import React from "react";
import InfoProduk from "../global/InfoProduk";

const CardProduk = ({ product }) => {
  return (
    <Box
      component={Link}
      href={"/daftar-jual/" + product.id}
      p={1}
      sx={{
        width: "352px",
        textDecoration: "none",
        cursor: "pointer",
        borderRadius: "10px",
        color: "black",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box>
        <Box
          component={"img"}
          src={ product.product_image}
          image
          width={"100%"}
          height={"10rem"}
          borderRadius={2}
        />
      </Box>

      <InfoProduk key={product.id} product={product} />
    </Box>
  );
};

export default CardProduk;
