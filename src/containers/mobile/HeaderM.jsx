import React from "react";
import { Box } from "@mui/material";
import ButtonBack from "../../components/buttons/ButtonBack";

const HeaderAddProdukM = ({ title }) => {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="start"
      alignItems="center"
      height="50px"
      padding="0px 1rem"
    >
      <Box display="flex" alignItems="center" mt={1} color={"black"}>
        <ButtonBack />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="60rem"
        fontSize={14}
      >
        {title}
      </Box>
    </Box>
  );
};

export default HeaderAddProdukM;
