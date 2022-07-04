import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const NotifikasiM = ({ setOpen }) => {
    return (
        <Box bgcolor={'white'} position={'fixed'} width={"100%"} height={"100%"} top='0' left={'0'} zIndex='100' >
            <Box display={'flex'} m={2} alignItems='center'>
                <CloseIcon onClick={() => setOpen(false)} sx={{ fontSize: '1.5rem' }} />
                <Typography variant='h6' fontSize={'1.2rem'} ml={2}> Notifikasi </Typography>
            </Box>
            <Box display={"flex"} p={2} borderBottom="1px solid #E5E5E5">
                <Box
                    component={"img"}
                    src={
                        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    }
                    sx={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                        marginRight: "2rem",
                    }}
                />
                <Box width={"100%"}>
                    <Box>
                        <Box display={"flex"} justifyContent="space-between">
                            <Typography variant="caption" color={"GrayText"} mb={1}>
                                Penawaran produk
                            </Typography>
                            <Typography variant="caption" color={"GrayText"} mb={1}>
                                20 Apr, 14:04
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" mb={1}>
                            Produk 1
                        </Typography>
                        <Typography variant="subtitle2" mb={1}>
                            Rp. 250.000
                        </Typography>
                        <Typography variant="subtitle1" mb={1}>
                            Ditawar Rp 200.000
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default NotifikasiM
