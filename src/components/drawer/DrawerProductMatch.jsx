import React from "react";
import { Box, Button } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useDispatch } from "react-redux";
import { updateTransaction } from "../../redux/transaction";
import { CreateNotif } from "../../redux/notif";

const drawerBleeding = 20;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 70,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[400],
  borderRadius: 3,
  position: "relative",
  top: 16,
  left: "calc(50% - 30px)",
}));

const DrawerProductMatch = (props) => {
  
  const { window } = props;
  const { setStatus,transaction,product,open,setOpen } = props;

  const dispatch = useDispatch();

  const handleTolak = () => {
    dispatch(updateTransaction({
      id: transaction.id,
      transactionStatus: "rejected"
    }))
    let data = {
      receiver: transaction.user_id,
      productId: transaction.product_id,
      transactionId: transaction.id,
      message: "Penawaran diterima"
    }
    console.log(data)
    dispatch(CreateNotif(data));
    setStatus("rejected");
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(updateTransaction({
      id: transaction.id,
      transactionStatus: "accepted"
    }))
    let data = {
      receiver: transaction.user_id,
      productId: transaction.product_id,
      transactionId: transaction.id,
      message: "Penawaran diterima"
    }
    console.log(data)
    dispatch(CreateNotif(data));
    setStatus("accepted");
    setOpen(false);
  };

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  //   setStatus(true);
  // };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box display={"flex"} justifyContent={"center"}>
      {/* Tolak */}
      <Button
        onClick={handleTolak}
        sx={{
          fontWeight: 380,
          borderRadius: "16px",
          color: "black",
          backgroundColor: "white",
          height: "2rem",
          mt: 2,
          mr: 2,
          width: "240px",
          border: "1px solid #7126B5",
          textTransform: "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
        variant="contained"
      >
        Tolak
      </Button>
      {/* Terima */}
      <Button
        onClick={handleClickOpen}
        sx={{
          fontWeight: 380,
          borderRadius: "16px",
          color: "white",
          backgroundColor: "#7126B5",
          height: "2rem",
          mt: 2,
          width: "240px",
          textTransform: "none",
        }}
        variant="contained"
      >
        Terima
      </Button>

      {/* Drawer */}
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(65% - ${drawerBleeding}px)`,
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onOpen={handleClickOpen}
          onClose={handleClose}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              visibility: "invisible",
              right: 0,
              left: 0,
              height: "100%",
              px: 4,
              overflow: "auto",
            }}
          >
            <Puller />
            <Box mt={4}>
              <Typography
                id="drawer-drawer-title"
                fontSize={"12px"}
                fontWeight={400}
              >
                Yeay kamu berhasil mendapat harga yang sesuai
              </Typography>
              <Typography
                id="drawer-drawer-description"
                fontSize={"12px"}
                fontWeight={400}
                color={"#8A8A8A"}
                mt={1}
              >
                Segera hubungi pembeli melalui whatsapp untuk transaksi
                selanjutnya
              </Typography>
            </Box>

            {/* Product Match */}
            <Box
              borderRadius="16px"
              backgroundColor="#FFFFFF"
              boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.15)"}
              my={2}
            >
              <Typography
                textAlign={"center"}
                p={2}
                fontSize={12}
                fontWeight={400}
              >
                Product Match
              </Typography>
              {/* User */}
              <Box display="flex">
                <Box
                  component="img"
                src={transaction?.User.user_image}
                  borderRadius="16px"
                  width="48px"
                  height="48px"
                  margin={2}
                  mt={0}
                />

                <Typography mt={1} alignItems="center">
                  <Typography fontSize={12} fontWeight={400}>
                  {transaction?.User.user_name}
                  </Typography>
                  <Typography fontSize={10} color={"#8A8A8A"}>
                {transaction?.User.city}
                  </Typography>
                </Typography>
              </Box>

            {/* Product */}
              <Box display="flex">
                <Box
                  component="img"
                  alt=""
                  src={transaction?.Product?.product_image}
                  borderRadius="16px"
                  width="48px"
                  height="48px"
                  margin={2}
                  mt={0}
                />

                <Typography alignItems="center">
                  <Typography fontSize={12} fontWeight={400}>
                    {transaction?.Product?.product_name}
                  </Typography>
                  <Typography
                    style={{
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                    }}
                    fontSize={12}
                    fontWeight={400}
                  >
                    Rp. {transaction?.Product?.product_price.toLocaleString("id-ID")}
                  </Typography>
                  <Typography fontSize={12} fontWeight={400}>
                    Ditawar Rp {transaction?.price_negotiate.toLocaleString("id-ID")}
                  </Typography>
                </Typography>
              </Box>
            </Box>

            {/* Button */}
            <Button
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                borderRadius: "16px",
                color: "white",
                backgroundColor: "#7126B5",
                width: "100%",
                textTransform: "none",
              }}
              variant="contained"
            >
              Hubungi via WhatsApp &nbsp;
              <WhatsAppIcon />
            </Button>
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </Box>
  );
};

export default DrawerProductMatch;
