import React from "react";
import styles from "./RestaurantCard.module.css";
import { Link } from "react-router-dom";

const RestaurantCard = ({ id, image, name, rating }) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>Cakes, Pastry, Pastas</p>
          <p className={styles.description}>Connaught Place, New Delhi</p>
          <p className={styles.name}>Rating: {rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
