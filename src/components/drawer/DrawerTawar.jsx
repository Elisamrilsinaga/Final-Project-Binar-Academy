import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FormInput from "../global/FormInput";

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

const DrawerTawar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = React.useState("");
  const { window } = props;
  const { setDrawer } = props;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setDrawer(true);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
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
            <Typography id="drawer-drawer-title" variant="h6" component="h2">
              Masukan Harga Tawarmu
            </Typography>
            <Typography
              id="drawer-drawer-description"
              sx={{ mt: 2, fontWeight: 360 }}
            >
              Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
              akan segera dihubungi penjual.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            borderRadius="16px"
            backgroundColor="white"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.15)"
            width="22rem"
            mb={4}
            mt={2}
          >
            <Box
              display="flex"
              component="img"
              alt="camera"
              src="/images/jam1.png"
              borderRadius="16px"
              justifyContent="center"
              alignItems="center"
              width="6rem"
              margin={2}
            />
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              borderRadius="16px"
            >
              Jam Tangan Caslo Rp.250.000
            </Box>
          </Box>
          <Box
            width={"22rem"}
            sx={{
              margin: "2 auto",
            }}
          >
            <FormInput
              label="Harga Tawar"
              value={price}
              setValue={setPrice}
              placeholder="Rp 0,00"
              type={"text"}
            />
          </Box>
          <Button
            sx={{
              fontWeight: "bold",
              borderRadius: "16px",
              color: "white",
              backgroundColor: "#7126B5",
              height: "3rem",
              width: "22rem",
              textTransform: "none",
            }}
            variant="contained"
          >
            Kirim
          </Button>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default DrawerTawar;
