import React from "react";
import {useNavigate , Link} from 'react-router-dom';

export default function Hero(){
    return(
        <div className="container mb-5">
            <div className="row text-center mt-5 p-2">
                <div className="col-12 mt-5 mb-5">
                    <img src="assets\images-20250426T135433Z-001\images\homeHero.png"style={{ width: "70%" }} className="mt-5"/>
                </div>
               <div className="col-12 mt-5 mb-5"> 
                <h1 className="fs-1 fw-semibold mt-5 mb-3">Invest in everything</h1>
                <p className="mt-3 mb-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link className="btn btn-primary pt-2 pb-2 fs-5 fw-semibold mt-4 mb-5" style={{width:"17%",alignSelf:"center",margin:"auto 0"}} to={"/signup"}>Sign up for free</Link></div>
            </div>
        </div>
    )
}