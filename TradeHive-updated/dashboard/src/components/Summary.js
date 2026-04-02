import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Summary Component
 * Fetches live portfolio summary from /getPortfolioSummary API.
 * Displays margin, total invested capital, current value, and real-time P&L —
 * giving retail investors a quick health check of their portfolio.
 */
const Summary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://backend-zerodha-soz4.onrender.com/getPortfolioSummary")
      .then((res) => {
        setSummary(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load portfolio summary:", err.message);
        setLoading(false);
      });
  }, []);

  const isProfitable = summary && parseFloat(summary.totalPnL) >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, Trader!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>
        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>Margins used <span>0</span></p>
            <p>Opening balance <span>3.74k</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({loading ? "..." : summary?.holdingsCount ?? 0})</p>
        </span>
        <div className="data">
          <div className="first">
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <h3 className={isProfitable ? "profit" : "loss"}>
                ₹{summary?.totalPnL ?? "0.00"}{" "}
                <small>{summary?.pnlPercent ?? "0.00%"}</small>
              </h3>
            )}
            <p>P&amp;L</p>
          </div>
          <hr />
          <div className="second">
            <p>Current Value <span>₹{loading ? "..." : summary?.totalCurrentValue ?? "0"}</span></p>
            <p>Investment <span>₹{loading ? "..." : summary?.totalInvested ?? "0"}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;

