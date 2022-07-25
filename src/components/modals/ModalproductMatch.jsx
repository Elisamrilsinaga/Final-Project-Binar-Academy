import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@mui/material";
import ButtonClick from "../global/ButtonClick";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useDispatch } from "react-redux";
import { updateTransaction } from "../../redux/transaction";
import { CreateNotif } from "../../redux/notif";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
    width: 330,
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

const ModalproductMatch = ({ setStatus,product,transaction,setOpen,open }) => {
  // console.log(transaction)
  const dispatch = useDispatch();

  const handleTolak = () => {
    dispatch(updateTransaction({
      id: transaction.id,
      transactionStatus: "rejected"
    }))
    let data = {
      sellerId: transaction.seller_id,
      buyerId: transaction.user_id || transaction.User.id,
      productId: transaction.product_id,
      transactionId: transaction.id,
      message: "Penawaran Ditolak"
    }
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
      sellerId: transaction.seller_id,
      buyerId: transaction.user_id || transaction.User.id,
      productId: transaction.product_id,
      transactionId: transaction.id,
      message: "Berhasil Ditawar Rp " + transaction?.price_negotiate
    }
    console.log(data)
    dispatch(CreateNotif(data));
    setStatus("accepted");
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
      {/* Button Product Match */}
      <Box width={{xs: "100%", md:"20%"}} mr={2}>
        <ButtonClick onClick={handleTolak} title={"Tolak"} />
      </Box>
      <Box width={{xs: "100%", md:"20%"}}>
        <ButtonClick
          onClick={handleClickOpen}
          title={
            <Box display={"flex"} alignItems="center" justifyContent={"center"}>
              Terima
            </Box>
          }
          primary
        />
      </Box>

      {/* Modal Product Match */}
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
            Yeay kamu berhasil mendapat harga yang sesuai
          </Typography>
          <Typography
            gutterBottom
            fontWeight={400}
            color={"#8A8A8A"}
            fontSize={14}
            mb={2}
          >
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </Typography>

          <Box borderRadius="16px" backgroundColor="#EEEEEE">
            <Typography textAlign={"center"} p={2}>
              Product Match
            </Typography>
            {/* User */}
            <Box display="flex">
              <Box
                component="img"
                alt=""
                src={transaction?.User.user_image}
                borderRadius="16px"
                width="68px"
                height="68px"
                margin={2}
                mt={1}
              />

              <Typography mt={3} alignItems="center">
                <Typography>{transaction?.User.user_name}</Typography>
                <Typography fontSize={12} color={"#8A8A8A"}>
                  {transaction?.User.city}
                </Typography>
              </Typography>
            </Box>

            {/* Product */}
            <Box display="flex">
              <Box
                component="img"
                alt="camera"
                src={transaction?.Product?.product_image}
                borderRadius="16px"
                width="68px"
                height="68px"
                margin={2}
                mt={0}
              />

              <Typography alignItems="center">
                <Typography>{transaction?.Product?.product_name} </Typography>
                <Typography
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  Rp. {transaction?.Product?.product_price.toLocaleString("id-ID")}
                </Typography>
                <Typography>Ditawar Rp {transaction?.price_negotiate.toLocaleString("id-ID")}</Typography>
              </Typography>
            </Box>
          </Box>

          {/* Button */}
          <Box width={"100%"}>
            <ButtonClick
              onClick={""}
              title={
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  Hubungi via WhatsApp &nbsp;
                  <WhatsAppIcon />
                </Box>
              }
              primary
            />
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
};

export default ModalproductMatch;
