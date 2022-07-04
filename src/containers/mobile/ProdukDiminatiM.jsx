import React from "react";
import { Typography, Link, Box } from "@mui/material";

const ProdukDiminatiM = ({ productrans }) => {
  return (
    <Box
      key={productrans.id}
      component={Link}
      href={"/daftar-jual/" + productrans.product.id}
      p={1}
      sx={{
        width: "8.6rem",
        height: "calc(10.5rem + 2px)",
        textDecoration: "none",
        borderRadius: "10px",
        color: "black",
        flex: "0 0 auto",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box>
        <Box
          component={"img"}
          src={`https://dev-second-hand.herokuapp.com/${productrans.product.product_pictures[0].picture}`}
          image
          width={"100%"}
          height={"5rem"}
          borderRadius={2}
        />
        <Typography variant="subtitle1" fontSize={".85rem"} mb={1} noWrap>
          {productrans.product.product}
        </Typography>
        <Typography variant="subtitle1" fontSize={".8rem"} mb={1}>
          Rp. {productrans.product.price.toLocaleString("id-ID")}
        </Typography>
        <Typography variant="subtitle2" fontSize={".8rem"}>
          Menawar Rp. {productrans.bid_price.toLocaleString("id-ID")}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProdukDiminatiM;
