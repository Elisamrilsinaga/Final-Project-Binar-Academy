import { Box, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InfoProduk from "../global/InfoProduk";

const CardProduk = ({ product }) => {
  console.log(product)
  let navigate = useNavigate(); 
  return (
    <Box
      component={Link}
      onClick={()=>navigate("/daftar-jual/" + product.id)}
      p={1}
      sx={{
        width: "100%",
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
      {/* <Box> */}
        <Box
          component={"img"}
          src={ product.Image_Products[0].link }
          image
          width={"100%"}
          height={"10rem"}
          borderRadius={2}
        />
      {/* </Box> */}

      <InfoProduk key={product.id} product={product} />
    </Box>
  );
};

export default CardProduk;
