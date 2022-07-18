import { useEffect,useState,useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CardProduk from "../containers/web/CardProduk";
import Carousel from "../containers/web/Carousel";
import Header from "../containers/web/Header";
import ButtonJualHome from "../components/buttons/ButtonJualHome";
import SetKategori from "../containers/global/SetKategori";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/product";
import {useLocation} from "react-router-dom"

function useQuery(){
  const {search} = useLocation()
  return useMemo(()=> new URLSearchParams(search, [search]))
}

const Home = () => {
  const query = useQuery()
  const [kategory, setKategory] = useState();
  const products = useSelector((state) => state.product.products);

  const search = query.get('search') || ""
  const category = query.get('filter') 
  
  const dispatch = useDispatch();

  useEffect(() => {
    let data = category && category !== 'Semua' ? {category : category} : {search : search}
    dispatch(fetchProducts({data, category}));
  }, [dispatch,search,category]);
  return (
        <>
          {/* {
            isMobile ? (<HomeUpM products={products} kategory={kategory} setKategory={setKategory}/>) : (
              <> */}
              <Header />
              <Carousel />
              <Box mx={{
                xs : 2,
                md: 16
              }} mt={4}>
                <Typography fontWeight={"700"} mb={2} textTransform="none">
                  Telusuri Kategori
                </Typography>
                <SetKategori products={products} kategory={kategory} setKategory={setKategory} />
              </Box>
              {/* </>
            )
          } */}
          

          <Box mx={{
            xs : 0,
            md : "8rem"
          }} mt={4} display="flex" justifyContent={"center"} alignItems="center" sx={{ maxWidth: "100vw"}}>
            <ButtonJualHome sx={{position:"absolute"}}/>
            <Box display="flex" flexWrap="wrap" sx={{ width: "100%" }}>
              <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" sx={{ width: "100%" }} mx={{
                xs : 2,
                md : 0
              }}>
                <Grid container justifyContent="start" gap={1}  >
                  { typeof products.find !== "function" &&
                    products.find?.map((product) =>  (
                      <Grid
                        item
                        lg={1.8}
                        mb={2}
                        key={product.id}
                        sx={{ display: "flex",width: { 
                          xs : "165px",
                          md : "200px"
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
