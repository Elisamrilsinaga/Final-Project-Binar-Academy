import { Box, Link } from "@mui/material";
import InfoProduk from "../global/InfoProduk";

const CardProdukM = ({ product }) => {
  return (
    <Box
      component={Link}
      href={"/daftar-jual/" + product.id}
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
          src={`https://scnd-appr-beta.herokuapp.com/${product.product_pictures[0].picture}`}
          width={"100%"}
          height={"5rem"}
          borderRadius={2}
        />
      </Box>
      <InfoProduk key={product.id} product={product} />
    </Box>
  );
};

export default CardProdukM;
