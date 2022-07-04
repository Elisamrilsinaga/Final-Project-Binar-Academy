import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  DialogContent,
  DialogTitle,
  Dialog,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Collapse,
  Alert,
} from "@mui/material";
import ButtonClick from "../global/ButtonClick";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Disabledbutton from "../global/Disabledbutton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
    width: 360,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 14,
            top: 6,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const ModalStatus = () => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [statusValue, setstatusValue] = useState("");
  const handleChangestatusValue = (event) => {
    setstatusValue(event.target.value);
  };
  console.log(statusValue);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"max-content"}
      justifyContent="flex-end"
      mb={3}
    >
      {/* Button Status */}
      <Box
        display={"flex"}
        width={"100%"}
        height={"max-content"}
        justifyContent="flex-end"
        mb={3}
      >
        <Box width={"20%"} mr={2}>
          <ButtonClick onClick={handleClickOpen} title={"Status"} />
        </Box>

        <Box width={"20%"}>
          <ButtonClick
            onClick={""}
            title={
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
              >
                Hubungi di &nbsp;<WhatsAppIcon sx={{ fontSize: "1.2rem" }} />
              </Box>
            }
            primary
          />
        </Box>
      </Box>

      {/* Modal Status */}
      <BootstrapDialog
        open={open}
        PaperProps={{
          style: { borderRadius: 16 },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Typography
            gutterBottom
            fontWeight={500}
            fontSize={14}
            color={"#000000"}
            mt={2}
          >
            Perbarui status penjualan produkmu
          </Typography>

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
              />
              <Typography
                fontSize={"14px"}
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
                fontSize={"14px"}
                color={"#8A8A8A"}
                fontWeight={400}
                ml={"2rem"}
              >
                Kamu membatalkan transaksi produk ini dengan pembeli
              </Typography>
            </RadioGroup>
          </FormControl>

          {/* Button */}
          <Box width={"100%"}>
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
                  handleClose(false);
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
        </DialogContent>
      </BootstrapDialog>

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
            top: "-1rem",
            left: "14rem",
            height: 52,
            width: 500,
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

export default ModalStatus;
