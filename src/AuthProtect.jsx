import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// import React, { useCallback, useEffect, useState } from "react";
// import { Outlet, Navigate } from "react-router-dom";

// const fakeApi = () =>
//     new Promise((resolve, reject) => {
//         const isAuthenticated = localStorage.getItem("isAuthenticated");
//         if (isAuthenticated === "true") {
//             setTimeout(function () {
//                 resolve(200);
//             }, 500);
//         }
//     });


const AuthProtect = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const [isLogin, setIsLogin] = useState('');
    // console.log(islogin);
    useEffect(() => {
        setIsLogin(isAuthenticated);
    }, [isAuthenticated]);
    return (
        <div>
            {isLogin ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
    // const [auth, setAuth] = useState("loading");

    // const checkAuth = useCallback(() => {
    //     fakeApi().then((response) => {
    //         if (response === 200) {
    //             setAuth("success");
    //         } else {
    //             setAuth("fail");
    //         }
    //     });
    // }, []);

    // useEffect(() => {
    //     checkAuth();
    // }, [checkAuth]);

    // const renderPrivate = () => {
    //     if (auth === "loading") {
    //         return (
    //             <div>
    //                 <h3>Loading</h3>
    //             </div>
    //         );
    //     } else if (auth === "success") {
    //         return <Outlet />;
    //     } else {
    //         return <Navigate to="/login" />;
    //     }
    // };

    // return renderPrivate();
}

export default AuthProtect
