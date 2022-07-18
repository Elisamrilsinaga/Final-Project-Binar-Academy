import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailProduk from "./pages/DetailProduk";
import Penawaran from "./pages/Penawaran";
import AddProduk from "./pages/AddProduk";
import DaftarJual from "./pages/DaftarJual";
import Profile from "./pages/Profile";
import { useEffect } from "react";
// import AuthProtect from "./AuthProtect";

function App() {
  let islogin = localStorage.getItem("token");
  
  return (
    <ThemeProvider theme={Theme}>
      <div className="App" style={{width: "100vw"}}>
        <Router>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={islogin ? <Navigate to="/daftar-jual" /> : <Login />} />
            <Route path="/register" element={islogin ? <Navigate to="/daftar-jual" /> : <Register />} />
            <Route path="/profile" element={islogin ? <Profile /> : <Navigate to="/login" />} />

            <Route path="/daftar-jual">
              <Route index element={islogin ? <DaftarJual /> : <Navigate to="/login" />} />
              <Route path=":id" element={islogin ? <DetailProduk /> : <Navigate to="/login" />} />
              <Route path="add" element={islogin ? <AddProduk /> : <Navigate to="/login" />} />
            </Route>

            <Route path="/penawaran" element={islogin ? <Penawaran /> : <Navigate to="/login" />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
