import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const NotifikasiM = ({ setOpen,message }) => {
    console.log(message)
    const navigate = useNavigate()
    return (
        <Box bgcolor={'white'} position={'fixed'} width={"100%"} height={"100%"} top='0' left={'0'} zIndex='100' >
            <Box display={'flex'} m={2} alignItems='center'>
                <CloseIcon onClick={() => setOpen(false)} sx={{ fontSize: '1.5rem' }} />
                <Typography variant='h6' fontSize={'1.2rem'} ml={2}> Notifikasi </Typography>
            </Box>
            {!message && (
                <Box width={'300px'}>
                    <Typography variant="caption" ml="2rem" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                        Tidak ada notifikasi
                    </Typography>
                </Box>
            )}
            {message.map(notif => (
            <>
                <Box display={"flex"} p={2} borderBottom="1px solid #E5E5E5" onClick={()=>navigate("/penawaran",{ state:{transaction: {...notif.User_Transaction, product_id: notif.Product.id, user_id : notif.User.id}} })}>
                    <Box
                        component={"img"}
                        src={
                            notif?.User?.user_image
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
                                    {notif?.message}
                                </Typography>
                                {/* <Typography variant="caption" color={"GrayText"} mb={1}>
                                    20 Apr, 14:04
                                </Typography> */}
                            </Box>
                            <Typography variant="subtitle1" mb={1}>
                                {notif?.Product?.product_name}
                            </Typography>
                            <Typography variant="subtitle1" mb={1}>
                                Ditawar Rp {notif?.User_Transaction?.price_negotiate}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </>
            ))}
            </Box>

    )
}

export default NotifikasiM
