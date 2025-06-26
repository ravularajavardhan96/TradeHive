import React from "react";

function Hero(){
    return(
        <div className="container text-center pt-5">

            <h1 className="mt-5 p-5">Pricing</h1>
            <h3 className="fs-4 text-muted mb-5 ">Free equity investments and flat <i class="fa fa-inr" aria-hidden="true"></i>20 traday and F&amp;O trades</h3>
            <div className="row p-5">
                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\pricing-eq.svg" style={{width:"60%"}}/>
                    <h1 className="mt-2 fs-2">Free equity delivery</h1>
                    <p className="text-muted mt-4 ">All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\other-trades.svg" style={{width:"60%"}}/>
                    <h1 className="mt-2 fs-2 ">Intraday and F&O trades</h1>
                    <p className="text-muted mt-4 ">Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on intraday trades across <br/>equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
                </div>

                <div className="col">
                    <img src="assets\images-20250426T135433Z-001\images\pricing-eq.svg" style={{width:"60%"}}/>
                    <h1 className="mt-2 fs-3 ">Free direct MF</h1>
                    <p className="text-muted mt-4 ">All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
                </div>

            </div>
        </div>
    )
}

export default Hero;