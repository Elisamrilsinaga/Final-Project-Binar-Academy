import { Box, Typography } from "@mui/material";
import React from "react";
import InfoPembeli from "../../containers/global/InfoPembeli";
import DrawerProductMatch from "../drawer/DrawerProductMatch";
import DrawerStatus from "../drawer/DrawerStatus";

const InfoPenawaranM = () => {
  const [terima, setTerima] = React.useState(false);
  
  return (
    <Box>
      <InfoPembeli />
      <Box>
        <Typography px={2} fontWeight={500} fontSize={16}>
          Daftar Produkmu yang Ditawar
        </Typography>
        <Box p={2} borderBottom="1px solid #E5E5E5">
          <Box display={"flex"} mt={0} alignItems="center">
            <Box
              component={"img"}
              src={"/images/Jam1.png"}
              borderRadius={"10px"}
              width={"3rem"}
              height={"3rem"}
            />
            <Box ml={2} p={1}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="subtitle1"
                  fontSize={10}
                  color={"GrayText"}
                  lineHeight={2}
                >
                  Penawaran produk
                </Typography>
                <Typography
                  ml={"3rem"}
                  variant="subtitle1"
                  fontSize={10}
                  color={"GrayText"}
                  lineHeight={2}
                >
                  20 Apr, 14:04
                </Typography>
              </Box>
              <Typography variant="subtitle1" fontSize={14} lineHeight={"20px"}>
                Jam Tangan Casio
              </Typography>
              <Typography variant="subtitle1" fontSize={14} lineHeight={"20px"}>
                Rp. 250.000
              </Typography>
              <Typography variant="subtitle1" fontSize={14} lineHeight={"20px"}>
                Ditawar Rp 200.000
              </Typography>
            </Box>
          </Box>

          {terima ? (
            <DrawerStatus />
          ) : (
            <DrawerProductMatch setStatus={setTerima} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default InfoPenawaranM;
