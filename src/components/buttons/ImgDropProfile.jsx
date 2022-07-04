import { Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { UploadImageProfile } from '../../redux/profile';

const ImgDropProfile = ({ data, setData }) => {
    const uid = localStorage.getItem("uid");
    const path = useSelector(state => state.profile.pathImg);
    const dispatch = useDispatch();

    const Upload = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('profile_picture', file);
            formData.append('uid', uid);
            dispatch(UploadImageProfile(formData));
            setData(path);
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
                src={path ? `https://dev-second-hand.herokuapp.com/${path}` : data.profile_picture ? `https://dev-second-hand.herokuapp.com/${data.profile_picture}` : `/images/cameraInfo.png`}
                setData={path ? path : data.profile_picture ? data.profile_picture : `/images/cameraInfo.png`}
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