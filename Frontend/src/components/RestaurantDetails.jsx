import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import styles from "./RestaurantDetails.module.css";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
      )
      .then((response) => {
        setLoading(false);
        setRestaurant(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [id]);

  if (loading) {
    return (
      <div className={styles.statusMessage}>
        <ClipLoader color="#f86c6b" size={150} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.statusMessage}>
        <h1>Error occurred. Please try again.</h1>
      </div>
    );
  }

  if (restaurant !== null) {
    return (
      <div className={styles.restaurantDetailsContainer}>
        <div className={styles.imageContainer}>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className={styles.restaurantImage}
          />
          <img
            src="/fastor_logo.png"
            alt="Fastor Logo"
            className={styles.logo}
          />
        </div>
        <h1 className={styles.restaurantName}>{restaurant.name}</h1>
        <p className={styles.restaurantDetails}>{restaurant.type}</p>
        <p className={styles.restaurantDetails}>Rating: {restaurant.rating}</p>
        <p className={styles.restaurantDetails}>
          Number of votes: {restaurant.number_of_votes}
        </p>
        <p className={styles.restaurantDetails}>
          Price starts from: $ {restaurant.price_starts_from}
        </p>
      </div>
    );
  }
};

export default RestaurantDetails;
