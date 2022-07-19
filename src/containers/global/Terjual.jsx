import CardProduk from '../web/CardProduk'
import NoData from './NoData'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts, fetchProductsUser } from "../../redux/product";
import { useEffect } from 'react';
import { Grid } from '@mui/material';

const Terjual = () => {
    const products = useSelector((state) => state.product.productsUser);
    const sold = products?.data  && products.data.filter(x => x.product_status !== "available")
    console.log(sold)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchProductsUser());
    }, []);
  
    return (
        <>
            {
                
                !sold || sold.length === 0 ? (
                    <NoData />
                ) : (
                    <Grid
                        item
                        lg={1.8}
                        mb={2}
                        gap={{xs:1,md:3}}
                        sx={{ display: "flex", flexWrap: "wrap" }}
                        width={"100%"}
                    >
                        {
                            sold?.map((product) => (
                                <>
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
                                </>
                            ))
                        }
                    </Grid>
                )

            }
        </>
    )
}

export default Terjual
