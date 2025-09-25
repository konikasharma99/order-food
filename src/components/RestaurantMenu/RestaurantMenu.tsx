import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import ShimmerRow from "../Shimmer/ShimmerRow.jsx";
import { useRestaurantMenu } from "../../utils/customHooks.js";
import { CDN_URL } from "../../utils/common.js";
const RestaurantMenu = () => {
  const resId = useParams();
  const resMenuData = useRestaurantMenu(resId);
  return (
    <div className="restaurantMenuMain">
      {resMenuData === null ? (
        <ShimmerRow />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
