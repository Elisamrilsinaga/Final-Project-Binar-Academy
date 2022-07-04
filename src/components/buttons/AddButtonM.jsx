import { Box, Typography, Link } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const AddButtonM = () => {
    return (
        <Box component={Link} href={'/daftar-jual/add'} sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '8.6rem',
            height: '10.5rem',
            textDecoration: 'none',
            borderRadius: '10px',
            color: 'black',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
        }}>
            <AddIcon sx={{ fontSize: "40px", color: '#8A8A8A' }} />
            <Typography variant='body2' fontSize={'.7rem'} color='textSecondary'>Tambah Produk</Typography>
        </Box>
    )
}

export default AddButtonM
