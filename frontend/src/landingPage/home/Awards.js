import React from 'react';

function Awards (){
 return(
   <div className='container mt-5 mb-5'>
      <div className='row '>
         <div className='col p-3'>
            <img src='assets\images-20250426T135433Z-001\images\largestBroker.svg'/>
         </div>
         <div className='col p-3'>
            <h1>Largest stock broker in India</h1>
            <p className='mt-3'>2+ million TradeHive clients contribute 15% of retail order in volumes in India daily trading and investing in:</p>
            <div className='row'>
               <div className='col'>
                  <ul>
                     <li className='mt-3'>Futures and Options</li>
                     <li className='mt-3'>Commodity derivatives</li>
                     <li className='mt-3'>Currency derivatives</li>
                  </ul>
               </div>
               <div className='col'>
                  <ul>
                     <li className='mt-3'>Stocks & IPO's</li>
                     <li className='mt-3'>Direct Mutual funds</li>
                     <li className='mt-3'>Bonds & Govt.Securities</li>
                  </ul>
               </div>
            </div>
            <img src='assets\images-20250426T135433Z-001\images\pressLogos.png' style={{width:"80%"}} className='mt-4'/>
         </div>
      </div>
   </div>
 ) 
}

export default Awards;