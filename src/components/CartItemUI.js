import { useDispatch } from "react-redux";
import { IMG_URL } from "../constants";
import { removeItem } from "../utils/cartSlice";
import { useState } from "react";

const CartItemUI = ({ name, price, imageId, defaultPrice, id }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="flex bg-slate-200 rounded-md p-3">
      <img className="w-[150px] rounded-lg" src={IMG_URL + imageId} />
      <div className="p-4 flex justify-between items-center">
        <div>
          <p className="text-lg">{name}</p>
          <div className="text-green-700">
            ₹ {price ? price / 100 : defaultPrice / 100}
          </div>
        </div>
        <div className=" border border-black ">
          <button className="bg-sky-200 px-2">-</button>
          <span className="mx-2">{itemCount}</span>
          <button className="bg-sky-200 px-2">+</button>
        </div>
        <button
          className="bg-red-400 p-1 rounded-sm ml-20 deleteCartProductBtn"
          onClick={() => {
            removeItemFromCart(id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default CartItemUI;
