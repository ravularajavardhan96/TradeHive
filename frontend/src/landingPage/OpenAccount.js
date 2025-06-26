import React from "react";
import {Link} from "react-router-dom";

function OpenAccount(){
    return(
        <div className="container">
            <div className="row text-center mt-3 p-2">
            <div className="col-12 mb-3"> 
                <h1 className="fs-1 fw-semibold mt-5 mb-3">Open a Zerodha account</h1>
                <p className="mb-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link className="btn btn-primary pt-2 pb-2 fs-5 fw-semibold mt-2" style={{width:"17%",alignSelf:"center",margin:"auto 0"}} to={"/signup"}>Sign up for free</Link></div>

            </div>
        </div>
    )
}
export default OpenAccount;