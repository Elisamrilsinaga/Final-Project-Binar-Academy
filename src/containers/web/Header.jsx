import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Link, Button, useMediaQuery } from "@mui/material"
import SearchField from "../../components/web/SearchField"
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';
import LoginIcon from "@mui/icons-material/Login";
import ModalNotifikasi from "../../components/modals/ModalNotifikasi";
import MenuProfile from "../../components/global/MenuProfile";
import SidebarM from "../../components/mobile/SidebarM";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonBack from "../../components/buttons/ButtonBack";
import { GetAllNotif } from "../../redux/notif";
import { useDispatch, useSelector } from "react-redux";


const Header = ({ active, title, }) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    let navigate = useNavigate(); 
    const islogin = localStorage.getItem("token")
    const [open, setOpen] = React.useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
    const notifikasiButton = () => {
        isNotificationOpen ? setIsNotificationOpen(false) : setIsNotificationOpen(true)
    }
    const dispatch = useDispatch()
    const notifs = useSelector((state) => state.notif.notifs.data);
    console.log(notifs)
    useEffect(() => {
        dispatch(GetAllNotif());
    }, [dispatch]);

    return (
        <>
            {isNotificationOpen && !isMobile && (<ModalNotifikasi message={notifs} />)}
            {open && isMobile && (
                <>
                <Box
                    bgcolor={"rgba(0, 0, 0, 0.6)"}
                    position={"fixed"}
                    width={"100%"}
                    maxWidth={"100%"}
                    height={"100%"}
                    zIndex={10}
                />
                <SidebarM setOpen={setOpen} login={islogin? true:false} message={notifs} openNotif={isNotificationOpen} setOpenNotif={setIsNotificationOpen} />
                </>
            )}
            {!title &&
                <Box width={"100%"} component="header" display='flex' boxShadow={{
                    xs : "none",
                    md : '0px 0px 10px rgba(0, 0, 0, 0.15)'
                }} backgroundColor={{ xs : "transparent", md : "white"}} 
                // mt={{xs : "10px", md : 0}}
                mb={{xs : "-110px", md: 0}}
                justifyContent='space-between' alignItems='center' height='80px' px={{
                    xs : 1,
                    md : 16
                }}>
                    <Box display='flex' alignItems='center' width="100%" zIndex="1">
                        <Box display={{
                            xs : "none",
                            md: "block"
                        }}>
                            <Link onClick={()=>navigate('/')} >
                                <Box component='img'
                                    src='/images/Logo.png'
                                    alt='Logo'
                                    mr={2}
                                />
                            </Link>
                        </Box>
                        <Box sx={{ background: "white", borderRadius: 2, mr: 2, p: 1 }} display={{
                            xs : "block",
                            md: "none"
                        }}>
                            <MenuIcon sx={{ fontSize: "25px" }} onClick={() => setOpen(true)} />
                        </Box>
                        <SearchField />
                    </Box>
                    <Box display={{
                        xs : 'none',
                        md: "block",
                        
                    }} >
                    {
                        islogin ? (
                            <Box width={'6rem'} display='flex' justifyContent='space-between' alignItems={'center'}>
                                <Link onClick={()=>navigate('/daftar-jual')} color={'inherit'}>
                                    <ListIcon color={active ? 'primary' : 'textPrimary'} />
                                </Link>
                                {
                                    notifs?.length > 0 ? (
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
                                onClick={()=>navigate('/login')}
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
                </Box >
            }
            {title &&
                <Box component="header" justifyContent={"center"}   display='flex' boxShadow={{xs : "none", md: '0px 0px 10px rgba(0, 0, 0, 0.15)'}} alignItems='center' height='80px' >                    
                    <Box display={{ xs : "none", md : 'flex'}} alignItems='center' position={"absolute"} justifySelf="start" left="8rem">
                        <Link onClick={()=>navigate("/")}>
                            <Box component='img'
                                src='/images/logo.png'
                                alt='logo'
                                mr={2}
                            />
                        </Link>
                    </Box>
                    <Box display={{ xs : "flex", md : 'none'}} alignItems='center' position={"absolute"} justifySelf="start" left="1rem">
                        <ButtonBack  />
                    </Box>
                    <Box  justifyContent='space-between'  >
                        {title}
                    </Box>
                </Box >
            }
        </>
    )
}

export default Header
