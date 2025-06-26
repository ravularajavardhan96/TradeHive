import React from "react";
function RightSection({imageURL,prodTitle,prodDesp,learnMore,kiteConnect}){
    return(
        <div className="container me-5">
             
        <div className="row  align-items-center p-3 px-5" >
           <div className="col-5 text-muted p-5   ">
                <h1 className="fs-2">{prodTitle}</h1>
                <p className="mt-3 fs-5 ">{prodDesp}</p>
                <div className="mt-4 fw-semibold">
                    {learnMore && (<a href={learnMore}  style={{textDecoration:"none"}}>Learn more &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                    {kiteConnect && (<a href={kiteConnect}  style={{textDecoration:"none"}}>Learn more &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                    
                </div>
              
             </div>
            <div className="col-7 p-5 ">
                <img src={imageURL} style={{width:"95%"}}/>
            </div>
        </div>
    </div>
    )
}
export default RightSection;