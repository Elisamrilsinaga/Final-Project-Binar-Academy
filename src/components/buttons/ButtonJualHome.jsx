import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ButtonJualHome = () => {
    return (
        <Box
            width={1.0}
            flexWrap="wrap"
            textAlign="center"
            sx={{
                position: "fixed",
                bottom: 46,
                left: 0,
            }}

        >
            <Link to="/daftar-jual/add" style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#7126B5",
                        textTransform: "none",
                        // padding: "14px 24px",
                        width: { sx: "40px", md: "100px" },
                        height: { sx: "10px", lg: "40px" },
                        borderRadius: "12px",
                        color: "white",
                        marginRight: "10px",
                        boxShadow: "0 0px 12px 0.15px #7126B5",
                        spacing: 4,
                    }}
                >
                    +&nbsp;Jual
                </Button>
            </Link>
        </Box >
    )
}

export default ButtonJualHome
