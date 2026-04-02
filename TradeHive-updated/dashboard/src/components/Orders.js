import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-zerodha-soz4.onrender.com/getOrders")
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error("Failed to load orders:", err.message));
  }, []);

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Price</th>
              <th>Qty.</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Executed At</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.qty}</td>
                <td className={item.mode === "BUY" ? "profit" : "loss"}>
                  <strong>{item.mode}</strong>
                </td>
                <td>{item.status || "EXECUTED"}</td>
                <td>
                  {item.executedAt
                    ? new Date(item.executedAt).toLocaleString("en-IN", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {allOrders.length === 0 && (
          <Link to={"/"} className="btn">
            Get started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Orders;
