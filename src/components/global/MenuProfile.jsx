import { Box, Link } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from "react-router-dom";

const MenuProfile = () => {
    let navigate = useNavigate(); 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlelogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <>
            <Box id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} sx={{ cursor: 'pointer' }}>
                <PersonIcon />
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem component={Link} onClick={()=>{navigate(`/profile`);handleClose()}} >Profile</MenuItem>
                <MenuItem onClick={handlelogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default MenuProfile
