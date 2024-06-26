import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import LoadingUI from "./LoadingUI";
import useRestaurant from "../utils/hooks/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import locationIcon from "../assets/locationIcon.svg";
import FoodCategory from "./FoodCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, restaurantMenu } = useRestaurant(id);
  const dispatch = useDispatch();
  const handleAddItem = ({ card }) => {
    dispatch(addItem(card.info));
  };

  useEffect(() => {
    console.log(restaurantMenu);
  }, [restaurantMenu]);

  return !restaurant ? (
    <LoadingUI />
  ) : (
    <div>
      <div className="restaurantInfo m-10 relative">
        <div className="absolute flex justify-between flex-wrap bottom-0 h-[100%] w-[100%] p-7 text-white bg-gradient-to-t from-black pt-48">
          <div className="">
            <h1>Restaurant id: {id}</h1>
            <p className="font-bold text-5xl mb-2">{restaurant?.name}</p>
            <p className="text-gray-400 mb-2">
              {restaurant?.cuisines.join(", ")}
            </p>
            <a
              className="flex items-center"
              target="_blank"
              // href={"https://www.google.com/maps?q="+restaurant?.data?.cards?.[0]?.card?.card?.info?.latLong}
            >
              <img src={locationIcon} alt="" />
              <p className="ml-1">
                {restaurant?.locality}, {restaurant?.areaName}
              </p>
            </a>
            {/* <p className="inline">
              {restaurant?.data?.cards?.[0]?.card?.card?.info?.latLong}
            </p> */}
            {/* <p>{restaurant?.data?.cards?.[0]?.card?.card?.info?.veg ? "veg" : "nonveg"}</p> */}
            <p className="mt-1 text-lg font-bold">
              Cost for two: {restaurant?.costForTwoMessage}
            </p>
          </div>

          <div className="border border-orange-600 p-3 rounded-lg h-20 mt-9">
            <p className="pl-3">{restaurant?.avgRatingString} star</p>
            <hr />
            <p>{restaurant?.totalRatingsString}</p>
          </div>
        </div>
        <img
          className="restaurantMenuImg w-[100%] h-96 object-cover "
          src={IMG_URL + restaurant?.cloudinaryImageId}
          alt="image"
        />
      </div>

      <div className="m-10">
        {restaurantMenu.map((item) => {
          return (
            <FoodCategory
              key={item.card.card.title}
              category={item.card.card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
