import CardProduk from '../web/CardProduk'
import NoData from './NoData'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts, fetchProductsUser, fetchProductsSoldOut } from "../../redux/product";
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import apisecondhand from "../../redux/apis/apisecondhand";

const Terjual = () => {
    const [transaction, setTransaction] = useState([])
    const products = useSelector((state) => state.product.productsUser);
    const profile = useSelector((state) => state.profile.profile.data);

    // const sold = products?.data  && products.data.filter(x => x.product_status === 'sold')
    const dispatch = useDispatch();
    useEffect(() => {
      if(!products.data) return
      let data = []
      products?.data.map((product) => (
        (async()=>{
          const response = await apisecondhand.get(`/transaction`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
          });
          if(response?.data?.data.length > 0) {
            // console.log(response)
            response.data?.data.map((transaction) => {
              if(transaction.transaction_status === "sold" && transaction.seller_id === profile.id) data.push(transaction)
            })
          }
          if(data.length > transaction.length)
          setTransaction(data)
        })()
        ))
      // console.log(transaction)
    }, [products]);

    return (
        <>
            {

                !transaction || transaction.length === 0 ? (
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
                            transaction?.map((product) => (
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
                                        <CardProduk key={product.id} product={product.Product} />
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
