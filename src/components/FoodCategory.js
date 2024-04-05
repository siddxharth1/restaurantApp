import { IMG_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseItem } from "../utils/cartSlice";
import imag from "../assets/download.png";

const FoodCategory = ({ category }) => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleAddItem = ({ card }) => {
    dispatch(addItem(card.info));
  };
  console.log(category);

  const increaseItemInCart = (id) => {
    dispatch(addItem(id));
  };

  const decreaseItemInCart = (id) => {
    dispatch(decreaseItem(id));
  };

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold">{category.title}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {category.itemCards.map((item) => {
          const cartItem = cartItems.find(
            (cartItm) => cartItm.id == item.card.info.id
          );
          return (
            <div
              key={item.card.info.id}
              className=" shadow-2xl rounded-lg p-3 flex flex-col gap-2 justify-center"
            >
              <img
                src={IMG_URL + item.card.info.imageId}
                className="h-52"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = imag;
                }}
              ></img>
              <div>
                <h5> {item.card.info.name}</h5>
                <h5>
                  ₹
                  {item.card.info.defaultPrice / 100
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.price / 100}
                </h5>
              </div>
              {cartItem ? (
                <div className="flex w-full rounded-lg ">
                  <button
                    className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 rounded-l cursor-pointer disabled:bg-orange-300"
                    onClick={() => {
                      decreaseItemInCart(item.card.info.id);
                    }}
                    disabled={cartItem.quantity === 1}
                  >
                    -
                  </button>
                  <span className="flex-1 px-3 py-2 bg-orange-500 text-center">
                    {cartItem.quantity}
                  </span>
                  <button
                    className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 rounded-r cursor-pointer"
                    onClick={() => {
                      increaseItemInCart(item.card.info.id);
                    }}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="bg-orange-500 p-2 rounded  hover:bg-orange-600 text-white active:transform active:scale-95 transition duration-150 ease-in-out"
                  onClick={() => {
                    handleAddItem(item);
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCategory;
