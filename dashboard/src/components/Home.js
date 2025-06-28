import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // ✅ Declare and use tokenFromUrl inside useEffect
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    console.log("URL token:", tokenFromUrl); // ✅ Safe here

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      // ✅ Clean the URL after saving token
      window.history.replaceState(null, null, window.location.pathname);
    }

    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      console.log("Stored token:", token); // ✅ Helpful for debugging

      if (!token) {
        window.location.href = "http://localhost:3002";
        return;
      }

      try {
        const res = await fetch("http://localhost:3001/verify", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include", // Optional but good if you're using cookies
        });

        const data = await res.json();
        console.log("Verify API response:", res.status, data);

        if (res.status === 200) {
          setIsVerified(true);
        } else {
          window.location.href = "http://localhost:3002";
        }
      } catch (err) {
        console.error("Verification failed:", err);
        window.location.href = "http://localhost:3002";
      }
    };

    verifyToken();
  }, []);

  if (!isVerified) return <p>Verifying user...</p>;

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
