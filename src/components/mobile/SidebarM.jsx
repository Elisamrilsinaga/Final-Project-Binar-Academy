import React from 'react';
import { Box, Stack, Typography, Link, Button, Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from "@mui/icons-material/Login";
import NotifikasiM from './NotifikasiM';

const SidebarM = ({ setOpen }) => {
    const login = true
    const [open, setOpenState] = React.useState(false)
    console.log(open)
    return (
        <Stack position={'fixed'} top={0} left={0} width={'50%'} height={'100vh'} bgcolor='#f5f5f5' zIndex={1} p={2} spacing={1} >
            {open && <>
                <NotifikasiM setOpen={setOpenState} />
            </>}

            <Box display={'flex'} alignItems="center" justifyContent={'space-between'} mb={1}>
                <Typography variant='h6' fontSize={'1rem'} > Second Hand </Typography>
                <CloseIcon onClick={() => setOpen(false)} sx={{ fontSize: '1.5rem' }} />
            </Box>
            {login && (
                <>
                    <Typography variant='caption' fontWeight={'bold'} mb={2}>Budi</Typography>
                    <Divider />
                    <Typography variant='subtitle1' fontSize={'0.8rem'} sx={{ textDecoration: 'none', color: 'black', }} component={Box} onClick={() => setOpenState(!open)}
                    >
                        Notifikasi
                    </Typography>
                    <Typography variant='subtitle1' fontSize={'0.8rem'} component={Link} href={'/daftar-jual'} sx={{ textDecoration: 'none', color: 'black', }}>
                        Daftar Jual
                    </Typography>
                    <Typography variant='subtitle1' fontSize={'0.8rem'} component={Link} href={'/profile/1'} sx={{ textDecoration: 'none', color: 'black', }}>
                        Akun Saya
                    </Typography>
                    <Divider />

                    <Button variant='contained' >Keluar</Button>
                </>
            )}
            {!login && (
                <Button
                    variant="contained"
                    href={"/login"}
                    sx={{
                        backgroundColor: "#7126B5",
                        textTransform: "none",
                        width: "100px",
                        height: "40px",
                        borderRadius: "12px",
                        spacing: 4,
                    }}
                >
                    <LoginIcon /> Masuk
                </Button>
            )}
        </Stack>
    )
}

export default SidebarM
