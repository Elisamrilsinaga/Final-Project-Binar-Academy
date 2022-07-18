import React from "react";
import InfoProfileField from "../components/fields/InfoProfileField";
import Header from "../containers/web/Header";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../redux/profile";
// import { GetCity } from "../redux/city";

const Profile = () => {
  
  const profile = useSelector((state) => state.profile.profile.data);
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch()
  
  
  React.useEffect(() => {
    dispatch(GetProfile());
  }, [dispatch]);

  return (
    <>
      <Header title="Lengkapi Info Akun" />
      <Box p={2} width={{md:'500px'}} height='auto' sx={{ margin: { xs: "none", md :"3rem auto" }}}>
          {profile &&
            <InfoProfileField />
          }
      </Box>
    </>
  );
};

export default Profile;
