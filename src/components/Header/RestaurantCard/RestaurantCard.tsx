import styles from "../RestaurantCard/RestaurantCard.module.css";
interface IProps {
  cardProps: any;
}
const RestaurantCard = (props: IProps) => {
  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className={styles.allRestaurants}>
      {props.cardProps.map((cardObj: any) => {
        return (
          <div key={cardObj.id} className={styles.restaurantCardMain}>
            <img
              className={styles.restaurantImg}
              src={imgUrl + cardObj.info.cloudinaryImageId}
            />
            <p className={styles.restaurantTitle}>{cardObj.info.name}</p>
            <p className={styles.restaurantSubtitle}>
              {cardObj.info.cuisines.join(", ")}
            </p>
            <p className={styles.restaurantSubtitle}>{cardObj.info.areaName}</p>
            <p className={styles.restaurantSubtitle}>
              Rating : {cardObj.info.avgRatingString} ||{" "}
              {cardObj.info.costForTwo}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantCard;
