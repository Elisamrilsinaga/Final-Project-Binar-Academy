import React from "react";
import { Typography, Link, Box } from "@mui/material";

const ProdukDiminati = ({ productrans }) => {
  return (
    <Box
      key={productrans.id}
      component={Link}
      href={"/daftar-jual/" + productrans.product.id}
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
      <Box key={productrans.id}>
        <Box
          component={"img"}
          src={`https://scnd-appr-beta.herokuapp.com/${productrans.product.product_pictures[0].picture}`}
          image
          width={"100%"}
          height={"10rem"}
          borderRadius={2}
        />

        <Typography variant="subtitle1" mb={1}>
          {productrans.product.product}
        </Typography>
        <Typography variant="subtitle2" mb={1}>
          Rp. {productrans.product.price.toLocaleString("id-ID")}
        </Typography>
        <Typography variant="subtitle2" mb={1}>
          Menawar Rp. {productrans.bid_price.toLocaleString("id-ID")}
        </Typography>
        {/* <Typography variant="subtitle2">Status Penawaran : Diterima</Typography> */}
      </Box>
    </Box>
  );
};

export default ProdukDiminati;
