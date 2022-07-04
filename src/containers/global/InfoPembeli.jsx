import { Box, Typography, useMediaQuery } from "@mui/material";

const InfoPembeli = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box p={2}>
      <Box
        display="flex"
        alignItems="center"
        boxShadow="0px 0px 4px rgba(0, 0, 0, 0.15)"
        p={1.6}
        borderRadius="20px"
      >
        <Box
          component={"img"}
          src={"/images/Profpic1.png"}
          width={isMobile ? "3rem" : "4rem"}
          height={isMobile ? "3rem" : "4rem"}
          borderRadius={isMobile ? "10px" : "20px"}
        />
        <Box display="flex" flexDirection="column" ml={2}>
          <Typography variant="subtitle1" fontSize={14}>
            Nama Pembeli
          </Typography>
          <Typography variant="body2" color="textSecondary" fontSize={12}>
            Kota
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoPembeli;
