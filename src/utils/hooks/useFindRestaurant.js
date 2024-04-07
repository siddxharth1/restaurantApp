import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFindRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const loc = useSelector((store) => store.location.coordinates);

  useEffect(() => {
    if (loc.coordinate !== undefined) {
      console.log(loc);
      fetchRestaurantList();
    }
  }, [loc]);

  async function fetchRestaurantList() {
    const data = await fetch(
      // "https://corsproxy.org/?" +
      //   encodeURIComponent(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
        loc.coordinate.lat +
        "&lng=" +
        loc.coordinate.lon +
        "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // )
    );
    if (!data.ok) {
      throw new Error("Something went wrong with fetching restaurants");
    }
    // const data = await fetch("https://corsproxy.org/?" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1894506&lng=72.88587869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
    const jsonData = await data.json();
    console.log(jsonData);

    async function findRestaurantInJson(dataa) {
      if (
        dataa?.data?.communication?.swiggyNotPresent?.swiggyNotPresent === true
      ) {
        return "No_Res";
      }
      for (let i = 0; i < dataa?.data?.cards.length; i++) {
        let restaurantLists =
          dataa?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (restaurantLists !== undefined) {
          return restaurantLists;
        }
      }
    }
    const restaurantDta = await findRestaurantInJson(jsonData);
    setRestaurantData(restaurantDta);
  }
  return restaurantData;
};

export default useFindRestaurant;
