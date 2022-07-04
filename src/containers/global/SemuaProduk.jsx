import { useEffect } from "react";
import { useMediaQuery, Grid } from "@mui/material";
import AddButtonM from "../../components/buttons/AddButtonM";
import AddButton from "../../components/buttons/AddButton";
import CardProdukM from "../mobile/CardProdukM";
import CardProduk from "../web/CardProduk";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsUser } from "../../redux/product";

const SemuaProduk = () => {
  const isMobile = useMediaQuery("(max-width:425px)");

  const productsUser = useSelector((state) => state.product.productsUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsUser());
  }, [dispatch]);
  return (
    <>
      {isMobile ? (
        <>
          <AddButtonM />
          {productsUser.data &&
            productsUser.data.map((product) => (
              <CardProdukM key={product.id} product={product} />
            ))}
        </>
      ) : (
        <>
          <Grid
            item
            lg={1.8}
            mb={2}
            gap={3}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            <AddButton />

            {productsUser.data &&
              productsUser.data.map((product) => (
                <CardProduk key={product.id} product={product} />
              ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default SemuaProduk;
