import React, { useState } from "react";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import ImgDropProfile from "../buttons/ImgDropProfile";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile, UpdateProfile } from "../../redux/profile";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const kota = [
    'Jakarta',
    'Bogor',
    'Depok',
    'Tangerang',
    'Bekasi'
]

const InfoProfileField = () => {
    const profile = useSelector((state) => state.profile.profile.data);
    const [error,setError] = useState({})
    const [submit,setSubmit] = useState(false)
    
    const [fullname, setfullname] = React.useState(profile.user_name || "");
    const [city_id, setcity_id] = React.useState(profile.city|| "");
    const [phone, setphone] = React.useState(profile.phone|| "");
    const [address, setAddress] = React.useState(profile.address|| "");
    const [profile_picture, setProfilePicture] = React.useState(profile.user_image|| "");

    const dispatch = useDispatch()

    const validation = () => {
        const err = {
            userName : fullname ? null : "Mohon masukkan nama",
            picture: !profile_picture || profile_picture === profile.user_image ? "Mohon masukkan gambar" : null,
            city: city_id ? null : "Mohon masukkan kota",
            address: address ? null : "Mohon masukkan alamat",
            phone: phone ? null : "Mohon masukkan telepon",
        }
        setError(err)
    }
    
    const handleUpdate = (e) => {
        setSubmit(true)
        e.preventDefault(); 
        if(!Object.values(error).every(x => x === null))
        return
        const data = {
            userName : fullname,
            picture: profile_picture,
            city: city_id,
            address: address,
            phone: phone,
        }
        dispatch(UpdateProfile(data ));
        dispatch(GetProfile());
        
    }

    useEffect(() => {
        validation()
    }, [fullname,profile_picture,city_id,address,phone])

    return (
        <>
            <ImgDropProfile data={profile} setData={setProfilePicture} />
            {submit&&error.picture && <Typography color="error" mt={1} mb={"0.5rem"}>{error.picture}</Typography>}
            <FormInput label="Nama" value={fullname} setValue={setfullname} placeholder='Nama' type={'text'} />
            {submit&&error.userName && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.userName}</Typography>}
            <FormInput label="Kota" value={city_id} setValue={setcity_id} placeholder='Pilih Kota' type={'select'} select={kota} defaultValue={profile.city} />
            {submit&&error.city && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.city}</Typography>}
            <FormInput label="Alamat" value={address} setValue={setAddress} placeholder='Contoh: Jalan Ikan Hiu 33' type={'textarea'} defaultValue={profile.address} />
            {submit&&error.address && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.address}</Typography>}
            <FormInput label="No. HP" value={phone} setValue={setphone} placeholder='contoh: +628123456789' type={'text'} defaultValue={profile.phone} />
            {submit&&error.phone && <Typography color="error" mt={"-15px"} mb={"0.5rem"}>{error.phone}</Typography>}
            <ButtonClick title="Simpan" onClick={handleUpdate} primary />
        </>
    )
}

export default InfoProfileField

    // const dataKota = [...new Set(kota.map((item) => item.city))];
    // console.log(dataKota);
    // console.log(kota);

    // const [fullname, setfullname] = React.useState("");
    // const [city_id, setcity_id] = React.useState("");
    // const [number_phone, setnumber_phone] = React.useState("");
    // const [address, setAddress] = React.useState("");
    // const [profile_picture, setProfilePicture] = React.useState("");