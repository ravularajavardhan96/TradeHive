// frontend/src/pages/dashboard/DashboardHome.js

import React from "react";
import TopBar from "./components/TopBar";
import Summary from "./components/Summary";
import Positions from "./components/Positions";
import Orders from "./components/Orders";
import WatchList from "./components/WatchList";
import Funds from "./components/Funds";

const DashboardHome = () => {
  return (
    <div>
      <TopBar />
      <Summary />
      <Positions />
      <Orders />
      <WatchList />
      <Funds />
    </div>
  );
};

export default DashboardHome;
