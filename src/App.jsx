import { toast } from "react-toastify"
import './App.css'
import { useEffect, useState } from "react"
import Home from "./pages/Home"
import { Routes,Route } from "react-router-dom"
import MenSquad from "./pages/MenSquad"
import WomenSquad from "./pages/WomenSquad"
import Stat from "./pages/Stat"
import Gallery from "./pages/Gallery"
import Product from "./pages/Product"
import ScrollToTop from "./pages/ScrollTop"

const App = () => {
const [loading, setLoading] = useState(true);
const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 2000; 
    const steps = 100;
    const intervalTime = totalDuration / steps; 

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        setLoading(false);
        return 100;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-row align-middle items-center justify-center h-svh bg-[#001746] text-white transition-all ease-in-out">
        <div className="flex items-baseline gap-2">
          <h2 className="mt-4 text-2xl tracking-wide">Loading...</h2>
        <h2 className="text-2xl">{progress}%</h2>
        </div>
      </div>
    );
  }

  return (
   <div className="bg-[#FFFFFF]">
        <ScrollToTop />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="men-squad" element={<MenSquad/>}/>
    <Route path="women-squad" element={<WomenSquad/>}/>
    <Route path="stat" element={<Stat/>}/>
    <Route path="gallery" element={<Gallery/>}/>
    <Route path="product" element={<Product/>}/>
     <Route path="*" element={<Home />} />
   </Routes>
   </div>
  )
}

export default App