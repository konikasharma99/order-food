import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import { useEffect, useState } from "react";
import {
  CDN_URL,
  CORS_PROXY,
  RESTAURANT_MENU_API,
  RESTAURANT_MENU_API_END,
} from "../../utils/common.js";
const RestaurantMenu = () => {
  const resId = useParams();
  const [resMenuData, setResMenuData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    //if cors error go to : https://cors-anywhere.herokuapp.com/corsdemo
    const response = await fetch(
      CORS_PROXY + RESTAURANT_MENU_API + resId.resId + RESTAURANT_MENU_API_END
    );
    const data = await response.json();
    setResMenuData(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
        ?.card?.itemCards
    );
  };
  console.log("It's here", resMenuData);
  if (resMenuData === null) {
    return (
      <>
        <h1>Null</h1>
      </>
    );
  }
  return (
    <div className="restaurantMenuMain">
      <h1 className="my-4 font-extrabold">Restaurant Menu</h1>
      {resMenuData?.map((item) => {
        return (
          <>
            <div className="flex items-center justify-between w-6/12 m-4  p-4 border-b-1">
              <img
                className="w-30 h-35"
                src={CDN_URL + item.card.info.imageId}
              />
              <button className="border-2 rounded-2xl absolute mx-9 mt-20 px-2 py-1 border-black bg-black text-white hover:p-2 cursor-pointer">
                Add +
              </button>
              <div className="flex flex-col justify-end mx-3">
                <p className="font-bold my-1">{item.card.info.name}</p>
                <p className="font-bold">
                  Rs. {item.card.info?.price / 100}
                  <span className="ml-3.5">
                    {item.card.info?.ratings?.aggregatedRating?.rating} *
                  </span>
                </p>
                <p>{item.card.info?.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
