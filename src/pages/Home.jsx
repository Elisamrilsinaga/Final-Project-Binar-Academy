import { useEffect,useState } from "react";
import { Box, useMediaQuery, Grid, Typography } from "@mui/material";
import CardProduk from "../containers/web/CardProduk";
import Carousel from "../containers/web/Carousel";
import Header from "../containers/web/Header";
import CardProdukM from "../containers/mobile/CardProdukM";
import HomeUpM from "../containers/mobile/HomeUpM";
import ButtonJualHome from "../components/buttons/ButtonJualHome";
import SetKategori from "../containers/global/SetKategori";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/product";

const Home = () => {
  const [kategory, setKategory] = useState();
  const products = useSelector((state) => state.product.products);
  console.log(products)
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width:500px)");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      {isMobile ? (
        <Box>
          <HomeUpM products={products} kategory={kategory} setKategory={setKategory} />
          <ButtonJualHome />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            gap={1.5}
            justifyContent="space-between"
          >
            {products.data != undefined &&
              products.data.posts.map((product) => (product.product_category == kategory || kategory == 'Semua' || !kategory) &&(
                <CardProdukM key={product.id} product={product} />
              ))}
          </Box>
        </Box>
      ) : (
        <>
          <Header />
          <Carousel />
          <Box mx={16} mt={4}>
            <Typography fontWeight={"700"} mb={2} textTransform="none">
              Telusuri Kategori
            </Typography>
            <SetKategori products={products} kategory={kategory} setKategory={setKategory} />
          </Box>

          <Box mx={"8rem"} mt={4} display="flex" sx={{ width: "inherit" }}>
            <ButtonJualHome />
            <Box display="flex" flexWrap="wrap" sx={{ width: "100%" }}>
              <Box display="flex" alignItems="center" flexWrap="wrap" sx={{ width: "100%" }}>
                <Grid container justify="center" gap={2} >
                  {products.data != undefined &&
                    products.data.posts.map((product) => (product.product_category == kategory || kategory == 'Semua' || !kategory) && (
                      <Grid
                        item
                        lg={1.8}
                        mb={2}
                        key={product.id}
                        sx={{ display: "flex",width:"100%" }}
                      >
                        <CardProduk product={product} />
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
