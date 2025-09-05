import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomePage from '../landingPage/home/HomePage';

const Home = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                
                navigate("/login");
                return;
            }

            try {
                const { data } = await axios.post(
                    "https://backend-zerodha-soz4.onrender.com/verify",
                    {},
                    { withCredentials: true }
                );

                const { status, user } = data;
                if (status) {
                    setUsername(user);
                    toast(`Hello, ${user}`, { position: "bottom-center" });
                 
                 
                } else {

                    removeCookie("token");
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error verifying user:", error);
                removeCookie("token");
                navigate("/login");
            }
        };

        verifyCookie();
    }, [cookies, navigate, removeCookie]);

    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };

    return (
        <>
            <div className="home_page p-5 mt-5 bg-light">
                <h1 className="text-black">Welcome <span>{username}</span></h1>
                <button onClick={Logout } className="btn btn-primary ">Logout</button>
            </div>
            <ToastContainer />
            <HomePage/>
        </>
    );
};

export default Home;
