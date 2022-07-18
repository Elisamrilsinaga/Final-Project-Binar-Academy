import { Box } from '@mui/material'
import React from 'react'
import {  useSelector } from "react-redux";

const ImgDropProfile = ({ data, setData }) => {
    const path = useSelector(state => state.profile.pathImg);

    const Upload = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('profile_picture', file);
            setData(file);
        }
        fileInput.click();
    }

    return (

        <Box onClick={Upload} sx={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
        }}>
            < Box
                component="img"
                alt="camera"
                src={path ? `${path}` : data.user_image ? `${data.user_image}` : `/images/cameraInfo.png`}
                setData={path ? path : data.user_image ? data.user_image : `/images/cameraInfo.png`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
        </Box>

    )
}
export default ImgDropProfile