import React from "react";
import { useMediaQuery } from "@mui/material";
import InfoPenawaran from "../components/web/InfoPenawaran";
import Header from "../containers/web/Header";

const Penawaran = () => {
  
  return (
    <>
      <Header title={"Info Penawaran"} />
      <InfoPenawaran />
    </>
  );
};

export default Penawaran;
