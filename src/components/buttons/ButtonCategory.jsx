import { Box, Button, Typography } from "@mui/material";

const ButtonCategory = ({ title, icon, value, setValue }) => {
  const active = value === title;
  return (
    <>
      <Box display="flex" alignItems="center">
        <Button
          onClick={() => setValue(title)}
          variant={active ? "contained" : "outlined"}
          sx={{
            backgroundColor: active ? "#7126B5" : "#E2D4F0",
            color: active ? "#fff" : "#3C3C3C",
            borderRadius: "10px",
            padding: "0.5rem 1rem",
            textDecoration: "none",
            border: "none",
            "&:hover": {
              backgroundColor: active ? "#7126B5" : "#E2D4F0",
              color: active ? "#fff" : "#3C3C3C",
              border: "none",
            },
          }}
        >
          {icon}
          <Typography ml={0.6} variant="button">
            {title}
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default ButtonCategory;
