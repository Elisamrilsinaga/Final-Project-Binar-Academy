import { useEffect } from "react";
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
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width:425px)");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      {isMobile ? (
        <Box>
          <HomeUpM />
          <ButtonJualHome />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            gap={1.5}
            justifyContent="space-between"
          >
            {products.data &&
              products.data.map((product) => (
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
            <SetKategori key={products.id} products={products} />
          </Box>

          <Box mx={"8rem"} mt={4} display="flex">
            <ButtonJualHome />
            <Box display="flex" flexWrap="wrap" sx={{ width: "100%" }}>
              <Box display="flex" alignItems="center" flexWrap="wrap">
                <Grid container justify="center" gap={2}>
                  {products.data &&
                    products.data.map((product) => (
                      <Grid
                        item
                        lg={1.8}
                        mb={2}
                        key={product.id}
                        sx={{ display: "flex" }}
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
