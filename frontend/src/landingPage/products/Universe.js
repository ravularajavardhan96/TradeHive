import React from "react";
import {Link } from 'react-router-dom';
function Universe(){
    return(
        <div className="container p-5">
            <p className="fs-5 text-center d-block my-5 ">Want to know more about our technology stack? Check out the <a href="#" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            <h1 className="text-center fs-2 text-muted " style={{marginTop:"7rem"}}>The Zerodha Universe</h1>
            <p className=" text-center mt-4">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row mt-5 p-5 text-center ">
                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\zerodhaFundhouse.png" style={{width:"198px"}} className="mb-3"/><br/>
                    <p className="text-center text-muted fs-6">Our asset management venture<br/>
                            that is creating simple and transparent index<br/>
                            funds to help you save for your goals.
                    </p>
                </div>

                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\sensibullLogo.svg" style={{width:"198px"}} className="mt-2 mb-5" /><br/>
                    <p className="text-center text-muted fs-6">Systematic trading platform
that allows you to create and backtest
strategies without coding.

                    </p>
                </div>

                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\tijori.svg" style={{width:"198px"}} className="mb-3" /><br/>
                    <p className="text-center text-muted fs-6">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

                    </p>
                </div>
            </div>


            <div className="row mt-2 p-5 text-center ">
                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\streakLogo.png" style={{width:"198px"}} className="mb-3"/><br/>
                    <p className="text-center text-muted fs-6">Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.

                    </p>
                </div>

                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\smallcaseLogo.png" style={{width:"198px"}} className=" mb-4" /><br/>
                    <p className="text-center text-muted fs-6">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

                    </p>
                </div>

                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\dittoLogo.png" style={{width:"198px"}} className="mb-3" /><br/>
                    <p className="text-center text-muted fs-6">Personalized advice on life
and health insurance. No spam
and no mis-selling.

                    </p>
                </div>
            </div>
          <div className="text-center">
          <Link className="btn btn-primary pt-2 pb-2 fs-5 fw-semibold mt-4 mb-5  text-center " style={{width:"20%",margin:"auto 0",alignSelf:"center"}} to={"/signup"}>Sign up for free</Link>
          </div>
    
        </div>
    )
}

export default Universe;