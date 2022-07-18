import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link } from "react-router-dom";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import DropzonePic from "../global/DropzonePic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  { fetchCategories, fetchCreateProduct } from "../../redux/product";

const AddProdukField = () => {
  let navigate = useNavigate(); 
  const [error,setError] = React.useState({})
  const [submit,setSubmit] = React.useState(false)
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const dispatch = useDispatch();
  const [files, setFiles] = React.useState([]);

  const products = useSelector((state) => state.product.categories);
  const kategori = products?.data  && [... new Set(products.data.map(x => x.product_category).filter(x=>x !== "jam" && x !== "jam tangan"))]

  const validation = () => {
      const err = {
          name : name ? null : "Mohon masukkan nama",
          files: files.length <= 0 ? "Mohon masukkan gambar" : null,
          price: price && parseInt(price) > 0 ? null : "Mohon masukkan harga",
          description: description ? null : "Mohon masukkan deskripsi",
          category: category ? null : "Mohon pilih kategori",
      }
      setError(err)
  }

  const handleSubmit = () => {
    setSubmit(true)
    if(!Object.values(error).every(x => x === null))
    return
    let data = {
      productName : name,
      picture : files[0],
      productPrice : parseInt(price),
      productDesc : description,
      productCategory : category
    }
    console.log(data)
    dispatch(fetchCreateProduct(data ));
    navigate("/daftar-jual")
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    validation()
  }, [name,files,price,description,category])

  return (
    <Box maxWidth={"100%"}>
      <Box display="flex" justifyContent="center" margin="2rem">
        <Box display={{xs:"none",md:"flex"}} width="4rem" color="black">
          <Link to="/daftar-jual">
            <ArrowBackOutlinedIcon />
          </Link>
        </Box>

        {/* Field */}
        <Box width={{xs:"100%",md:"fit-content"} } display="flex" flexDirection="column">
          <FormInput
            label="Nama Produk"
            type="text"
            placeholder="Contoh: Baju Batik"
            setValue={setName}
            value={name}
          />
          {submit&&error.name && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.name}</Typography>}
          <FormInput
            label="Harga"
            type="text"
            placeholder="Rp 0,00"
            setValue={setPrice}
            value={price}
          />
          {submit&&error.price && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.price}</Typography>}

          <FormInput
            label="Kategori"
            type="select"
            placeholder="Pilih Kategori"
            select={kategori}
            value={category}
            setValue={setCategory}
          />
          {submit&&error.category && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.category}</Typography>}
          <FormInput
            label="Deskripsi"
            type="textarea"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            value={description}
            setValue={setDescription}
          />
          {submit&&error.description && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.description}</Typography>}
          {/* Foto Produk */}
          <Typography fontSize={12} mb={1} mr={50}>
            Foto Produk
          </Typography>
          {/* From global component */}
          <DropzonePic myFiles={files} setMyFiles={setFiles}/>
          {submit&&error.files && <Typography color="error"  mb={"0.5rem"}>{error.files}</Typography>}
          {/* Button */}
          <Box display={"flex"} justifyContent={"center"} width="100%">
            {/* Preview */}
            <Box width={"100%"} mr={1}>
              <ButtonClick title="Preview" />
            </Box>
            {/* Terbitkan */}
            <Box width={"100%"}>
              <ButtonClick onClick={handleSubmit} title="Terbitkan" primary />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProdukField;
