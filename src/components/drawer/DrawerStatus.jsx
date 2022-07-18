import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Collapse,
  Alert,
  Button,
} from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ButtonClick from "../global/ButtonClick";
import { useDispatch } from "react-redux";
import Disabledbutton from "../global/Disabledbutton";
import CloseIcon from "@mui/icons-material/Close";
import { updateTransaction } from "../../redux/transaction";
import { updateProduct } from "../../redux/product";

const drawerBleeding = 16;

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

const DrawerStatus = ({window, setStatus,product,transaction,setOpen,open }) => {
  const [openAlert, setOpenAlert] = React.useState(open);
  const [statusValue, setstatusValue] = useState("");
  const dispatch = useDispatch()
  const handleChangestatusValue = (event) => {
    setstatusValue(event.target.value);
  };

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateStatus = () => {
    console.log(transaction)
    let transactionStatus = statusValue === "berhasil" ? "sold" : "rejected"
    dispatch(updateTransaction({
      id : transaction.id,
      transactionStatus : transactionStatus
    }))
    if(transactionStatus === "sold")
    dispatch(updateProduct({
      id: transaction.product_id,
      data: {
        productStatus : "sold"
      }
    }))
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box display={"flex"} justifyContent={"center"}>
      {/* Status */}
      <Button
        onClick={toggleDrawer(true)}
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
        Status
      </Button>
      {/* Hubungin WA */}
      <Button
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
        Hubungi &nbsp;
        <WhatsAppIcon sx={{ fontSize: "1.2rem" }} />
      </Button>

      {/* Drawer */}
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(52% - ${drawerBleeding}px)`,
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
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
                Perbarui status penjualan produkmu
              </Typography>
            </Box>

            {/* Radio Status */}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  checked={statusValue === "berhasil"}
                  onChange={handleChangestatusValue}
                  value="berhasil"
                  control={<Radio />}
                  label="Berhasil terjual"
                  sx={{ fontWeight: 400, fontSize: "12px" }}
                />
                <Typography
                  fontSize={"12px"}
                  color={"#8A8A8A"}
                  fontWeight={400}
                  ml={"2rem"}
                >
                  Kamu telah sepakat menjual produk ini kepada pembeli
                </Typography>
                <FormControlLabel
                  checked={statusValue === "batal"}
                  onChange={handleChangestatusValue}
                  value="batal"
                  control={<Radio />}
                  label="Batalkan transaksi"
                />
                <Typography
                  fontSize={"12px"}
                  color={"#8A8A8A"}
                  fontWeight={400}
                  ml={"2rem"}
                >
                  Kamu membatalkan transaksi produk ini dengan pembeli
                </Typography>
              </RadioGroup>
            </FormControl>

            {/* Button */}
            <Box width={"100%"} onClick={statusValue !== "" ? ()=>{toggleDrawer(false);updateStatus()}:undefined}>
              {statusValue === "" ? (
                <Disabledbutton
                  title={
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"center"}
                      color={"#000"}
                    >
                      Kirim
                    </Box>
                  }
                />
              ) : (
                <ButtonClick
                  onClick={() => {
                    handleClickOpenAlert(true);
                  }}
                  title={
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"center"}
                    >
                      Kirim
                    </Box>
                  }
                  primary
                />
              )}
            </Box>
          </StyledBox>
        </SwipeableDrawer>
      </Root>

      {/* Alert */}
      <Collapse in={openAlert} autoHideDuration={4000}>
        <Alert
          variant="filled"
          severity="success"
          icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            top: "3rem",
            left: "1rem",
            height: 42,
            width: 300,
            borderRadius: "12px",
            position: "absolute",
            alignItems: "center",
          }}
        >
          Status produk berhasil diperbarui
        </Alert>
      </Collapse>
    </Box>
  );
};

export default DrawerStatus;
