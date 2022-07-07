import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonCategory from "../../components/buttons/ButtonCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorys } from "../../redux/category";

const SetKategori = ({ products,kategory, setKategory }) => {
  
  const isMobile = useMediaQuery("(max-width:50px)");

  // const handleChangestatusValue = (event) => {
  //   setKategory(event.target.value);
  // };
  console.log("prod",! products);
  const category = products.data && [... new Set(products.data.posts.map(x => x.product_category))]
  // const category = useSelector((state) => state.category.categorys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategorys());
  }, [dispatch]);

  // const handleSearch = () => {
  //   const newCategory = kategory.filter((x) =>
  //     x.kategory == "" ? x.category : category
  //   );
  //   setKategory(newCategory);
  //   console.log(newCategory);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        overflow: isMobile ? "scroll" : "none",
        gap: 1.5,
        paddingX: isMobile ? "1rem" : "0",
      }}
    >
      <ButtonCategory
        title={"Semua"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />
      {category &&
        category.map((category) => (
          <ButtonCategory
            key={category}
            title={category}
            icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
            value={kategory}
            setValue={setKategory}
          />
        ))}

      {/* <ButtonCategory
        title={"Semua"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Hobi"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Kendaraan"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Baju"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Elektronik"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />

      <ButtonCategory
        title={"Kesehatan"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      /> */}
    </Box>
  );
};

export default SetKategori;
