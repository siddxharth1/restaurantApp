import { IMG_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const FoodCategory = ({category})=>{
    const dispatch = useDispatch()
    const handleAddItem =({card})=>{
        dispatch(addItem(card.info))
      }
    console.log(category)
    return (
        <div className="mb-10">
            <h1 className="text-3xl font-bold">{category.title}</h1>
            <div  className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {category.itemCards.map((item)=>{
                return(
                <div key={item.card.info.id} className=" shadow-2xl rounded-lg p-3 flex flex-col gap-2 justify-center">
                   <img src={IMG_URL + "/w_208/" + item.card.info.imageId} className="h-52"></img>
                   <h5> {item.card.info.name}</h5>
                   <h5> ₹{(item.card.info.defaultPrice/100) ?(item.card.info.defaultPrice/100) : (item.card.info.price/100)}</h5>
                   <button className="bg-green-700 p-2 rounded" onClick={()=>{handleAddItem(item)}}>Add to cart</button>
                 </div>)
            })}
            </div>
        </div>
    )
}

export default FoodCategory