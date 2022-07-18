import { Box,  InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useNavigate } from "react-router-dom";

const SearchField = () => {
    let navigate = useNavigate(); 
    const [value, setValue] = React.useState('');
    const handleSearch = () => {
        navigate(`/?search=${value}`)
    }
    return (
        <Box display='flex' alignItems='center' mr={2} width={'100%'}>
            <TextField
                id="search"
                placeholder="Cari di sini ..."
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="standard"
                InputProps={{
                    endAdornment: (
                            // <Button >
                        <InputAdornment position='end' onClick={()=>handleSearch()}>
                            <SearchIcon />
                        </InputAdornment>
                            // </Button>
                    ),
                    disableUnderline: true,
                    style: {
                        color: '#000',
                        fontSize: '1rem',
                        padding: '.5rem 1rem',
                        borderRadius: '20px',
                        backgroundColor: '#f5f5f5',
                        '&:hover': {
                            backgroundColor: '#f5f5f5',
                        }
                    }
                }}
            />
        </Box>
    )
}

export default SearchField
