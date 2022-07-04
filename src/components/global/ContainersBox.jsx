import { Box } from '@mui/material'
import React from 'react'

const ContainersBox = ({ data, shadow }) => {
    const LessShadow = '0px 0px 4px rgba(0, 0, 0, 0.15)'
    const StrongShadow = '0px 0px 4px rgba(0, 0, 0, 0.15)'
    return (
        <Box p={2} mb={2} borderRadius={6} width='100%' sx={{
            backgroundColor: 'white',
            boxShadow: shadow ? StrongShadow : LessShadow,
        }}>
            {data}
        </Box>
    )
}

export default ContainersBox
