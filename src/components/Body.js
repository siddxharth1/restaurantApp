import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import LoadingUI from "./LoadingUI";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useFindRestaurant from "../utils/useFindRestaurant";

function filterData(searchItem, resDataa) {
  console.log(resDataa);
  if (searchItem === "defaultFilterOption") {
    return resDataa;
  } else if (searchItem === "lowtohigh") {
    let lowToHighData = resDataa.sort((a, b) => {
      return (
        Number(a.info.costForTwo.substring(1, 3)) -
        Number(b.info.costForTwo.substring(1, 3))
      );
    });
    return lowToHighData;
  } else if (searchItem === "highToLow") {
    let highToLowData = resDataa.sort((a, b) => {
      return (
        Number(b.info.costForTwo.substring(1, 3)) -
        Number(a.info.costForTwo.substring(1, 3))
      );
    });
    return highToLowData;
  } else if (searchItem === "rating") {
    return resDataa.sort((a, b) => {
      return b.info.avgRating - a.info.avgRating;
    });
  } else if (searchItem === "deliveryTime") {
    return resDataa.sort((a, b) => {
      return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
    });
  }

  const filterDta = resDataa.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchItem.toLowerCase())
  );
  return filterDta;
}

const Body = () => {
  const [searchItem, setSearchItem] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterBtnStatus, setFilterBtnStatus] = useState("dafaultFilterOption");
  //   const [restaurantList, setRestaurantList] = useState([])
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const resDataa = useFindRestaurant();
  const online = useOnline();
  console.log(resDataa);

  useEffect(() => {
    if (resDataa) {
      setFilterRestaurantList(resDataa);
    }
  }, [resDataa]);

  const handleFitersButton = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterButtons = (e) => {
    handleFitersButton();
    setFilterBtnStatus(e.target.value);
    let filterBtnData = filterData(e.target.value, resDataa);
    setFilterRestaurantList(filterBtnData);
  };

  if (!online) return <h1>You are offline</h1>;

  //when i dont have my resuarant list return this(not rendering component early)
  if (!resDataa) return <LoadingUI />;
  return (
    <>
      <div className="flex m-7 mx-20 justify-between">
        <div className="relative">
          <button
            className="p-6 px-11 bg-blue-300 rounded-lg"
            onClick={handleFitersButton}
          >
            Filter
          </button>
          {showFilter && (
            <div className="absolute w-72 top-0 left-32 p-2 z-50 rounded-lg bg-white border border-black ">
              <h1 className="font-bold text-xl">Filter</h1>
              <div className="flex flex-col">
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="default"
                    value="defaultFilterOption"
                    onChange={handleFilterButtons}
                    checked={filterBtnStatus === "defaultFilterOption"}
                  />
                  <label htmlFor="lowToHigh"> Default</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="lowToHigh"
                    value="lowtohigh"
                    onChange={handleFilterButtons}
                    checked={filterBtnStatus === "lowtohigh"}
                  />
                  <label htmlFor="lowToHigh"> Cost: Low to high</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="highToLow"
                    value="highToLow"
                    onChange={handleFilterButtons}
                    checked={filterBtnStatus === "highToLow"}
                  />
                  <label htmlFor="highToLow"> Cost: High to low</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="rating"
                    value="rating"
                    onChange={handleFilterButtons}
                    checked={filterBtnStatus === "rating"}
                  />
                  <label htmlFor="rating"> Ratings</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="deliveryTime"
                    value="deliveryTime"
                    onChange={handleFilterButtons}
                    checked={filterBtnStatus === "deliveryTime"}
                  />
                  <label htmlFor="deliveryTime"> Delivery time</label>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" p-3 w-96 border-solid border-2 border-sky-500 rounded-2xl">
          <input
            type="text"
            className="p-2 w-64 border-b-2 border-indigo-200 outline-none focus:border-indigo-400"
            placeholder="Search"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            className="bg-blue-200 p-2 rounded-xl ml-5"
            onClick={() => {
              let data = filterData(searchItem, resDataa);
              setFilterRestaurantList(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <h1 className=" font-bold text-3xl ml-[5vw] mb-4">Restaurant Near You</h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 w-11/12 gap-7 mx-auto  justify-between">
        {filterRestaurantList.length === 0 ? (
          <h1>No reataurant match your filter</h1>
        ) : (
          filterRestaurantList.map((restaurants) => {
            return (
              <Link
                to={"/restaurant/" + restaurants.info.id}
                key={restaurants.info.id}
              >
                <RestaurantCard {...restaurants.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
