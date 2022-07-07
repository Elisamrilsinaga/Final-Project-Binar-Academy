import { useMediaQuery, Typography } from "@mui/material";

const InfoProduk = ({ product }) => {
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <>
      {isMobile ? (
        <>
          <Typography variant="subtitle1" fontSize={".85rem"} mb={1} noWrap>
            {product.product}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            fontSize={".7rem"}
            mb={1}
          >
            {product.product_category}
          </Typography>
          <Typography variant="subtitle2" fontSize={".8rem"}>
            Rp. {product.product_price.toLocaleString("id-ID")}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="subtitle1" mb={1}>
            {product.product}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={1}>
            {product.product_category}
          </Typography>
          <Typography variant="subtitle2">
            Rp. {product.product_price.toLocaleString("id-ID")}
          </Typography>
        </>
      )}
    </>
  );
};

export default InfoProduk;
