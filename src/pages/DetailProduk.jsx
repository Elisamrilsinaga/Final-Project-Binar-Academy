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

const DetailProduk = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [wait, setWait] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:425px)");
  let navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.product.productsDetail);
  const buyer = localStorage.getItem("uid", true);
  
  useEffect(() => {
    dispatch(fetchProductItem(id));
  }, [dispatch, id]);

  return (
    <>
      {isMobile ? (
        <>
          {openDrawer && (
            <DrawerTawar setDrawer={setOpenDrawer} setSubmit={setWait} />
          )}
          <ImageSlider />
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

          <Box
            sx={{
              position: "fixed",
              bottom: "20px",
              zIndex: "99",
              width: "90%",
              left: "5%",
            }}
          >
            {detail.data && detail.data.User.id == buyer ? (
              <>
                <ButtonClick title="Terbitkan" primary />
                <ButtonClick title="Edit" />
              </>
            ) : wait ? (
              <>
                <ButtonClick title="Menunggu respons Penjual" disabled />
              </>
            ) : (
              <>
                <ButtonClick
                  title="Saya tertarik dan ingin nego"
                  primary
                  onClick={() => setOpenDrawer(true)}
                />
              </>
            )}
          </Box>

          <Box
            mx={2}
            mb={6}
            sx={{
              position: "relative",
              top: "-30px",
              zIndex: "1",
            }}
          >
            <ContainersBox
              data={<InfoProdukDetail key={detail.data && detail.data.id} detail={detail} />}
            />
            <ContainersBox data={<InfoPenjual penjual={detail.data && detail.data.User} />} />
            <ContainersBox
              data={
                <>
                  <Typography variant="body1" mb={1}>
                    Deskripsi{" "}
                  </Typography>
                  <Typography variant="caption" color="#8A8A8A">
                    {detail.data?.product_desc}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="caption" color="#8A8A8A">
                    {detail.data?.product_desc}
                  </Typography>
                </>
              }
            />
          </Box>
        </>
      ) : (
        <>
          {openModal && (
            <ModalTawar setModal={setOpenModal} setSubmit={setWait} />
          )}
          <Header />
          <Grid container spacing={3} px={28} mt={4} sx={{}}>
            <Grid item xs={12} md={7}>
              <Box
                position={"relative"}
                width={"100%"}
                height={"500px"}
                mb={2}
                borderRadius="20px"
              >
                <ImageSlider />
              </Box>
              <ContainersBox
                data={
                  <>
                    <Typography variant="body1" mb={1}>
                      Deskripsi{" "}
                    </Typography>
                    <Typography variant="caption" color="#8A8A8A">
                      {detail.data?.product_desc}
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="caption" color="#8A8A8A">
                      {detail.data?.product_desc}
                    </Typography>
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <ContainersBox
                data={
                  <>
                    <InfoProdukDetail key={detail.data && detail.data.id} detail={detail} />
                    {detail.data && detail.data.User.id == buyer ? (
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
                        <ButtonClick
                          title="Saya tertarik dan ingin nego"
                          primary
                          onClick={() => setOpenModal(true)}
                        />
                      </>
                    )}
                  </>
                }
              />
              <ContainersBox data={<InfoPenjual penjual={detail.data && detail.data.User} />} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default DetailProduk;
