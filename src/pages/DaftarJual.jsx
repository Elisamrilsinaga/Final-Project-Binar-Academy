import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material"
import Header from "../containers/web/Header";
import CategoryBox from "../containers/web/CategoryBox";
import ProfileList from "../containers/web/ProfileList";

import SemuaProduk from "../containers/global/SemuaProduk";
import Diminati from "../containers/global/Diminati";
import Terjual from "../containers/global/Terjual";

const DaftarJual = () => {
    
    const [page, setPage] = React.useState('Semua Produk');

    return (
        <>
            <Header active />
            <Box display={{xs: "absolute", md:"relative"}} mx={{xs: 0, md:28}} mt={{xs: "120px", md:4}} px={{xs: 2, md:0}} maxWidth="100%">
                <Typography variant="h5" mb={2}>Daftar Jual Saya</Typography>
                <ProfileList />
            </Box>
            <Box mx={{xs: 0, md:28}} mt={4} display='flex' flexDirection={{xs: "column", md: "row"}} px={{xs: 2, md:0}} maxWidth="100%">
                <CategoryBox page={page} setPage={setPage} />
                <Box mt={{xs: 2, md:0}} ml={{xs: 0,md:'2rem'}} display="flex" flexWrap='wrap' sx={{ width: {xs: "100%",md:'calc(80% - 2rem)'} }}>
                    <Box display='flex' flexWrap='wrap' gap={2} >
                        {page === 'Semua Produk' && <SemuaProduk />}
                        {page === 'Diminati' && <Diminati />}
                        {page === 'Terjual' && <Terjual />}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DaftarJual