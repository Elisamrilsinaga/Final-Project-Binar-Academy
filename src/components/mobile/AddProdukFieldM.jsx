import React from "react";
import { Box, Typography } from "@mui/material";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import DropzonePic from "../global/DropzonePic";

const AddProdukFieldM = () => {
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
  return (
    <Box p={1.5} alignItems="center">
      <Box display="flex" flexDirection="column">
        <FormInput
          label="Nama Produk"
          type="text"
          placeholder="Contoh: Baju Batik"
          value={name}
          setValue={setName}
        />
        <FormInput
          label="Harga"
          type="text"
          placeholder="Rp 0,00"
          value={price}
          setValue={setPrice}
        />
        <FormInput
          label="Kategori"
          type="select"
          placeholder="Pilih Kategori"
          select={kategori}
          value={category}
          setValue={setCategory}
        />
        <FormInput
          label="Deskripsi"
          type="textarea"
          placeholder="Contoh: Jalan Ikan Hiu 33"
          value={description}
          setValue={setDescription}
        />

        {/* Foto Produk */}
        <Typography fontSize={12} mt={1.4} mb={0.4}>
          Foto Produk
        </Typography>
        <DropzonePic />

        {/* Button */}
        <Box display={"flex"} justifyContent={"center"}>
          {/* Preview */}
          <Box width={"100%"} mr={1}>
            <ButtonClick title="Preview" />
          </Box>
          {/* Terbitkan */}
          <Box width={"100%"}>
            <ButtonClick title="Terbitkan" primary />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProdukFieldM;
