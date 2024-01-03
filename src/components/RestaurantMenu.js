import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import LoadingUI from "./LoadingUI";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useRestaurant(id)

     return !restaurant ? (<LoadingUI/>) : (
        <div>
            <div className="restaurantInfo">
                <h1>Restaurant id:{id}</h1>
                <p>{restaurant?.data?.cards?.[0]?.card?.card?.info?.name}</p>
                <img className="restaurantMenuImg" src={IMG_URL +"/w_208/"+ restaurant?.data?.cards?.[0]?.card?.card?.info?.cloudinaryImageId} alt="image" />
                <p>{restaurant?.data?.cards?.[0]?.card?.card?.info?.city}</p>
                <p>{restaurant?.data?.cards?.[0]?.card?.card?.info?.areaName}</p>
                <p>{restaurant?.data?.cards?.[0]?.card?.card?.info?.costForTwoMessage}</p>
                <p>{restaurant?.data?.cards?.[0]?.card?.card?.info?.avgRatingString} star</p>
            </div>
            <div className="menu">
            {(restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((card)=>{
                return (
                    <div key={card.card.info.id}>
                        <img src={IMG_URL+"/w_208/"+card.card.info.imageId}></img>
                        <h5> Name: {card.card.info.name}</h5> 
                        <h5> Name: {card.card.info.price}</h5> 
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default RestaurantMenu;