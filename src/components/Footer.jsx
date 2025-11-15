import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {

        const navigate = useNavigate();
    const location = useLocation();

  return (
 <div>
   <div className='w-screen h-full  bottom-0 bg-[#001746] py-10 sm:px-34 px-10 '>

         <div className="sm:flex sm:flex-row sm:justify-between flex flex-col"> 
            <img onClick={()=> navigate("/")}
                 className="h-40 cursor-pointer bg-[#093F88]"
                 src="https://res.cloudinary.com/dp8umj9cw/image/upload/pngegg_tkrz1f.png"
                 alt="Logo img"
               />
              
                <div className="flex items-center flex-col sm:gap-6 gap-6 sm:pt-0 pt-8">
                     <h1 onClick={()=> navigate("/men-squad")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">Men's Squad</h1>
                 <h1 onClick={()=> navigate("/women-squad")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">
                   Woman's Squad
                 </h1>
                 <h1 onClick={()=> navigate("/stat")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">
                   Stats
                 </h1>
                </div>
                 <div className="flex items-center flex-col sm:gap-6 gap-6 sm:pt-0 pt-4">
                    <h1 onClick={()=> navigate("/gallery")} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">Gallery</h1>
                 <h1 onClick={()=>(toast.info("Available soon !"))} className="text-white text-[1.2em] cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">Latest Update</h1>
                 <button onClick={()=> navigate("/product")} className="text-white text-[1.2em] cursor-pointer rounded-lg px-4 bg-[#dd2121] py-1.5 hover:bg-red-700 transition-all duration-200 ease-in-out ">
                   Products
                 </button>
                 </div>
                 </div>
         
    </div>


    <div className="w-full flex h-full py-4 sm:px-14 gap-6 bg-[#093F88] text-white">
    <p className="text-center">© Copyright 2025</p>
    <p className="text-center">All Rights Reserved</p>
    <a className="underline underline-offset-1 text-center" href="https://www.mumbaiindians.com/">Mumbai Indians</a>
    </div>


 </div>
  )
}

export default Footer