import { useState, useEffect } from "react";
import {
  CORS_PROXY,
  RESTAURANT_MENU_API,
  RESTAURANT_MENU_API_END,
} from "../utils/common";

export const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      CORS_PROXY + RESTAURANT_MENU_API + resId.resId + RESTAURANT_MENU_API_END
    );
    const data = await res.json();
    setResMenu(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
        ?.card?.itemCards
    );
  };
  return resMenu;
};
