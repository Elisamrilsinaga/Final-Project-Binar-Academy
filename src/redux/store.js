import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import profileReducer from "./profile";
import transactionReducer from "./transaction";


const rootReducer = {
  auth: authReducer,
  product: productReducer,
  transaction: transactionReducer,
  profile: profileReducer,

};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
