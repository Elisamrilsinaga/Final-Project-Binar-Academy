import React from "react";
import { Button, Box } from "@mui/material";

const InfoPenawaranM = () => {
    return (
        <>
            <Box display='flex' justifyContent='center'>
                <Box display='flex' justifyContent='center' margin='2rem'>
                    <Box 
                        display='flex' 
                        flexDirection='row'
                        alignItems='center'
                        borderRadius='16px' 
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.15)"
                        width='480px'
                        height='120px'
                        ml={12}
                        >
                        <Box 
                            display='flex'
                            component='img' 
                            alt="camera"
                            src="/images/Profpic1.png"
                            borderRadius='16px'
                            justifyContent='center'
                            alignItems='center'
                            width='5rem'
                            margin={2}
                            />
                        <Box display='flex' flexDirection='column'>
                            <Box 
                                display='flex' 
                                alignItems='center' 
                                flexWrap='wrap' 
                                borderRadius='16px'
                                fontSize={24}
                            >
                                Nama Pembeli
                            </Box>
                            <Box fontSize={16}>
                                Kota
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                ml={0.6}
                fontSize={24}
                width='420px'
            >
                Daftar Produkmu yang Ditawar
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                width='500px'
            >
                <Box 
                    display='flex' 
                    flexDirection='row'
                    width='500px'
                    ml={7}
                    mt={2.6}
                    >
                    <Box 
                        component='img' 
                        alt="camera"
                        src="/images/jam1.png"
                        borderRadius='14px'
                        width='5rem'
                        height='4rem'
                        mr={2}
                        />
                    <Box display='flex' flexDirection='column'>
                        <Box fontSize={16} fontWeight={300}>
                            Penawaran Produk
                        </Box>
                        <Box display='flex' alignItems='center' flexWrap='wrap' width='240px' fontSize={24}>
                            Jam Tangan Casio Rp 250.000 Ditawar Rp 200.000
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Button
                        sx={{
                        borderRadius: "28px",
                        fontWeight: "bold",
                        color: "#7126B5",
                        borderColor: "#7126B5",
                        mt: 2,
                        mr: 3.2,
                        width: "220px",
                        height: "60px",
                        textTransform: "none",
                        fontSize: 22,
                        }}
                        variant="outlined"
                    >
                        Tolak
                    </Button>
                    <Button
                        sx={{
                        borderRadius: "28px",
                        color: "white",
                        backgroundColor: "#7126B5",
                        mt: 2,
                        width: "220px",
                        height: "60px",
                        textTransform: "none",
                        fontSize: 22,
                        }}
                        variant="contained"
                    >
                        Terima
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default InfoPenawaranM