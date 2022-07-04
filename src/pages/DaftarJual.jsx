import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material"
import Header from "../containers/web/Header";
import CategoryBox from "../containers/web/CategoryBox";
import ProfileList from "../containers/web/ProfileList";

import Sidebar from "../components/mobile/SidebarM";
import ProfileListM from "../containers/mobile/ProfileListM";
import SemuaProduk from "../containers/global/SemuaProduk";
import Diminati from "../containers/global/Diminati";
import Terjual from "../containers/global/Terjual";

import MenuIcon from '@mui/icons-material/Menu';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ButtonCategory from "../components/buttons/ButtonCategory";

const DaftarJual = () => {
    const isMobile = useMediaQuery("(max-width:425px)");
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState('Semua Produk');
    const [pageM, setPageM] = React.useState('Produk');

    return (
        <>
            {
                isMobile ? (
                    <Box>
                        {open && <>
                            <Box bgcolor={'rgba(0, 0, 0, 0.6)'} position={'fixed'} width={"100%"} height={"100%"} />
                            <Sidebar setOpen={setOpen} />
                        </>}
                        <Box p={2} width={"100%"} height={"100%"}>
                            <Box display='flex' alignItems='center' p={1.5} >
                                <MenuIcon sx={{ fontSize: '25px' }} onClick={() => setOpen(true)} />
                                <Typography variant='h6' ml={3} fontWeight='700' fontSize={'1.5rem'}>
                                    Daftar Jual Saya
                                </Typography>
                            </Box>
                            <ProfileListM />
                        </Box>
                        <Box display='flex' flexWrap='nowrap' gap={2} px={2} sx={{
                            overflow: 'scroll',
                        }}>
                            <ButtonCategory title={"Produk"} icon={<ViewInArIcon sx={{ fontSize: '1.2rem' }} />} value={pageM} setValue={setPageM} />
                            <ButtonCategory title={"Diminati"} icon={<FavoriteBorderIcon sx={{ fontSize: '1.2rem' }} />} value={pageM} setValue={setPageM} />
                            <ButtonCategory title={"Terjual"} icon={<MonetizationOnOutlinedIcon sx={{ fontSize: '1.2rem' }} />} value={pageM} setValue={setPageM} />
                        </Box>
                        <Box p={2} display='flex' alignItems='center' flexWrap='wrap' gap={1.5} >
                            {pageM === 'Produk' && <SemuaProduk />}
                            {pageM === 'Diminati' && <Diminati />}
                            {pageM === 'Terjual' && <Terjual />}
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Header active />
                        <Box mx={28} mt={4}>
                            <Typography variant="h5" mb={2}>Daftar Jual Saya</Typography>
                            <ProfileList />
                        </Box>
                        <Box mx={28} mt={4} display='flex'>
                            <CategoryBox page={page} setPage={setPage} />
                            <Box ml={'2rem'} display="flex" flexWrap='wrap' sx={{ width: 'calc(80% - 2rem)' }}>
                                <Box display='flex' flexWrap='wrap' gap={2}>
                                    {page === 'Semua Produk' && <SemuaProduk />}
                                    {page === 'Diminati' && <Diminati />}
                                    {page === 'Terjual' && <Terjual />}
                                </Box>
                            </Box>
                        </Box>
                    </>
                )
            }
        </>
    )
}

export default DaftarJual
