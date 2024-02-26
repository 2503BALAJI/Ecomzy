import {toast} from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart } = useSelector ((state)=>state);
  const dispatch = useDispatch();

  const addTocart = ()=>{
    dispatch(add(post));
    toast.success("Item Added To Cart ")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed From Cart ")
  }

  return(
    <div className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in
      hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] gap-3 p-4 mt-10 ml-5 rounded-lg  ">
      <div>
        <p className="font-semibold text-lg text-left truncate w-40 mt-1 text-gray-700"> 
         {post.title}
       </p>
      </div>
      <div>
      {/* description lahan karnyasathi split and slice method use kelli ahe  */}
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left "> 
         {post.description.split(" ").slice(0,10).join(" ") +    "..." }
        </p>

      </div>
      <div className="h-[180px]">
        {/* <img src={`${post.image}`}/> */}
        
        <img src={post.image}
          className="h-full w-full"
        />
      </div>

      <div className="flex justify-between gap-12">
          <div>
            <p className="text-green-600 font-semibold items-center w-full mt-5">
             ${post.price}
            </p>
          </div>

          {/* button of remove or add to cart  */}
            <div>
              {
                cart.some((p)=>p.id===post.id) ? 
                (
                  <button onClick={removeFromCart}
                  className="text-gray-700 border border-gray-700 mt-5 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                  hover:bg-gray-700 hover:text-white  transition duration-300 ease-in "
                  >
                  remove item
                </button>
                ):
                (
                  <button onClick={addTocart}
                  className="text-gray-700 border border-gray-700 mt-5 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                  hover:bg-gray-700 hover:text-white  transition duration-300 ease-in"
                  >

                    add to cart
                  </button>
                )
              }
            </div>
      </div>

     

    </div>
  );
};

export default Product;
