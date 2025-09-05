import React from "react";
function Hero(){
    return(
        <div className="container">
            <div className="row text-center">
            <h1 className="fs-2 mt-5 mb-5">We pioneered the discount broking model in India.<br/>
            Now, we are breaking ground with our technology.</h1>
            </div>

            <div className="row border-top mt-5 mb-5 p-5" style={{fontSize:"1.1rem"}}>
                <div className="col m-2 mt-5 px-5 ">
                    <p className="px-4 mt-3">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company TradeHive, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p  className="px-4 mt-3">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p  className="px-4 mt-3">Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col m-2 mt-5 px-5">
                    <p  className="px-4 mt-3">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p  className="px-4 mt-3"><a href="#" style={{textDecoration:"none"}}> Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p  className="px-4 mt-3">And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#" style={{textDecoration:"none"}}> blog</a> or see what the media is  <a href="#" style={{textDecoration:"none"}}> saying about us</a> or learn more about our business and product  <a href="#" style={{textDecoration:"none"}}>philosophies</a>.</p>
                </div>
            </div>
            <div className="row border-top ">
                <h2 className="mt-5 text-center fw-semibold">People</h2>
                
                <div className="col text-center ms-5 mt-5">
                    <img src="assets\images-20250426T135433Z-001\images\nithinKamath.jpg" style={{borderRadius:"50%",width:"60%"}} className="mt-3"/>
                    <h5 className="fw-normal mt-4">Nithin Kamath</h5>
                    <h6 className="text-muted mt-4">Founder, CEO</h6>
                </div>
                <div className="col   mt-5 p-5 me-5 " style={{fontSize:"1.1rem"}}>
                    <p  className="px-4 mt-3">Nithin bootstrapped and founded TradeHive in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeHive has changed the landscape of the Indian broking industry.</p>

                    <p  className="px-4 mt-3"> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p  className="px-4 mt-3">Connect on<a href="#" style={{textDecoration:"none"}}> Homepage</a>/ <a href="#" style={{textDecoration:"none"}}> TradingQnA</a>/<a href="#" style={{textDecoration:"none"}}>Twitter</a>.</p>
                </div>
               
            </div>
        </div>
    )
}
export default Hero;