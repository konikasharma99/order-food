import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import { useEffect, useState } from "react";
import {
  CDN_URL,
  CORS_PROXY,
  RESTAURANT_MENU_API,
} from "../../utils/common.js";
const RestaurantMenu = () => {
  const resId = useParams();
  const [resMenuData, setResMenuData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch(
      CORS_PROXY + RESTAURANT_MENU_API + resId.resId
    );
    const data = await response.json();
    setResMenuData(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
        ?.card?.itemCards
    );
  };
  if (resMenuData === null) {
    return (
      <>
        <h1>Null</h1>
      </>
    );
  }
  return (
    <div className="restaurantMenuMain">
      <h1>Restaurant Menu</h1>
      {resMenuData?.map((item) => {
        return (
          <>
            <div className="menuCard">
              <img
                className="resMenuImg"
                src={CDN_URL + item.card.info.imageId}
              />
              <p>{item.card.info.name}</p>
              <p>{item.card.info.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
