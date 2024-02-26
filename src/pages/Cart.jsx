import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state)=>state);

  console.log(cart)
  const [totalAmount,setTotalAmount] = useState(0);


  // reduce function is used to adding data ofa na array 
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart])


  return(
    <div>
      {
        cart.length > 0 ?
        (
          <div className="flex max-w-[1152px] h-full mx-auto">
            <div className="max-w-[702px] h-full ">
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>


            <div className="max-w-[450px]  flex flex-col justify-between mt-10">
              <div className="ml-2">
                <p className="text-green-800 text-lg font-bold capitalize"> Your Cart </p>
                <div className="capitalize font-bold text-6xl text-green-800 ">summary</div>
                <p className="mt-2">
                <span className="font-semibold "> Total Item : {cart.length}</span>
                </p>
                
              </div>

              <div className="-mt-4 ml-10 mb-10">
                <p className="font-semibold">
                 Total Ammount:<span className="font-extrabold">  ${totalAmount} </span>
                </p>
                <button className="w-full rounded-md p-2 border bg-green-800 text-white"> 
                 CheckOut Now
                 </button>
              </div>
            </div>
          </div>

        ):
        (
          <div className=" h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="font-semibold text-3xl p-4"> Cart is empty </h1>
            <NavLink to="/">
              <button className="border p-3 rounded-md hover:bg-green-400"> 
               Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
