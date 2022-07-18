import { Box, Divider, Stack, Typography } from "@mui/material"
import ButtonCategory from "../../components/buttons/ButtonCategory"
import KategoryPage from "../../components/web/KategoryPage"
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const CategoryBox = ({ page, setPage }) => {
    // console.log(page);
    return (
        <Box width={{xs: "100%",md:'20%'}}>
            <Box display={{xs: "none", md: "block"}} boxShadow='0px 0px 10px rgba(0, 0, 0, 0.15)' p={2} borderRadius='20px'>
                <Typography variant='subtitle1' mb={2}>Kategori</Typography>
                <Stack spacing={1}>
                    <KategoryPage name='Semua Produk' page={page} setPage={setPage} />
                    <Divider />
                    <KategoryPage name='Diminati' page={page} setPage={setPage} />
                    <Divider />
                    <KategoryPage name='Terjual' page={page} setPage={setPage} />
                </Stack>
            </Box>
            <Box display={{xs: "flex", md: "none"}} flexWrap='nowrap' gap={2} sx={{
                overflow: 'scroll',
            }}>
                <ButtonCategory onclick={()=>setPage("Semua Produk")} title={"Produk"} icon={<ViewInArIcon sx={{ fontSize: '1.1rem' }} />} value={page} setValue={setPage} />
                <ButtonCategory onclick={()=>setPage("Diminati")} title={"Diminati"} icon={<FavoriteBorderIcon sx={{ fontSize: '1.1rem' }} />} value={page} setValue={setPage} />
                <ButtonCategory onclick={()=>setPage("Terjual")} title={"Terjual"} icon={<MonetizationOnOutlinedIcon sx={{ fontSize: '1.1rem' }} />} value={page} setValue={setPage} />
            </Box>
        </Box>
    )
}

export default CategoryBox
