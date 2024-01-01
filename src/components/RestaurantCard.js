import { IMG_URL } from "../constants";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) => {
    // const{name, cloudinaryImageId, cuisines, avgRating} = restaurant.info
    return (<div className="restaurent-Card">
        <img src={IMG_URL +cloudinaryImageId} alt="image" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <span>{avgRating} star</span>
    </div>
    )
}

export default RestaurantCard;