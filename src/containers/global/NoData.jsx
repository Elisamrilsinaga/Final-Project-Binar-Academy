import { Box, Typography, useMediaQuery } from '@mui/material'

const NoData = () => {
    const isMobile = useMediaQuery('(max-width:420px)')
    return (
        <>
            {isMobile && (<>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{
                    width: '100%',
                    height: '50vh',
                }} >
                    <Box component={'img'} src={'/images/kosong.png'} alt={'kosong'} mb={1} sx={{
                        width: '80%',
                    }} mt={4} />
                    <Typography variant={'caption'} color='GrayText' width={'230px'} textAlign={'center'}>
                        Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
                    </Typography>
                </Box>
            </>)}
            {!isMobile && (<>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{
                    width: '59vw',
                    height: '30vh',
                }} >

                    <Box component={'img'} src={'/images/kosong.png'} alt={'kosong'} mb={1} />
                    <Typography variant={'body1'} width={'300px'} textAlign={'center'}>
                        Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
                    </Typography>
                </Box>
            </>)}

        </>


    )
}

export default NoData
