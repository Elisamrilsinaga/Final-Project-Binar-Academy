import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Typography, Link, Box } from "@mui/material";
import apisecondhand from "../../redux/apis/apisecondhand";
import { sellerTransaction } from "../../redux/transaction";
import { useDispatch, useSelector } from "react-redux";

const ProdukDiminati = ({ productrans }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {state} = useLocation();

  const [detail,setDetail] = useState({});
  useEffect(() => {
    (async()=>{
      const response = await apisecondhand.get(`/product/${productrans?.product_id}`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
      });
      setDetail(response.data?.data)
    })()
  }, [productrans]);

  return (
    <Box
      key={productrans.id}
      component={Link}
      onClick={()=>navigate("/penawaran",{ state:{transaction: productrans} })}
      p={1}
      sx={{
        width: {xs: "350px", md:"435px"},
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
     <Box display={"flex"} mt={2} >
          <Box
            component={"img"}
            src={
              detail && detail.Image_Products && detail.Image_Products.length > 0 ? detail.Image_Products[0].link  : ""
            }
            sx={{
              width: "4rem",
              height: "4rem",
              mr:"1rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              // marginRight: "2rem",
            }}
          />
          <Box width={"100%"}>
            <Box>
              <Box display={"flex"} justifyContent="space-between">
                <Typography variant="caption" color={"GrayText"} mb={1}>
                  Penawaran produk
                </Typography>
                {/* <Typography variant="caption" color={"GrayText"} mb={1}>
                  20 Apr, 14:04
                </Typography> */}
              </Box>
              <Typography variant="subtitle1" mb={1}>
                {detail?.product_name}
              </Typography>
              <Typography variant="subtitle2" mb={1}>
                Rp. {detail?.product_price?.toLocaleString("id-ID")}
              </Typography>
              <Typography variant="subtitle1" mb={1}>
                Ditawar Rp {productrans?.price_negotiate?.toLocaleString("id-ID")}
              </Typography>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default ProdukDiminati;
