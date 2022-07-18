import NoData from "./NoData";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../../redux/transaction";
import { useEffect } from "react";
import ProdukDiminati from "../web/ProdukDiminati";

const Diminati = () => {
  const transaction = useSelector((state) => state.transaction.transactions);
  console.log(transaction)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransaction());
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
