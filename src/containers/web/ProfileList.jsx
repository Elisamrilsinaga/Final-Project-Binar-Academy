import { Box, Button } from "@mui/material";
import InfoPenjual from "../global/InfoPenjual";

const ProfileList = () => {
  const uid = localStorage.getItem("uid");
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.15)"
      p={2}
      borderRadius="20px"
    >
      <InfoPenjual />
      <Box>
        <Button
          href={`/profile`}
          variant="outlined"
          color="primary"
          sx={{
            width: "100%",
            color: "black",
            fontSize: ".8rem",
            borderRadius: "10px",
          }}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileList;
