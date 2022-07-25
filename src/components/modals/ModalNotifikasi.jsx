import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ContainersBox from '../global/ContainersBox'
import { useSelector } from 'react-redux'

const ModalNotifikasi = ({ message }) => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const profile = useSelector((state) => state.profile.profile.data)

    if (profile && profile.user_image !== null) {
        // Seller
        message = message.filter(x => x.seller_id === profile.id)
    } else if(profile && profile.user_image == null) {
        // Buyer
        message = message.filter(x => x.buyer_id === profile.id)
    }

    console.log(message)

    return (
        <Box position={'absolute'} zIndex='100' top='3.5rem' right='9.5rem'>
            {message?.length > 0 && (
                <ContainersBox shadow data={
                    <>
                    {
                        message?.map((notif) => (
                            <Box display={"flex"} mt={2} borderBottom="1px solid #E5E5E5" onClick={()=>navigate("/penawaran",{ state:{transaction: {...notif.User_Transaction, id:notif.User_Transaction.id, product_id: notif.product_id, user_id : notif.buyer_id}} })}>
                            <Box
                                component={"img"}
                                src={
                                    // notif.Product.Image_Products[0].link
                                    notif.User_Transaction.Product.Image_Products[0].link
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
                                        {notif?.message}
                                        </Typography>
                                        {/* <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                                            20 Apr, 14:04
                                        </Typography> */}
                                    </Box>
                                    <Typography variant="subtitle1" mb={1} fontSize={'.7rem'}>
                                        {notif.User_Transaction.Product.product_name}
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
