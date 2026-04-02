import React from "react";
function LeftSection({imageURL,prodTitle,prodDesp,tryDemo,learnMore,googlePlay,appStore}){
    return(
        <div className="container">
            <div className="row p-3 px-5 ">
                <div className="col p-5">
                    <img src={imageURL}/>
                </div>
                <div className="col-5 text-muted p-5 mt-5">
                    <h1>{prodTitle}</h1>
                    <p className="mt-3 fs-5">{prodDesp}</p>
                    <div className="mt-4 fw-semibold">
                        <a href={tryDemo} className="mx-4" style={{textDecoration:"none"}}>Try demo &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} className="mx-4" style={{textDecoration:"none"}}>Learn more &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-4 fw-semibold">
                        <a href={googlePlay} className="mx-2"><img src="assets\images-20250426T135433Z-001\images\googlePlayBadge.svg"/></a>
                        <a href={appStore} className="mx-2"><img src="assets\images-20250426T135433Z-001\images\appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftSection;