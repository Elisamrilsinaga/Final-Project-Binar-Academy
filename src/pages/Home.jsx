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
          {
            isMobile ? (<HomeUpM products={products} kategory={kategory} setKategory={setKategory}/>) : (
              <>
              <Header />
              <Carousel />
              <Box mx={16} mt={4}>
                <Typography fontWeight={"700"} mb={2} textTransform="none">
                  Telusuri Kategori
                </Typography>
                <SetKategori products={products} kategory={kategory} setKategory={setKategory} />
              </Box>
              </>
            )
          }
          

          <Box mx={{
            xs : 0,
            md : "8rem"
          }} mt={4} display="flex" justifyContent={"center"} alignItems="center" sx={{ width: "inherit"}}>
            <ButtonJualHome sx={{position:"absolute"}}/>
            <Box display="flex" flexWrap="wrap" sx={{ width: "100%" }}>
              <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" sx={{ width: "100%" }} mx={{
                xs : 4,
                md : 0
              }}>
                <Grid container justifyContent="start" gap={1}  >
                  {products.data != undefined &&
                    products.data.posts.map((product) => (product.product_category == kategory || kategory == 'Semua' || !kategory) && (
                      <Grid
                        item
                        lg={1.8}
                        mb={2}
                        key={product.id}
                        sx={{ display: "flex",width: { 
                          xs : "160px",
                          md : "300px"
                        } }}
                      >
                        <CardProduk product={product} />
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </>
  );
};

export default Home;
