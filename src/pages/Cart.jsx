import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  console.log("printing cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex justify-between p-1">
          <div className="flex flex-col p-2 w-[60%]">
            {cart.map((item, index) => (
              <div>
                <CartItem key={item.id} item={item} itemIndex={index} />
                {item.id !== cart[cart.length-1].id && (
                  <div className="border-t-2 border-slate-500"></div>
                )}
              </div>
            ))}
          </div>
          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800 uppercase">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700 uppercase -mt-5">
                  Summary
                </div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between mb-12 w-[100%] p-5">
              <p className="text-gray-700 text-xl font-semibold">
                Total Amount :{" "}
                <span className="text-xl font-bold">${totalAmount}</span>
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full min-h-[80vh]">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider uppercase">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
