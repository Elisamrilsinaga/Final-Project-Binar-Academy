import React from "react";
import AddProdukField from "../components/web/AddProdukField";
import Header from "../containers/web/Header";

const AddProduk = () => {
  return (
    <>
      <Header title={"Lengkapi Detail Produk"} />
      <AddProdukField />
    </>
  );
};

export default AddProduk;
