import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem(props) {
  const item = props.item;
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className="">
      <div className="flex justify-between gap-5 p-12">
        <div className="w-[30%]">
          <img src={item.image} alt="" className="object-cover" />
        </div>

        <div className="md:ml-10  space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between pt-1">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
