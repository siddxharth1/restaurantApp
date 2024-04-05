import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../constants";
import { addItem, removeItem, decreaseItem } from "../utils/cartSlice";
import { useState } from "react";

const CartItemUI = ({ name, price, imageId, defaultPrice, id }) => {
  // const [itemCount, setItemCount] = useState(1);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const increaseItemInCart = (id) => {
    dispatch(addItem(id));
  };

  const decreaseItemInCart = (id) => {
    dispatch(decreaseItem(id));
  };

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const cartItem = cartItems.find((cartItm) => cartItm.id == id);

  return (
    <div className="flex bg-slate-200 rounded-md p-3 items-center">
      <img className="w-[150px] h-24 rounded-lg" src={IMG_URL + imageId} />
      <div className="p-4 flex justify-between items-center flex-grow">
        <div>
          <p className="text-lg">{name}</p>
          <div className="text-green-700">
            ₹ {price ? price / 100 : defaultPrice / 100}
          </div>
        </div>
        <div className="flex justify-between w-max">
          <div className="flex w-full rounded-lg ">
            <button
              className="w-7 bg-sky-300 hover:bg-sky-400 rounded-l cursor-pointer disabled:bg-sky-200"
              onClick={() => {
                decreaseItemInCart(id);
              }}
              disabled={cartItem.quantity === 1}
            >
              -
            </button>
            <span className="px-3 pt-1 bg-sky-300 text-center">
              {cartItem.quantity}
            </span>
            <button
              className="w-7 bg-sky-300 hover:bg-sky-400 rounded-r cursor-pointer"
              onClick={() => {
                increaseItemInCart(id);
              }}
            >
              +
            </button>
          </div>
          <button
            className="bg-red-400 p-1 rounded-sm ml-10"
            onClick={() => {
              removeItemFromCart(id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemUI;
