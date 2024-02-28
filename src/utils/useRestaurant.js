import {useEffect, useState} from 'react'
const useRestaurant=(id)=>{
    const [restaurant, setRestaurant] = useState(null);
    const [restaurantMenu, setRestaurantMenu] =  useState()

    useEffect(()=>{
        fetchRestaurant();
    }, [])

    async function fetchRestaurant() {
        const data = await fetch("https://corsproxy.org/?" + encodeURIComponent('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=21.1894506&lng=72.88587869999999&restaurantId='+id))
        const resp = await data.json();
        console.log(resp)
        setRestaurant(resp.data.cards[0].card.card.info)

        const restaurants = resp.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>{
            return item.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        })
        
        setRestaurantMenu(restaurants)
    }
    return {restaurant, restaurantMenu};
}

export default useRestaurant;