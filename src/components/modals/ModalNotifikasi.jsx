import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContainersBox from '../global/ContainersBox'

const ModalNotifikasi = ({ message }) => {
    console.log(message)
    const navigate = useNavigate()
    return (
        <Box position={'absolute'} zIndex='100' top='3.5rem' right='9.5rem'>
            {message?.length > 0 && (
                <ContainersBox shadow data={
                    <>
                    {
                        message.map(notif => (
                            <Box display={"flex"} mt={2} borderBottom="1px solid #E5E5E5" onClick={()=>navigate("/penawaran",{ state:{transaction: {...notif.User_Transaction, product_id: notif.Product.id, user_id : notif.User.id}} })}>
                            <Box
                                component={"img"}
                                src={
                                    notif.User.user_image
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
                                    <Box display={"flex"} justifyContent="space-between" width={'300px'}>
                                        <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                                            Penawaran produk
                                        </Typography>
                                        {/* <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                                            20 Apr, 14:04
                                        </Typography> */}
                                    </Box>
                                    <Typography variant="subtitle1" mb={1} fontSize={'.7rem'}>
                                        {notif.Product.product_name}
                                    </Typography>
                                    <Typography variant="subtitle1" mb={1} fontSize={'.7rem'}>
                                        Ditawar Rp {notif.User_Transaction.price_negotiate}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        ))
                    }
                    </>
                } />
            )}
            {message?.length === 0 && (
                <ContainersBox shadow data={
                    <Box width={'300px'}>
                        <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                            Tidak ada notifikasi
                        </Typography>
                    </Box>
                } />
            )}
        </Box>
    )
}

export default ModalNotifikasi
