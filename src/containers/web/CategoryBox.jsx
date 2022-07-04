import { Box, Divider, Stack, Typography } from "@mui/material"
import KategoryPage from "../../components/web/KategoryPage"

const CategoryBox = ({ page, setPage }) => {
    // console.log(page);
    return (
        <Box width={'20%'}>
            <Box boxShadow='0px 0px 10px rgba(0, 0, 0, 0.15)' p={2} borderRadius='20px'>
                <Typography variant='subtitle1' mb={2}>Kategori</Typography>
                <Stack spacing={1}>
                    <KategoryPage name='Semua Produk' page={page} setPage={setPage} />
                    <Divider />
                    <KategoryPage name='Diminati' page={page} setPage={setPage} />
                    <Divider />
                    <KategoryPage name='Terjual' page={page} setPage={setPage} />
                </Stack>
            </Box>
        </Box>
    )
}

export default CategoryBox
