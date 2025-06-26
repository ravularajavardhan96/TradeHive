import React from "react";

function Education(){
    return(
        <div className="container">
            <div className="row p-5">
                <div className="col p-5">
                    <img src="assets\images-20250426T135433Z-001\images\education.svg" style={{width:"80%"}}/>

                </div>
                <div className="col p-5">
                    <h1 className="fs-2 mt-5 mb-4">Free and open market education</h1>
                    <p className="">Varsity,the largest online stock market education book in the world covering everything from basic to advanced trading.</p>
                    <a href="#" className="col fs-5 fw-normal text-decoration-none">Varsity &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>
                    <a href="#" className="col fs-5 fw-normal text-decoration-none">TradingQ&A &nbsp;  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;