import styles from "./RestaurantCard.module.css";
import { CDN_URL, SEARCH_BAR_LOGO } from "../../utils/common";
import { useState } from "react";
interface IProps {
  cardProps: any;
}
const RestaurantCard = (props: IProps) => {
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const imgUrl = CDN_URL;
  const [restaurants, setRestaurants] = useState(props.cardProps);
  const [allRestaurants] = useState(props.cardProps);
  const filterRestsAbove4 = () => {
    setRestaurants(restaurants.filter((e) => e.info.avgRatingString > 4.3));
  };
  const searchRestaurantList = () => {
    console.log("**", searchRestaurant);
    setRestaurants(
      allRestaurants.filter((e) =>
        e.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
      )
    );
  };
  const sortOnRating = () => {
    const sortByStars = [...restaurants];
    sortByStars.sort((a, b) => {
      return b.info.avgRating - a.info.avgRating;
    });
    setRestaurants(sortByStars);
  };
  return (
    <>
      <div className={styles.buttonsDiv}>
        <button
          className={styles.sortButton}
          onClick={() => filterRestsAbove4()}
        >
          <p className={styles.sortButtonText}>
            Restaurants with rating above 4.3
          </p>
        </button>
        <button className={styles.sortButton} onClick={() => sortOnRating()}>
          <p className={styles.sortButtonText}>Sort Restaurants on rating</p>
        </button>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            placeholder="Search for food"
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <img
            onClick={() => searchRestaurantList()}
            className={styles.searchLogo}
            src={SEARCH_BAR_LOGO}
          />
        </div>
      </div>
      <div className={styles.allRestaurants}>
        {restaurants.map((cardObj: any) => {
          return (
            <div key={cardObj.info.id} className={styles.restaurantCardMain}>
              <img
                className={styles.restaurantImg}
                src={imgUrl + cardObj.info.cloudinaryImageId}
              />
              <p className={styles.restaurantTitle}>{cardObj.info.name}</p>
              <p className={styles.restaurantSubtitle}>
                {cardObj.info.cuisines.join(", ")}
              </p>
              <p className={styles.restaurantSubtitle}>
                {cardObj.info.areaName}
              </p>
              <p className={styles.restaurantSubtitle}>
                Rating : {cardObj.info.avgRatingString} ||{" "}
                {cardObj.info.costForTwo}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default RestaurantCard;
