import React from "react";
import UpdateProdukField from "../components/fields/UpdateProdukField";
import Header from "../containers/web/Header";

const UpdateProduk = () => {
  return (
    <>
      <Header title={"Lengkapi Detail Produk"} />
      <UpdateProdukField />
    </>
  );
};

export default UpdateProduk;
