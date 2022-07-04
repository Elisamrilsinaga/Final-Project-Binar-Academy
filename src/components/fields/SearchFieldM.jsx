import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchFieldM = () => {
  const [value, setValue] = React.useState("");

  return (
    <Box display="flex" alignItems="center" width={"90rem"}>
      <TextField
        id="search"
        placeholder="Cari di sini ..."
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
          style: {
            color: "#000",
            fontSize: "1rem",
            padding: ".5rem 1rem",
            borderRadius: "16px",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchFieldM;
