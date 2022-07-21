import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Box, Typography, useMediaQuery } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContainersBox from "../global/ContainersBox";
import InfoPenjual from "../../containers/global/InfoPenjual";
import { useDispatch, useSelector } from "react-redux";
import ModalproductMatch from "../modals/ModalproductMatch";
import ModalStatus from "../modals/ModalStatus";
import DrawerProductMatch from "../drawer/DrawerProductMatch";
import DrawerStatus from "../drawer/DrawerStatus";
import { sellerTransaction } from "../../redux/transaction";

const InfoPenawaran = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const {state} = useLocation()
  const isMobile = useMediaQuery("(max-width:425px)");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  console.log(state?.transaction.product_id)

  const transactions = useSelector((state) => state.transaction.sellerTransaction);
  const detail = transactions?.data  && transactions.data.find(x=> x.id ===  state?.transaction.id && x.user_id ===  state?.transaction.user_id)
  
  const [terima, setTerima] = React.useState(false);
  // console.log(detail)

  useEffect(() => {
    dispatch(sellerTransaction({id:state?.transaction.product_id}));
  }, [dispatch, state, openModal]);

  useEffect(()=> {
    if(!state) navigate("/daftar-jual")
    setTerima(detail?.transaction_status)
  }, [detail])

  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={{xs: "100%", md:"50%"}}
        sx={{
          margin: "0 auto",
          position: "relative",
          marginTop: {xs:0,md:"2rem"},
        }}
        padding="16px"
        borderBottom="1px solid #E5E5E5"
      >
        <Box display="flex" justifyContent="center">
          <Button
            onClick={() => navigate(-1)}
            sx={{
              position: "fixed",
              left: "8rem",
              zIndex: "99",
              display:{xs:"none",md:"flex"}
            }}
          >
            <ArrowBackIcon
              style={{
                fontSize: "30px",
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
              }}
            />
          </Button>

          <ContainersBox data={<InfoPenjual penjual={detail?.User} />} />
        </Box>

        <Typography variant="h6" mb={1}>
          Daftar Produkmu yang Ditawar{" "}
        </Typography>
        <Box display={"flex"} mt={2} >
          <Box
            component={"img"}
            src={
              detail?.Product?.product_image
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
                {detail?.Product?.product_name}
              </Typography>
              <Typography variant="subtitle2" mb={1}>
                Rp. {detail?.Product?.product_price.toLocaleString("id-ID")}
              </Typography>
              <Typography variant="subtitle1" mb={1}>
                Ditawar Rp {detail?.price_negotiate.toLocaleString("id-ID")}
              </Typography>
            </Box>
          </Box>
        </Box>
        
        { !isMobile && 
        <Box display={{xs: "none", md: "block"}}>
            {terima === "waiting" ?
              <ModalproductMatch open={openModal} setOpen={setOpenModal} setStatus={setTerima} product={detail?.product} transaction={detail}/> :
              terima === "accepted" ?
              <ModalStatus open={openModal} setOpen={setOpenModal} setStatus={setTerima} product={detail?.product} transaction={detail}/>  :
              <Typography variant="caption" color={"GrayText"} mb={1}>
                Transaksi {terima === "rejected" ? "ditolak" : "diterima"}
              </Typography>
            }
        </Box>
        }
        { isMobile && 
          <Box display={{xs: "block", md: "none"}}>
              {terima === "waiting"  ?
                <DrawerProductMatch open={openModal} setOpen={setOpenModal} setStatus={setTerima} product={detail?.product} transaction={detail}/> :
                terima === "accepted" ?
                <DrawerStatus open={openModal} setOpen={setOpenModal} setStatus={setTerima} product={detail?.product} transaction={detail}/> : 
                <Typography variant="caption" color={"GrayText"} mb={1}>
                  Transaksi {terima === "rejected" ? "ditolak" : "diterima"}
                </Typography>
              }
          </Box>
        }
      </Box>
    </>
  );
};

export default InfoPenawaran;
