import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import { AuthLogin, setError } from "../../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const LoginField = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const error = useSelector((state) => state.auth.error);
  // console.log(error);
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      dispatch(setError("Email dan Password tidak boleh kosong"));
    } else
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        dispatch(setError("Email tidak valid"));
      } else {
        const data = {
          email,
          password,
        };
        dispatch(AuthLogin(data));
      }
  }

  useEffect(() => {
    if (status) {
      Navigate("/");
    }
  }, [status, Navigate]);

  return (
    <>
      <Box display={'flex'} flexDirection='column' justifyContent={'center'} sx={{ padding: { sx: "0", lg: "10px" } }} >
        <Box mb={2} >
          <Typography fontWeight={700} fontSize={24} >
            Masuk
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <FormInput label="Email" value={email} setValue={setEmail} type="text" placeholder="Contoh: johndee@gmail.com" />

        <FormInput label="Password" value={password} setValue={setPassword} type="password" placeholder="Masukkan password" />

        <ButtonClick title="Masuk" primary onClick={handlelogin} />
      </Box>
      <Box mt={4} display='flex' justifyContent='center'>
        <Typography>Belum punya akun?</Typography>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Typography
            fontWeight={700}
            color="#7126B5"
            style={{
              marginLeft: 6,
              curson: "pointer",
            }}
          >
            Daftar di sini
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default LoginField;
