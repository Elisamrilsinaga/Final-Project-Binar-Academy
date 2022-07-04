import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContainersBox from "../global/ContainersBox";
import InfoPenjual from "../../containers/global/InfoPenjual";

import ModalproductMatch from "../modals/ModalproductMatch";
import ModalStatus from "../modals/ModalStatus";

const InfoPenawaran = () => {
  let navigate = useNavigate();
  const [terima, setTerima] = React.useState(false);
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        width={"60rem"}
        sx={{
          margin: "0 auto",
          position: "relative",
          marginTop: "2rem",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Button
            onClick={() => navigate(-1)}
            sx={{
              position: "fixed",
              left: "8rem",
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

          <ContainersBox data={<InfoPenjual />} />
        </Box>

        <Typography variant="h6" mb={1}>
          Daftar Produkmu yang Ditawar{" "}
        </Typography>
        <Box display={"flex"} mt={2} borderBottom="1px solid #E5E5E5">
          <Box
            component={"img"}
            src={
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            }
            sx={{
              width: "4rem",
              height: "4rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              marginRight: "2rem",
            }}
          />
          <Box width={"100%"}>
            <Box>
              <Box display={"flex"} justifyContent="space-between">
                <Typography variant="caption" color={"GrayText"} mb={1}>
                  Penawaran produk
                </Typography>
                <Typography variant="caption" color={"GrayText"} mb={1}>
                  20 Apr, 14:04
                </Typography>
              </Box>
              <Typography variant="subtitle1" mb={1}>
                Produk 1
              </Typography>
              <Typography variant="subtitle2" mb={1}>
                Rp. 250.000
              </Typography>
              <Typography variant="subtitle1" mb={1}>
                Ditawar Rp 200.000
              </Typography>
            </Box>
            {terima ?
              <ModalStatus /> :
              <ModalproductMatch setStatus={setTerima} />
            }
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InfoPenawaran;
