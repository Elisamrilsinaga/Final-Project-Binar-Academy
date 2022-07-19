import { useMediaQuery, Typography } from "@mui/material";

const InfoProduk = ({ product }) => {
  const isMobile = useMediaQuery("(max-width:425px)");
  // console.log(product)
  return (
    <>
      <Typography variant="subtitle1" mb={1} noWrap={false} fontSize={{xs:".85rem", md:"1rem"}}>
        {product.product}
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={1} fontSize={{xs:".7rem", md:"1rem"}}>
        {product.product_category}
      </Typography>
      <Typography variant="subtitle2" color="textPrimary" mb={1} >
        {product.product_name}
      </Typography>
      <Typography variant="subtitle2" fontSize={{xs:".8rem", md:"1rem"}}>
        Rp. {product.product_price?.toLocaleString("id-ID")}
      </Typography>
    </>
  );
};

export default InfoProduk;
