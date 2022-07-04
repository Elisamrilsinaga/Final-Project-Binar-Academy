import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../redux/profile";

const InfoPenjual = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const uid = localStorage.getItem("uid");
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile.data);

  React.useEffect(() => {
    dispatch(GetProfile(uid));
  }, [dispatch, uid]);

  return (
    <Box display="flex" alignItems="center">
      <Box
        component={"img"}
        src={profile?.profile_picture}
        width={isMobile ? "3rem" : "4rem"}
        height={isMobile ? "3rem" : "4rem"}
        borderRadius={isMobile ? "10px" : "20px"}
      />
      <Box display="flex" flexDirection="column" ml={2}>
        <Typography variant="subtitle1" fontSize={isMobile ? "1rem" : "1.4rem"}>
          {profile?.fullname}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          fontSize={isMobile ? "0.8rem" : "1rem"}
        >
          {profile?.city.city}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoPenjual;
