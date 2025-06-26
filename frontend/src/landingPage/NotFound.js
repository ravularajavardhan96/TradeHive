import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="container">
            <div className="row text-center mt-5 p-2">
            <div className="col-12 mt-5 mb-3"> 
                <h1 className="fs-1 fw-semibold mt-5 mb-3">404 - Page not found</h1>
                <p className=" mt-3 mb-3">The page you are looking for is not found!</p>
               
                <button className="btn btn-primary pt-2 pb-2 fs-5 fw-semibold mt-3" style={{width:"17%",alignSelf:"center",margin:"auto 0",color:"white"}}> <Link to={"/"} className="text-light" style={{textDecoration:"none"}}>Back to Home</Link></button>
            </div>
        </div>
        </div>
    )
}
export default NotFound;