import React from "react";
function CreateTicket(){
    return(

      <>

      <div className="container-fluid p-5 mx-5" id="supportWrapper">
        <div className="d-flex justify-content-between align-items-center px-5">
          <h5 className="p-0 m-0 text-light ms-5">Support Portal</h5>
          <a href="#" className="text-light me-5">Track tickets</a>
        </div>
        <div className="row p-5 mt-3">
          <div className="col-7 text-light px-5">
            <h4>Search for an answer or browse help topics to create a ticket</h4>
            <input placeholder="Eg: How do I activate F&O,why is my order getting rejected ..." id="supportInp"  className="mt-3 p-3" ></input>
            <i class="fa fa-search  p-0 m-0 text-center" id="search-icon" aria-hidden="true"></i><br/>
            <div className="d-flex flex-wrap">
              <a href="#" className="text-light mt-3 mx-3">Track account opening</a>
              <a href="#" className="text-light mt-3  mx-3"> Track segment activation</a>
              <a href="#" className="text-light mt-3  mx-3"> Intraday margins</a>
              <a href="#" className="text-light mt-3  mx-3">Kite user manual</a>
            </div>
          </div>
          <div className="col-5 text-light py-5">
            <h4>Featured</h4>
            <ol>
              <li className="mt-3 mb-2"><a href="#" className="text-light ">Current Takeovers and Delisting – April 2025</a></li>
              <li className="mt-3 "><a href="#" className="text-light">Rights Entitlements listing in April 2025</a></li>
            </ol>
          </div>
        </div>
      </div>

<div className="container mt-5 py-5">
        <h1 className="text-muted fs-5 fw-normal">To create a ticket, select a relevant topic</h1>
        <div className="row  text-center ms-5 mt-5 p-5">
          <div className="col text-start p-2">
              <h5 className="mb-4"><i class="fa fa-plus-circle" aria-hidden="true"></i> &nbsp;Account Opening</h5>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3   d-block">Resident individual</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Minor</a>
             <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block"> Non Resident Indian (NRI)</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3  d-block ">Company, Partnership, HUF and LLP</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">Glossary</a>
          </div>

          <div className="col text-start p-2">
              <h5 className="mb-4"><i class="fa fa-user-circle-o" aria-hidden="true"></i> &nbsp;Your Zerodha Account</h5>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3   d-block">Your Profile</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Account modification</a>
             <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block"> Client Master Report (CMR) and Depository<br/> Participant (DP)</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3  d-block ">Nomination</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">Transfer and conversion of securities</a>
          </div>

          <div className="col text-start p-2">
              <h5 className="mb-4"><i class="fa fa-bar-chart" aria-hidden="true"></i> &nbsp; Kite</h5>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3   d-block">IPO</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Trading FAQs</a>
             <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block"> Margin Trading Facility (MTF) and Margins</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3  d-block ">Charts and orders</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">Alerts and Nudges</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">General</a>
          </div>
      </div>


      <div className="row  text-center ms-5 mt-2 p-5">
          <div className="col text-start p-2">
              <h5 className="mb-4"><i class="fa fa-folder" aria-hidden="true"></i> &nbsp; Funds</h5>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3   d-block">Add money</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Withdraw money</a>
             <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block"> Add bank accounts</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">eMandates</a>
          </div>

          <div className="col text-start p-2">
              <h5 className="mb-4"><i class="fa fa-codiepie" aria-hidden="true"></i> &nbsp; Console</h5>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3   d-block">Portfolio</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Corporate actions</a>
             <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Funds statement</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3  d-block ">Reports</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">Profile</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">Segments</a>
          </div>

          <div className="col text-start p-2">
              <h5 className="mb-4"><i class="fa fa-circle-o-notch" aria-hidden="true"></i> &nbsp; Coin</h5>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3   d-block">Understanding mutual funds and Coin
              </a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Coin app</a>
             <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block">Coin web</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3  d-block ">Transactions and reports</a>
              <a href="#" style={{textDecoration:"none",fontSize:"14px"}} className="mt-3 d-block ">National Pension Scheme (NPS)</a>
          </div>
      </div>
      </div>
      </>
     
    )
}
export default CreateTicket;