import React from "react";
import { useMediaQuery } from "@mui/material";
import InfoPenawaran from "../components/web/InfoPenawaran";
import Header from "../containers/web/Header";
import HeaderM from "../containers/mobile/HeaderM";
import InfoPenawaranM from "../components/global/InfoPenawaranM";

const Penawaran = () => {
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <>
      {isMobile ? (
        <>
          <HeaderM title={"Info Penawaran"} />
          <InfoPenawaranM />
        </>
      ) : (
        <>
          <Header title={"Info Penawaran"} />
          <InfoPenawaran />
        </>
      )}
    </>
  );
};

export default Penawaran;
