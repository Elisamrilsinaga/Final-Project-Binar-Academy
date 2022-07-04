import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link } from "react-router-dom";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import DropzonePic from "../global/DropzonePic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import product, { fetchCreateProduct } from "../../redux/product";
import { createProduct } from "../../redux/product";

const AddProdukField = () => {

  const kategori = [
    "Semua",
    "Hobi",
    "Kendaraan",
    "Baju",
    "Elektronik",
    "kesehatan",
  ];
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const createProducts = useSelector((state) => state.product.productUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCreateProduct());
  }, [dispatch]);

  console.log(createProducts);

  return (
    <Box>
      <Box display="flex" justifyContent="center" margin="2rem">
        <Box display="flex" width="4rem" color="black">
          <Link to="/daftar-jual">
            <ArrowBackOutlinedIcon />
          </Link>
        </Box>

        {/* Field */}
        <Box display="flex" flexDirection="column">
          <FormInput
            label="Nama Produk"
            type="text"
            placeholder="Contoh: Baju Batik"
            onChange={(e) => {setName(e.target.value)}}
          />
          <FormInput
            label="Harga"
            type="text"
            placeholder="Rp 0,00"
            onChange={(e) => {setPrice(e.target.value)}}
          />
          <FormInput
            label="Kategori"
            type="select"
            placeholder="Pilih Kategori"
            select={kategori}
            onChange={(e) => {setCategory(e.target.value)}}
          />
          <FormInput
            label="Deskripsi"
            type="textarea"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            onChange={(e) => {setDescription(e.target.value)}}
          />
          {/* Foto Produk */}
          <Typography fontSize={12} mb={1} mr={50}>
            Foto Produk
          </Typography>
          {/* From global component */}
          <DropzonePic />

          {/* Button */}
          <Box display={"flex"} justifyContent={"center"}>
            {/* Preview */}
            <Box width={"100%"} mr={1}>
              <ButtonClick title="Preview" />
            </Box>
            {/* Terbitkan */}
            <Box width={"100%"}>
              <ButtonClick onClick={() => {dispatch(createProduct({ id: product[product.lenght-1].id+1, name, price, category, description}))}} title="Terbitkan" primary />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProdukField;
