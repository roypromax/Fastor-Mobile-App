import React, { useEffect, useState } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
      )
      .then((response) => {
        setLoading(false);
        setRestaurants(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className={styles.statusMessage}>
          <ClipLoader color="#f86c6b" size={150} />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className={styles.statusMessage}>
          <h1>Error occurred. Please try again.</h1>
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />

      {restaurants.map((item) => {
        return <RestaurantCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Dashboard;
