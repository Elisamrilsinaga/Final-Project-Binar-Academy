import { Box, Typography, Link } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const AddButton = () => {
    return (
        <Box component={Link} href={'/daftar-jual/add'} sx={{
            borderRadius: '10px',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '352px',
            height: '16.2rem',
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
