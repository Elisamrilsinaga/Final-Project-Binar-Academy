import { Box, Typography } from "@mui/material";
import React from "react";
import HeroM from "../../containers/mobile/HeroM";
import SidebarM from "../../components/mobile/SidebarM";
import SetKategori from "../global/SetKategori";
import MenuIcon from "@mui/icons-material/Menu";
import SearchFieldM from "../../components/fields/SearchFieldM";

const HomeUpM = ({ products,kategory, setKategory }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box>
      {open && (
        <>
          <Box
            bgcolor={"rgba(0, 0, 0, 0.6)"}
            position={"fixed"}
            width={"100%"}
            height={"100%"}
            zIndex={1}
          />
          <SidebarM setOpen={setOpen} />
        </>
      )}

      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          background:
            "linear-gradient(to bottom, #FFE9C9, rgba(255, 233, 202, 0))",
        }}
      >
        <Box display="flex" alignItems="center" p={1.5}>
          <Box sx={{ background: "white", borderRadius: 2, mr: 2, p: 1 }}>
            <MenuIcon sx={{ fontSize: "25px" }} onClick={() => setOpen(true)} />
          </Box>
          <SearchFieldM />
        </Box>
        <HeroM />
        <Typography fontSize={14} mx={2} my={1}>
          Telusuri Kategori
        </Typography>
        <SetKategori products={products} kategory={kategory} setKategory={setKategory}/>
      </Box>
    </Box>
  );
};

export default HomeUpM;
