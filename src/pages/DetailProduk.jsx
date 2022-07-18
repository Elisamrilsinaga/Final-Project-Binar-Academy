import React, { useEffect } from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Header from "../containers/web/Header";
import ImageSlider from "../components/web/ImageSlider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import ContainersBox from "../components/global/ContainersBox";
import InfoProdukDetail from "../containers/global/InfoProdukDetail";
import InfoPenjual from "../containers/global/InfoPenjual";
import ButtonClick from "../components/global/ButtonClick";
import ModalTawar from "../components/modals/ModalTawar";
import DrawerTawar from "../components/drawer/DrawerTawar";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../redux/product";
import { fetchTransaction } from "../redux/transaction";
import { GetProfile } from "../redux/profile";
import { GetAllNotif,CreateNotif } from "../redux/notif";


const DetailProduk = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [wait, setWait] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:425px)");
  let navigate = useNavigate();
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.product.productsDetail);
  const profile = useSelector((state) => state.profile.profile.data);
  const transactions = useSelector((state) => state.transaction.transactions);
  const notifs = useSelector((state) => state.notif.notifs.data);

  useEffect(() => {
    let found = Array.isArray(transactions) ? transactions?.findIndex(x => x.product_id === detail?.data?.id ) : -1
    if(!wait) return
    let checkNotif = Array.isArray(notifs) ? notifs?.findIndex(x => x?.transaction_id === transactions[found]?.id ) : -1
    console.log(checkNotif,transactions[found])
    if(checkNotif === -1 && transactions[found]?.user_id && transactions[found]?.product_id && transactions[found]?.id){
      let data = {
        seller: transactions[found].user_id,
        productId: transactions[found].product_id,
        transactionId: transactions[found].id,
        title: "Penawaran",
        message: "Penawaran Product"
      }
      console.log(data)
      dispatch(CreateNotif(data));
    }
  }, [wait])

  useEffect(() => {
    let found = Array.isArray(transactions) ? transactions?.findIndex(x => x.product_id === detail?.data?.id ) : -1
    setWait(found !== -1)
    console.log(wait)
    
  }, [transactions]);

  useEffect(() => {
    dispatch(fetchProductItem(id));
    dispatch(fetchTransaction());
    dispatch(GetProfile());
    dispatch(GetAllNotif());
  }, [dispatch, id, openModal]);
 
  return (
    <>
          {/* <Box  > */}
              {openModal && !isMobile && (
                <Box display={{xs:"none",md:"block"}}>
                  <ModalTawar setModal={setOpenModal} setSubmit={setWait} detail={detail}/>
                </Box>
              )}
              {openModal && isMobile && (
              <Box display={{xs:"block",md:"none"}}>
                <DrawerTawar setDrawer={setOpenModal} setSubmit={setWait} detail={detail} />
              </Box>
               )} 
          {/* </Box> */}
              
          <Box display={{xs: "none", md: "block"}}>
            <Header />
          </Box>
          <Box display={{xs: "block", md: "none"}}>
            <Button
              onClick={() => navigate(-1)}
              sx={{
                position: "fixed",
                top: "20px",
                left: "0",
                zIndex: "99",
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
          </Box>
          <Grid container 
          width={"100%"}
          spacing={{xs:0,md:3}} px={{xs: 0, md:28}} mt={{xs:0,md:4}} sx={{}}
          display={"flex"} flexDirection={{xs: "column-reverse", md:"row"}}
          >
            <Grid 
            item xs={12} md={7}
            
            >
              <Box
                // position={"relative"}
                width={"100%"}
                height={{xs:"300px",md:"400px"}}
                // mt={"200px"}
                // borderRadius="20px"
              >
                <ImageSlider />
              </Box>
              <Box p={{xs: "16px",md:"0"}} mt={{xs: "100px",md:"16px"}} position={{xs:"absolute", md: "relative"}} width = {"100%"}>
                  
              <ContainersBox
                
                data={
                  <>
                    <Typography variant="body1" mb={1}>
                      Deskripsi{" "}
                    </Typography>
                    <br />
                    <Typography variant="caption" color="#8A8A8A">
                      {detail.data?.product_desc}
                    </Typography>
                  </>
                }
              />
              </Box>
            </Grid>
            <Grid 
            // item xs={12} md={5}
                position={{xs:"absolute", md: "relative"}}
                flexGrow={{xs:0,md:1}}
              width={{xs:"100%",md:"auto"}}
              mt={{xs: wait? "-630px" : "0", md:4}}
              mb={{xs: "-110px",md:0}}
              ml={{md:4}}
              px={{xs: "16px", md:0}}
              zIndex={2}
            >
              <ContainersBox
                // borderRadius="20px"  
                
                data={
                  <>
                    <InfoProdukDetail key={detail.data && detail.data.id} detail={detail} />
                    {detail.data?.User?.user_name === profile?.user_name ? (
                      <>
                        <ButtonClick title="Terbitkan" primary />
                        <ButtonClick title="Edit" />
                      </>
                    ) : wait ? (
                      <>
                        <ButtonClick
                          title="Menunggu respons Penjual"
                          disabled
                        />
                      </>
                    ) : (
                      <>
                        <Box position={{xs: "fixed", md:"relative"}} bottom={{xs: "5%"}} width={{xs:"80%", md:"100%"}}>
                        <ButtonClick
                          title="Saya tertarik dan ingin nego"
                          primary
                          onClick={() => {setOpenModal(true)}}
                        />
                        </Box>
                      </>
                    )}
                  </>
                }
              />
              <ContainersBox data={<InfoPenjual penjual={detail.data && detail.data.User} />} />
            </Grid>
          </Grid>
        </>
  );
};

export default DetailProduk;
