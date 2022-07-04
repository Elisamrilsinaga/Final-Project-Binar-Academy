import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import categoryReducer from "./category";
import profileReducer from "./profile";
import transactionReducer from "./transaction";
import wishlistReducer from "./wishlist";
import cityReducer from "./city";

const rootReducer = {
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
  transaction: transactionReducer,
  profile: profileReducer,
  wishlist: wishlistReducer,
  city: cityReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
