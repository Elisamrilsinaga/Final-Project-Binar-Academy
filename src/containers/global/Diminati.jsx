import NoData from "./NoData";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../../redux/transaction";
import { useEffect, useState } from "react";
import ProdukDiminati from "../web/ProdukDiminati";
import apisecondhand from "../../redux/apis/apisecondhand";
import { fetchProductsUser } from "../../redux/product";

const Diminati = () => {
  const [transaction, setTransaction] = useState([])
  const productsUser = useSelector((state) => state.product.productsUser);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!productsUser.data) return
    let data = []
    productsUser?.data.map((product) => (
      (async()=>{
        const response = await apisecondhand.get(`/transaction/seller/${product?.id}`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
          },
        });
        if(response?.data?.data.length > 0)
        data.push(...response.data.data)
        if(data.length > transaction.length)
        setTransaction(data)
        
      })()
      ))
    console.log(transaction)
  }, [productsUser]);

  useEffect(() => {
    dispatch(fetchProductsUser());
  }, [dispatch]);
  return (
    <>
      {transaction.length === 0 ? (
        <NoData />
      ) : (
        <>
          {transaction &&
            transaction.map((productrans) => (
              <ProdukDiminati
                key={productrans.id}
                productrans={productrans}
              />
            ))}
        </>
      )}
    </>
  );
};

export default Diminati;
