import { Typography } from "@mui/material";

const InfoProdukDetail = ({ detail }) => {
  return (
    <>
      <Typography variant="subtitle1" mb={1} fontSize= {{xs : ".85rem", md : "1rem"} } noWrap={{xs: true, md: false}}>
        {detail.data?.product_name}
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={1} fontSize= {{xs : ".7rem", md : "1rem"} }>
        {detail.data?.product_category}
      </Typography>
      <Typography variant="subtitle2" fontSize= {{xs : ".8rem", md : "1rem"} }>
        Rp. {detail.data?.product_price.toLocaleString("id-ID")}
      </Typography>
    </>
  );
};

export default InfoProdukDetail;
