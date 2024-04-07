import { IMG_URL } from "../constants";
import imag from "../assets/download.png";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // const{name, cloudinaryImageId, cuisines, avgRating} = restaurant.info
  return (
    <div className="w-80 mx-auto hover:scale-[0.96] transition-all duration-300 ">
      <img
        className="h-60 w-80 object-cover rounded-3xl  drop-shadow-xl"
        src={IMG_URL + cloudinaryImageId}
        alt="image"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = imag;
        }}
      />

      <div className="m-2">
        <h2 className="font-semibold text-xl overflow-hidden whitespace-nowrap text-ellipsis">
          {name}
        </h2>
        <div className="flex align-middle">
          <svg
            className=" mt-1 mr-1 w-4 h-4 text-yellow-300 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {avgRating} star
        </div>
        <h4 className="overflow-hidden whitespace-nowrap text-ellipsis text-gray-600">
          {cuisines.join(", ")}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
