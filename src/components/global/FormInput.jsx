import { Box, IconButton, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormInput = ({ label, value, setValue, type, placeholder, error, select }) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <Box width={"100%"} >
            <Typography fontSize={12} mb={1}>{label}</Typography>

            {type === 'select' && <Select
                onChange={(e) => setValue(e.target.value)}
                error={error ? true : false}
                disableUnderline
                variant="standard"
                value={value}
                displayEmpty
                fullWidth
                renderValue={() => (value !== '' ? value : placeholder)}
                sx={{ marginBottom: '1rem', borderRadius: '16px', border: '1px solid #D0D0D0', color: value === '' ? '#D0D0D0' : '#000', padding: '0.5rem' }}
            >
                <MenuItem disabled value="">{placeholder}</MenuItem>
                {select.map((item, index) => {
                    return <MenuItem key={index} value={item.city}>{item.city}</MenuItem>
                })}
            </Select>}

            {type === 'text' && <TextField
                sx={{ marginBottom: '1rem', borderRadius: '16px', border: '1px solid #D0D0D0', padding: '0.5rem' }}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                id="outlined-basic"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                placeholder={placeholder}
                error={error}
                required
                fullWidth
            />}

            {type === 'textarea' && <TextField
                sx={{ marginBottom: '1rem', borderRadius: '16px', border: '1px solid #D0D0D0', padding: '0.5rem' }}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                placeholder={placeholder}
                error={error}
                fullWidth
                multiline
                required
                rows={4}
            />}

            {type === 'password' && <TextField
                sx={{ marginBottom: '1rem', borderRadius: '16px', border: '1px solid #D0D0D0', padding: '0.5rem' }}
                variant="standard"
                onChange={(e) => setValue(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                error={error}
                fullWidth
                required
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                    disableUnderline: true,
                }}
            />}
        </Box>
    )
}

export default FormInput
