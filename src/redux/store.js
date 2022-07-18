import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import profileReducer from "./profile";
import transactionReducer from "./transaction";
import notifReducer from "./notif";


const rootReducer = {
  auth: authReducer,
  product: productReducer,
  transaction: transactionReducer,
  profile: profileReducer,
  notif: notifReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
