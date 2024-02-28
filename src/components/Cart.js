import { useDispatch, useSelector } from "react-redux";
import CartItemUI from "./CartItemUI";
import { useEffect, useRef, useState } from "react";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);
  const [itemTotal, setItemTotal] = useState(0);
  const deliveryFee = itemTotal > 0 && itemTotal < 400 ? 40 : 0;
  const couponCode = useRef()
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    let sum = 0;
    cartData.forEach((item) => {
      sum += item.price ? item.price / 100 : item.defaultPrice / 100;
    });
    setItemTotal(sum);
  }, [cartData]);

  const clearCartHandler = ()=>{
    dispatch(clearCart())
    setDiscountedAmount(0)
    couponCode.current.value = ""
  }

  const discounts = {
    FREE: 1,
    FLAT50 : 0.5,
    FLAT30 : 0.3
  }
  const getDiscount =(code)=>{
    setDiscountedAmount(discounts[code] ? itemTotal * discounts[code] : 0)
  }

  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold mb-3">Cart</h1>
      <div className="flex">
        <div className="border border-black p-5 flex flex-col gap-5 w-1/2">
        { (cartData.length !== 0) ?  <button className="bg-red-400 w-32 p-2 rounded-md" onClick={clearCartHandler}>Clear Cart</button> : <></>}
          { (cartData.length > 0 ) ? cartData.map((item) => {
            return <CartItemUI key={item.id} {...item} />
           ;
          }) : <p className="font-semibold text-xl">Cart is empty add something delicious</p>}
        </div>
        <div className="w-1/2 ">
          <div className="w-[400] p-3 px-6 rounded border border-black m-auto">
            <h1 className="font-semibold text-2xl mb-2">Bill Details</h1>
            <div className="mb-2">
              <label htmlFor="">Coupon code: </label>
              <input
                ref={couponCode}
                type="text"
                className="outline-none border-b-2 border-blue-300 w-72" 
              />
              <button className="bg-sky-300 px-2 rounded" onClick={()=>getDiscount(couponCode.current.value)}>Apply</button>
              <ul className="flex gap-2 my-2"> 
                <li className="border-2 border-black rounded px-2 bg-zinc-300">FREE</li>
                <li className="border-2 border-black rounded px-2 bg-zinc-300">FLAT50</li>
                <li className="border-2 border-black rounded px-2 bg-zinc-300">FLAT30</li>
              </ul>
            </div>
            <div className="flex justify-between">
              <p>Item Total:</p>
              <span>{itemTotal}</span>
            </div>

            <div className="flex justify-between">
              <p>Delivery fee:</p>
              <span>{deliveryFee}</span>
            </div>
            {(discountedAmount > 0) &&
              <div className="flex justify-between">
              <p>Discount:</p>
              <span>{discountedAmount}</span>
            </div>
            }
            
            <hr className="my-2" />
            <div className="flex justify-between">
              <p>To pay:</p>
              <span>{(itemTotal + deliveryFee).toFixed(2) - discountedAmount}</span>
            </div>
            <button className="bg-sky-500  mt-3 p-2 w-32 rounded">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
