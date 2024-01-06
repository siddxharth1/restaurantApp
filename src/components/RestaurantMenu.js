import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import LoadingUI from "./LoadingUI";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <LoadingUI />
  ) : (
    <div>
      <div className="restaurantInfo m-10 relative">
        <div className="absolute flex justify-between  flex-wrap bottom-0 h-[100%] w-[100%] p-7 text-white bg-gradient-to-t from-black pt-44">
          <div className="">
            <h1>Restaurant id:{id}</h1>
            <p className="font-bold text-5xl mb-1">
              {restaurant?.data?.cards?.[0]?.card?.card?.info?.name}
            </p>
            <p className="text-gray-400 mb-1">
              {restaurant?.data?.cards?.[0]?.card?.card?.info?.cuisines.join(
                ", "
              )}
            </p>
            <p className="inline ">
              {restaurant?.data?.cards?.[0]?.card?.card?.info?.locality},{" "}
              {restaurant?.data?.cards?.[0]?.card?.card?.info?.areaName}
            </p>{" "}
            <p className="inline">
              {restaurant?.data?.cards?.[0]?.card?.card?.info?.latLong}
            </p>
            {/* <p>{restaurant?.data?.cards?.[0]?.card?.card?.info?.veg ? "veg" : "nonveg"}</p> */}
            <p className="mt-1 text-lg font-bold">
              Cost for two:{" "}
              {
                restaurant?.data?.cards?.[0]?.card?.card?.info
                  ?.costForTwoMessage
              }
            </p>
          </div>

          <div className="border border-orange-600 p-3 rounded-lg h-20 mt-9">
            <p className="pl-3">
              {restaurant?.data?.cards?.[0]?.card?.card?.info?.avgRatingString}{" "}
              star
            </p>
            <hr />
            <p>
              {
                restaurant?.data?.cards?.[0]?.card?.card?.info
                  ?.totalRatingsString
              }
            </p>
          </div>
        </div>
        <img
          className="restaurantMenuImg w-[100%] h-96 object-cover "
          src={
            IMG_URL +
            restaurant?.data?.cards?.[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="image"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-7 mx-auto  justify-between">
        {(restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
          (card) => {
            return (
              <div key={card.card.info.id} className=" shadow-2xl rounded-lg p-3 flex flex-col gap-2 justify-center">
                <img src={IMG_URL + "/w_208/" + card.card.info.imageId} className=""></img>
                <h5> {card.card.info.name}</h5>
                <h5> {card.card.info.defaultPrice/100}</h5>
                <button className="bg-green-700 p-2 rounded">Add to cart</button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
