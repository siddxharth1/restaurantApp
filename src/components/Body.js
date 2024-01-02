import { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import LoadingUI from './LoadingUI'
import {Link} from 'react-router-dom'
import useOnline from '../utils/useOnline'

function filterData(searchItem, restaurantList){
    const filterDta = restaurantList.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchItem.toLowerCase())
    )
    return filterDta;
}

const Body = () => {
    const [searchItem, setSearchItem] = useState('')
    const [restaurantList, setRestaurantList] = useState([])
    const [filterRestaurantList, setFilterRestaurantList] = useState([])

    useEffect(()=>{
        getRestaurantData();
    },[])

    async function getRestaurantData (){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1894506&lng=72.88587869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const online = useOnline();

    if(!online) return <h1>You are offline</h1>
    console.log("render");
    //when i dont have my resuarant list return this(not rendering component early)
    if(!restaurantList) return <div>No restaurant</div>;
    return (restaurantList.length === 0) ? <LoadingUI/> : (
        <>
            <div className='searchBar'>
                <input type="text" className='searchBarInput' placeholder='Search' value={searchItem} onChange={(e) => { setSearchItem(e.target.value)}} />
                <button onClick={()=>{let data = filterData(searchItem, restaurantList); setFilterRestaurantList(data)}}>Search</button>
            </div>
            <div className="restaurantLists">
                {(filterRestaurantList.length ===0) ? <h1>No reataurant match your filter</h1> : filterRestaurantList.map(restaurants => {
                    return( 
                    <Link to={"/restaurant/"+restaurants.info.id} key={restaurants.info.id}  >
                        <RestaurantCard {...restaurants.info} />
                    </Link> 
                    )
                })}

            </div>
        </>
    )
}

export default Body