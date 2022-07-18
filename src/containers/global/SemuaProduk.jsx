import { useEffect } from "react";
import { Grid } from "@mui/material";
import AddButton from "../../components/buttons/AddButton";
import CardProduk from "../web/CardProduk";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsUser } from "../../redux/product";
import { GetProfile } from "../../redux/profile";

const SemuaProduk = () => {
  const profile = useSelector((state) => state.profile.profile.data);
  const productsUser = useSelector((state) => state.product.productsUser);
  
  const dispatch = useDispatch();
  console.log(productsUser,profile)
  useEffect(() => {
    dispatch(GetProfile());
    dispatch(fetchProductsUser());
  }, [dispatch]);
  return (

        <>
          <Grid
            item
            lg={1.8}
            mb={2}
            gap={{xs:1,md:3}}
            sx={{ display: "flex", flexWrap: "wrap" }}
            width={"100%"}
          >
            <Grid
              item
              lg={1.8}
              mb={2}
              sx={{ display: "flex",width: { 
                xs : "165px",
                md : "200px"
              } }}
            >
              <AddButton />
            </Grid>

            {productsUser.data &&
              productsUser?.data.map((product) => (
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
                 <CardProduk key={product.id} product={product} />
                </Grid>
              ))}
          </Grid>
        </>
  );
};

export default SemuaProduk;
