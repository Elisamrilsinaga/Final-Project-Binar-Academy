import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../redux/profile";

const InfoPenjual = ({penjual}) => {
  // console.log(penjual)
  const isMobile = useMediaQuery("(max-width:600px)");
  const prof =  useSelector((state) => state.profile.profile.data);
  const [profile,setProfile] = useState(penjual ? penjual :  prof);
  const dispatch = useDispatch()
  // console.log(profile)
  React.useEffect(() => {
    dispatch(GetProfile());
  }, [dispatch, ]);
  React.useEffect(() => {
    setProfile(penjual || prof)
  }, [prof,penjual]);


  return (
    <Box display="flex" alignItems="center">
      <Box
        component={"img"}
        src={profile?.user_image}
        width={isMobile ? "3rem" : "4rem"}
        height={isMobile ? "3rem" : "4rem"}
        borderRadius={isMobile ? "10px" : "20px"}
      />
      <Box display="flex" flexDirection="column" ml={2}>
        <Typography variant="subtitle1" fontSize={isMobile ? "1rem" : "1.4rem"}>
          {profile?.user_name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          fontSize={isMobile ? "0.8rem" : "1rem"}
        >
          {penjual?.city}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoPenjual;
