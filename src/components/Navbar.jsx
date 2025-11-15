import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    
    const [bar, setBar] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const BarClick = ()=> {
        setBar((prev)=> !prev);
    }


    if(bar) {
      return (
        <div className="w-screen h-screen z-50 top-0 sticky text-white bg-[#001746]">
          <div className="pt-6 px-4 w-full flex justify-end">    
            <GiCancel onClick={BarClick} className="text-3xl" />
            </div>
           <div className="flex flex-col pt-24 items-center gap-8 text-2xl">
            {location.pathname !== "/" && (
                      <h1 className=" z-10" onClick={()=>navigate('/')} >Home</h1>
            )}
             {location.pathname !== "/men-squad" && (
                      <h1 className=" z-10" onClick={()=>navigate('/men-squad')} >Men's Squad</h1>
            )}
             {location.pathname !== "/women-squad" && (
             <h1 className=" z-10" onClick={()=>navigate('/women-squad')} >Women's Squad</h1>
                     
            )}
             {location.pathname !== "/stat" && (
             <h1 className=" z-10" onClick={()=>navigate('/stat')} >Stats</h1>
                      
            )}
             {location.pathname !== "/gallery" && (
             <h1 className=" z-10" onClick={()=>navigate('/gallery')} >Gallery</h1>
                      
            )}
             {location.pathname !== "/product" && (
             <button onClick={()=>navigate('/product')}  className="text-white text-[1em] z-10 cursor-pointer rounded-lg px-6 bg-[#dd2121] py-1.5">Products</button>
                      
            )}
             
           </div>
        </div>
      )
    }

  return (
    <div className="bg-[#001746] h-20 flex fixed w-full justify-between items-center sm:px-10 px-4 z-20">
      <img onClick={()=> navigate("/")}
        className="h-14 cursor-pointer sm:w-40 w-30"
        src="https://res.cloudinary.com/dp8umj9cw/image/upload/logo_ilsde8.png"
        alt="Logo img"
      />
      <div className=" hidden sm:flex gap-6 items-center">
        <h1 onClick={()=> navigate("/men-squad")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">Men's Squad</h1>
        <h1 onClick={()=> navigate("/women-squad")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">
          Woman's Squad
        </h1>
        <h1 onClick={()=> navigate("/stat")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">
          Stats
        </h1>
        <h1 onClick={()=> navigate("/gallery")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">Gallery</h1>
        <button onClick={()=> navigate("/product")} className="text-white text-[1.2em] cursor-pointer rounded-lg px-4 bg-[#dd2121] py-1.5 hover:bg-red-700 transition-all duration-200 ease-in-out">
          Products
        </button>
      </div>

      <span onClick={BarClick}  className="text-white sm:hidden text-3xl ">
        <FaBars />
      </span>
    </div>
  );
};

export default Navbar;
