import { Box, Typography, Link } from "@mui/material"
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const AddButton = () => {
    let navigate = useNavigate(); 
    return (
        <Box component={Link} onClick={()=>navigate('/daftar-jual/add')}  sx={{
            borderRadius: '10px',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            border: '1px dashed #ccc',
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            }
        }}>
            <AddIcon sx={{ fontSize: "80px", color: '#8A8A8A' }} />
            <Typography variant='body2' color='textSecondary'>Tambah Produk</Typography>
        </Box>
    )
}

export default AddButton
