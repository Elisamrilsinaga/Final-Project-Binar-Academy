import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonCategory from "../../components/buttons/ButtonCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorys } from "../../redux/category";

const SetKategori = ({ product }) => {
  const [kategory, setKategory] = React.useState();
  const isMobile = useMediaQuery("(max-width:420px)");

  // const handleChangestatusValue = (event) => {
  //   setKategory(event.target.value);
  // };
  // console.log(kategory);

  const category = useSelector((state) => state.category.categorys);
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
      keys={category.id}
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
      {category.data &&
        category.data.map((category) => (
          <ButtonCategory
            key={category.id}
            title={category.category}
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
