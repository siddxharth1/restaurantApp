import { useEffect, useState } from "react";

const useFindRestaurant = ()=>{
    const[restaurantData, setRestaurantData] = useState(null)

    useEffect(()=>{
        fetchRestaurantList();
    }, [])

    async function fetchRestaurantList(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1894506&lng=72.88587869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();

        async function findRestaurantInJson(dataa) {
            for (let i = 0; i < dataa?.data?.cards.length; i++) {
                let restaurantLists = dataa?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (restaurantLists !== undefined) {
                    return restaurantLists;
                }
            }
        }
        const restaurantDta = await findRestaurantInJson(jsonData);
        setRestaurantData(restaurantDta);
    }
    return restaurantData;
}

export default useFindRestaurant