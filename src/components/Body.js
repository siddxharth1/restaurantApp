import { useState, useEffect, useContext } from 'react'
import RestaurantCard from './RestaurantCard'
import LoadingUI from './LoadingUI'
import {Link} from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'

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
    const{user} = useContext(UserContext);

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
    
    //when i dont have my resuarant list return this(not rendering component early)
    if(!restaurantList) return <div>No restaurant</div>;
    return (restaurantList.length === 0) ? <LoadingUI/> : (
        <>
        <input type="text" className='border border-black' value={user.name}/>

            <div className='float-right m-5 p-3 border-solid border-2 border-sky-500 rounded-2xl'>
                <input type="text" className='p-2 border-b-2 border-indigo-200 outline-none focus:border-indigo-400' placeholder='Search' value={searchItem} onChange={(e) => { setSearchItem(e.target.value)}} />
                <button className='bg-blue-200 p-2 rounded-xl ml-5' onClick={()=>{let data = filterData(searchItem, restaurantList); setFilterRestaurantList(data)}}>Search</button>
            </div>
            <h1 className='clear-both font-bold text-3xl ml-[5vw] mb-4'>Restaurant Near You, {user.name}</h1>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 w-11/12 gap-7 mx-auto  justify-between">
                
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