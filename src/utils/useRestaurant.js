import {useEffect, useState} from 'react'
const useRestaurant=(id)=>{
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        fetchRestaurant();
    }, [])

    async function fetchRestaurant() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=21.1894506&lng=72.88587869999999&restaurantId='+id)
        const resp = await data.json();
        setRestaurant(resp)
        console.log(resp)
    }
    return restaurant;
}

export default useRestaurant;