import React from "react";
import FormInput from "../global/FormInput";
import ButtonClick from "../global/ButtonClick";
import ImgDropProfile from "../buttons/ImgDropProfile";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "../../redux/profile";

const InfoProfileField = () => {
    const uid = localStorage.getItem("uid");
    const profile = useSelector((state) => state.profile.profile.data);

    const kota = useSelector((state) => state.city.city);
    const path = useSelector((state) => state.profile.pathImg);
    console.log('profile',profile)
    const [fullname, setfullname] = React.useState(profile.user_name || "");
    const [city_id, setcity_id] = React.useState(profile.city|| "");
    const [number_phone, setnumber_phone] = React.useState(profile.number_phone|| "");
    const [address, setAddress] = React.useState(profile.address|| "");
    const [profile_picture, setProfilePicture] = React.useState(profile.user_image|| "");

    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = {
            user_name : fullname,
            user_image: path ? path : profile_picture,
            city: kota.find((item) => item.city === city_id).id,
            address,
            number_phone,
        }

        dispatch(UpdateProfile({  data }));
    }

    return (
        <>
            <ImgDropProfile data={profile} setData={setProfilePicture} />
            <FormInput label="Nama" value={fullname} setValue={setfullname} placeholder='Nama' type={'text'} />

            <FormInput label="Kota" value={city_id} setValue={setcity_id} placeholder='Pilih Kota' type={'select'} select={kota} defaultValue={profile.city} />

            <FormInput label="Alamat" value={address} setValue={setAddress} placeholder='Contoh: Jalan Ikan Hiu 33' type={'textarea'} defaultValue={profile.address} />

            <FormInput label="No. HP" value={number_phone} setValue={setnumber_phone} placeholder='contoh: +628123456789' type={'text'} defaultValue={profile.number_phone} />

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