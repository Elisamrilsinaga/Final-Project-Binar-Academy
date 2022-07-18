import React from "react";
import { Box, Typography, } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import { useDispatch, useSelector } from "react-redux";
import { AuthRegister, setError } from "../../redux/auth";

const RegisterField = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const status = useSelector((state) => state.auth.status);


  const handleregister = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      dispatch(setError("Email dan Password tidak boleh kosong"));
    } else
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        dispatch(setError("Email tidak valid"));
      } else
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
          dispatch(setError("Password tidak valid"));
        } else {
          const data = {
            userName : name,
            email : email,
            password : password,
          };
          dispatch(AuthRegister(data));
          Navigate("/login");
        }
  }

  React.useEffect(() => {
    if (status) {
      Navigate("/login");
    }
  }, [status, Navigate]);

  return (
    <>
      <Box display={'flex'} flexDirection='column' justifyContent={'center'} sx={{ px: { xs: "15px", lg: "10px" } }} >
        <Box mb={2} >
          <Typography fontWeight={700} fontSize={24} >
            Daftar
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
        <FormInput label="Nama" value={name} setValue={setName} type="text" placeholder="Contoh: John Doe" />
        <FormInput label="Email" value={email} setValue={setEmail} type="text" placeholder="Contoh: JohnDoe@gmail.com" />
        <FormInput label="Password" value={password} setValue={setPassword} type="password" placeholder="Maximal 8 karakter" />

        <ButtonClick title="Daftar" primary onClick={handleregister} />
      </Box >
      <Box sx={{ display: "flex", justifyContent: 'center' }} pt={2}>
        <Typography>Sudah punya akun?</Typography>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Typography
            fontWeight={700}
            color="#7126B5"
            style={{
              marginLeft: 6,
              curson: "pointer",
            }}
          >
            Masuk di sini
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default RegisterField;
