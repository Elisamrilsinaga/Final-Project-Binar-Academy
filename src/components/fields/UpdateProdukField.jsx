import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import FormInput from "../global/FormInput";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ButtonClick from "../global/ButtonClick";
import DropzonePic from "../global/DropzonePic";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProductItem, updateProduct } from "../../redux/product";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProdukField = () => {
    const products = useSelector((state) => state.product.categories);
    const kategori = products?.data  && [... new Set(products.data.map(x => x.product_category).filter(x=>x !== "jam" && x !== "jam tangan"))]
    const detail = useSelector((state) => state.product.productsDetail.data);
    const [error,setError] = React.useState({})
    const [submit,setSubmit] = React.useState(false)
  
    const { id } = useParams();
    console.log(detail);
    const navigate = useNavigate()

    const [name, setName] = React.useState(detail?.product_name);
    const [price, setPrice] = React.useState(detail?.product_price);
    const [description, setDescription] = React.useState(detail?.product_desc);
    const [category, setCategory] = React.useState(detail?.product_category);
    const [pictures, setPictures] = React.useState([]);
    const loadingButton = useSelector((state) => state.product.loadingButton);

    const validation = () => {
        const err = {
            name : name ? null : "Mohon masukkan nama",
            files: pictures.length <= 0 ? "Mohon masukkan gambar" : null,
            price: price && parseInt(price) > 0 ? null : "Mohon masukkan harga",
            description: description ? null : "Mohon masukkan deskripsi",
            category: category ? null : "Mohon pilih kategori",
        }
        setError(err)
    }

    const dispatch = useDispatch();
    const handleAddProduk = () => {
        setSubmit(true)
        if(!Object.values(error).every(x => x === null))
        return
        const data = {
            productName : name,
            // picture : pictures[0],
            productPrice : parseInt(price),
            productDesc : description,
            productCategory : category
        }
        dispatch(updateProduct({ id: detail.id, data }));
    }

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProductItem(id));
        setName(detail?.product_name);
        setPrice(detail?.product_price);
        setDescription(detail?.product_desc)
        setCategory(detail?.product_category)
      }, [dispatch]);
    
    useEffect(() => {
        if(!detail) navigate("/daftar-jual/"+id)
        validation()
    }, [name,pictures,price,description,category])
    
    return (
        <Box maxWidth={"100%"}>
        <Box display="flex" justifyContent="center" margin="2rem">
          <Box display={{xs:"none",md:"flex"}} width="4rem" color="black">
            <Button onClick={()=>navigate("/daftar-jual")} >
              <ArrowBackOutlinedIcon />
            </Button>
          </Box>
  
          <Box width={{xs:"100%",md:"fit-content"} } display="flex" flexDirection="column">
            < FormInput
                label="Nama Produk"
                type="text"
                placeholder="Contoh: Baju Batik"
                value={name}
                setValue={setName}
            />
            {submit&&error.name && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.name}</Typography>}
            < FormInput
                label="Harga"
                type="text"
                placeholder="Rp 0,00"
                value={price}
                setValue={setPrice}
            />
            {submit&&error.price && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.price}</Typography>}
            < FormInput
                label="Kategori"
                type="select"
                placeholder="Pilih Kategori"
                select={kategori}
                value={category}
                data={'kategori'}
                setValue={setCategory}
            />
            {submit&&error.category && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.category}</Typography>}
            < FormInput
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
            <DropzonePic myFiles={pictures} setMyFiles={setPictures} />
            {submit&&error.files && <Typography color="error"  mb={"0.5rem"}>{error.files}</Typography>}
            {/* Button */}
            <Box display={"flex"} justifyContent={"center"}>
                {/* Preview */}
                <Box width={"100%"} mr={1}>
                    <ButtonClick title="Preview" />
                </Box>
                {/* Terbitkan */}
                <Box width={"100%"}>
                    {
                        loadingButton ? <ButtonClick title="Simpan" disabled /> : <ButtonClick title="Terbitkan" primary onClick={handleAddProduk} />
                    }
                </Box>
            </Box>
        </Box >
        </Box>
    </Box>
    );
};

export default UpdateProdukField;
