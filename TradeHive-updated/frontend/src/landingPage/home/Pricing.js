import React from "react";

export default function Pricing(){
    return(
       <div className="container">
        <div className="row p-5">
            <div className="col-4 p-5">
                <h1 className="mt-5 mb-3 fw-semibold fs-2">Unbeatable pricing</h1>
                <p className=" mt-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="#" className="col fs-5 fw-lignt text-decoration-none">See pricing <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>

            </div>
            <div className="col-2"></div>
            <div className="col-6 mt-5">
                <div className="row mt-5">
                    <div className="col text-center border  p-5">
                        <h1 className=""><i class="fa fa-inr fs-2" aria-hidden="true"></i>0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col text-center border p-5">
                    <h1 className=""><i class="fa fa-inr fs-2" aria-hidden="true"></i>20</h1>
                    <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
          
        </div>
       </div>
    )
}