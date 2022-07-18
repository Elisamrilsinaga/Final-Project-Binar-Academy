import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonCategory from "../../components/buttons/ButtonCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "../../redux/product";

const SetKategori = ({ kategory, setKategory }) => {
  const products = useSelector((state) => state.product.categories);
  const category = products?.data  && [... new Set(products.data.map(x => x.product_category).filter(x=>x !== "jam" && x !== "jam tangan"))]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        overflow: {
          xs : "scroll",
          md : "hidden" 
        },
        gap: 1.5,
      }}
    >
      <ButtonCategory
        title={"Semua"}
        icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
        value={kategory}
        setValue={setKategory}
      />
      {category &&
        category.map((category) => category && (
          <ButtonCategory
            key={category}
            title={category}
            icon={<SearchIcon sx={{ fontSize: "1.2rem" }} />}
            value={kategory}
            setValue={setKategory}
          />
        ))}

    </Box>
  );
};

export default SetKategori;
