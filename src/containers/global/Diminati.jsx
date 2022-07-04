import { Typography, useMediaQuery, Link, Box } from "@mui/material";
import CardProduk from "../web/CardProduk";
import CardPrdoukM from "../mobile/CardProdukM";
import NoData from "./NoData";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../../redux/transaction";
import { useEffect } from "react";
import ProdukDiminati from "../web/ProdukDiminati";
import ProdukDiminatiM from "../mobile/ProdukDiminatiM";

const Diminati = () => {
  const box = [1];
  const isMobile = useMediaQuery("(max-width:425px)");

  const transaction = useSelector((state) => state.transaction.transactions);

  console.log(transaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch]);
  return (
    <>
      {isMobile ? (
        <>
          {box.length === 0 ? (
            <NoData />
          ) : (
            <>
              {/* <CardPrdoukM />
                                    <CardPrdoukM />
                                    <CardPrdoukM /> */}
              {transaction &&
                transaction.map((productrans) => (
                  <ProdukDiminatiM
                    key={productrans.id}
                    productrans={productrans}
                  />
                ))}
            </>
          )}
        </>
      ) : (
        <>
          {box.length === 0 ? (
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
      )}
    </>
  );
};

export default Diminati;
