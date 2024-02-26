import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch(); 
  
  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed ")
  }
  return(
   
    <div className=" mt-5 p-5 "> 

      <div className="flex space-x-5 ml-8">
      
        {/*first div of img   */}
        <div className="h-[180px] w-full">
        <img src={item.image}
          className="h-full w-full bg-contain"
        />
      </div>

      {/* second div all description */}
        <div className=" w-full  space-y-3 flex flex-col justify-around">
          <h1 className="font-bold"> 
           {item.title} 
          </h1>

          <h1 className="text-xs"> 
           {item.description}
          </h1>
          <div className="flex justify-around">
            <p className="text-green-500 font-bold">
              ${item.price}
            </p>
            <div onClick={removeFromCart}
            className="relative cursor-pointer">
             <MdDeleteForever />
             <div className="h-7 w-7 rounded-full bg-red-400 absolute -mt-5 -ml-1.5 opacity-60"></div>
            </div>
          </div>

  

        </div>

      </div>
              {/* last line  */}
              <div className="w-full h-0.5 bg-black mx-5 my-5"></div>

    </div>

    
  ); 
};

export default CartItem;
