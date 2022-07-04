import React from "react";
import { Box, Link, Button } from "@mui/material"
import SearchField from "../../components/web/SearchField"
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';
import LoginIcon from "@mui/icons-material/Login";
import ModalNotifikasi from "../../components/modals/ModalNotifikasi";
import MenuProfile from "../../components/global/MenuProfile";

const Header = ({ active, title, }) => {
    const islogin = localStorage.getItem("token")
    const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
    const message = false; //ubah ini ke true kalo mau liat pesannya
    const notifikasiButton = () => {
        isNotificationOpen ? setIsNotificationOpen(false) : setIsNotificationOpen(true)
    }

    return (
        <>
            {isNotificationOpen && (<ModalNotifikasi message={message ? true : false} />)}
            {!title &&
                <Box component="header" display='flex' boxShadow='0px 0px 10px rgba(0, 0, 0, 0.15)' justifyContent='space-between' alignItems='center' height='80px' padding='0px 8rem'>
                    <Box display='flex' alignItems='center' width="44rem">
                        <Link href="/">
                            <Box component='img'
                                src='/images/logo.png'
                                alt='logo'
                                mr={2}
                            />
                        </Link>
                        <SearchField />
                    </Box>
                    {
                        islogin ? (
                            <Box width={'6rem'} display='flex' justifyContent='space-between' alignItems={'center'}>
                                <Link href='/daftar-jual' color={'inherit'}>
                                    <ListIcon color={active ? 'primary' : 'textPrimary'} />
                                </Link>
                                {
                                    message ? (
                                        <Box component={'button'} onClick={notifikasiButton} sx={{
                                            cursor: 'pointer',
                                            border: 'none',
                                            backgroundColor: 'transparent',
                                        }}>
                                            <NotificationImportantTwoToneIcon color={'primary'} />
                                        </Box>
                                    ) : (
                                        <Box component={'button'} onClick={notifikasiButton} sx={{
                                            cursor: 'pointer',
                                            border: 'none',
                                            backgroundColor: 'transparent',
                                        }}>
                                            <NotificationsIcon color={'textPrimary'} />
                                        </Box>

                                    )
                                }
                                <MenuProfile />

                            </Box>
                        ) : (
                            <Button
                                variant="contained"
                                href={"/login"}
                                sx={{
                                    backgroundColor: "#7126B5",
                                    textTransform: "none",
                                    padding: "14px 16px",
                                    height: "48px",
                                    borderRadius: "12px",
                                }}
                            >
                                <LoginIcon /> Masuk
                            </Button>
                        )
                    }

                </Box >
            }
            {title &&
                <Box component="header" display='flex' boxShadow='0px 0px 10px rgba(0, 0, 0, 0.15)' alignItems='center' height='80px' padding='0px 8rem'>
                    <Box display='flex' alignItems='center' width="44rem">
                        <Link href="/">
                            <Box component='img'
                                src='/images/logo.png'
                                alt='logo'
                                mr={2}
                            />
                        </Link>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        {title}
                    </Box>
                </Box >
            }
        </>
    )
}

export default Header
