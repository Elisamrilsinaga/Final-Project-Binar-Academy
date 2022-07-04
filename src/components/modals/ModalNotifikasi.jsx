import { Box, Typography } from '@mui/material'
import React from 'react'
import ContainersBox from '../global/ContainersBox'

const ModalNotifikasi = ({ message }) => {
    return (
        <Box position={'absolute'} zIndex='100' top='3.5rem' right='9.5rem'>
            {message && (
                <ContainersBox shadow data={
                    <>
                        <Box display={"flex"} mt={2} borderBottom="1px solid #E5E5E5">
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
                                    <Box display={"flex"} justifyContent="space-between" width={'300px'}>
                                        <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                                            Penawaran produk
                                        </Typography>
                                        <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                                            20 Apr, 14:04
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle1" mb={1} fontSize={'.7rem'}>
                                        Produk 1
                                    </Typography>
                                    <Typography variant="subtitle2" mb={1} fontSize={'.7rem'}>
                                        Rp. 250.000
                                    </Typography>
                                    <Typography variant="subtitle1" mb={1} fontSize={'.7rem'}>
                                        Ditawar Rp 200.000
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display={"flex"} mt={2} borderBottom="1px solid #E5E5E5">
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
                                    <Box display={"flex"} justifyContent="space-between" width={'300px'}>
                                        <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                                            Penawaran produk
                                        </Typography>
                                        <Typography variant="caption" color={"GrayText"} mb={1} fontSize={'.7rem'}>
                                            20 Apr, 14:04
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle1" mb={1} fontSize={'.7rem'}>
                                        Produk 1
                                    </Typography>
                                    <Typography variant="subtitle2" mb={1} fontSize={'.7rem'}>
                                        Rp. 250.000
                                    </Typography>
                                    <Typography variant="subtitle1" mb={1} fontSize={'.7rem'}>
                                        Ditawar Rp 200.000
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </>
                } />
            )}
            {!message && (
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
