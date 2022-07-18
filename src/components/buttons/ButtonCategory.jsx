import { Box, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {useLocation} from "react-router-dom"

function useQuery(){
  const {search} = useLocation()
  return useMemo(()=> new URLSearchParams(search, [search]))
}

const ButtonCategory = ({ title, icon, value, setValue, onclick }) => {
  const query = useQuery()
  let navigate = useNavigate(); 
  const active = query.get('filter') === title ;
  return (
    <>
      <Box display="flex" alignItems="center">
        <Button
          onClick={onclick ? onclick : () => navigate( title !== "Semua" ? '/?filter='+title : "/")}
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
