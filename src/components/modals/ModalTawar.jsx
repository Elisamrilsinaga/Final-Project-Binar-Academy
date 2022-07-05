import React, { useEffect } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../../redux/product";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "15px",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const ModalTawar = ({ setModal, setSubmit }) => {
  const handelSubmit = () => {
    setSubmit(true);
    setModal(false);
  };

  const { id } = useParams();
  const detail = useSelector((state) => state.product.productsDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductItem(id));
  }, [dispatch, id]);

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={() => setModal(false)}>
              <CloseOutlinedIcon />
            </Button>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Masukan Harga Tawarmu
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontWeight: 360 }}
          >
            Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            borderRadius="16px"
            backgroundColor="#EEEEEE"
            mt={2}
            mb={2}
          >
            <Box
              display="flex"
              component="img"
              alt="camera"
              src={`https://scnd-appr-beta.herokuapp.com/${detail.data?.product_pictures[0].picture}`}
              borderRadius="16px"
              justifyContent="center"
              alignItems="center"
              width="6rem"
              margin={2.6}
            />

            <Box alignItems="center" flexWrap="wrap" borderRadius="16px">
              <Typography variant="subtitle1" mb={1} mt={3}>
                {detail.data?.product}
              </Typography>
              <Typography variant="subtitle2">
                Rp. {detail.data?.price.toLocaleString("id-ID")}
              </Typography>
            </Box>
          </Box>
          <Typography fontSize={12} mb={1} mt={2}>
            Harga Tawar
          </Typography>
          <TextField
            sx={{ mb: "1rem", width: "340px" }}
            id="outlined-basic"
            placeholder="Rp 0,00"
            variant="outlined"
          />
          <Button
            onClick={handelSubmit}
            sx={{
              fontWeight: "bold",
              borderRadius: "16px",
              color: "white",
              backgroundColor: "#7126B5",
              height: "3rem",
              mb: 0,
              width: "340px",
              textTransform: "none",
            }}
            variant="contained"
          >
            Simpan
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalTawar;