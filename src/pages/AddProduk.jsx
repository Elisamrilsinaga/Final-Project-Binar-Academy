import React from "react";
import { useMediaQuery } from "@mui/material";
import AddProdukField from "../components/web/AddProdukField";
import HeaderM from "../containers/mobile/HeaderM";
import AddProdukFieldM from "../components/mobile/AddProdukFieldM";
import Header from "../containers/web/Header";

const AddProduk = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  return (
    <>
      {isMobile ? (
        <>
          <HeaderM title={"Lengkapi Detail Produk"} />
          <AddProdukFieldM />
        </>
      ) : (
        <>
          <Header title={"Lengkapi Detail Produk"} />
          <AddProdukField />
        </>
      )}
    </>
  );
};

export default AddProduk;
