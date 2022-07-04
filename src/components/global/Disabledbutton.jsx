import React from "react";
import { Button } from "@mui/material";

const Disabledbutton = ({ title }) => {
  return (
    <Button
      disabled
      variant="contained"
      fullWidth
      size="large"
      sx={{
        marginTop: "1rem",
        // padding: '1rem',
        borderRadius: "1rem",
        backgroundColor: "#8A8A8A",
        boxShadow: "none",
      }}
    >
      {title}
    </Button>
  );
};

export default Disabledbutton;
