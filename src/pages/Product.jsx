import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {womens} from '../model/mens'
import { product } from '../model/product'

const Product = () => {
   return (
    <div>
    <Navbar/>
    <div className='sm:pt-30 pt-24  h-full sm:px-34 px-6 sm:mb-18 mb-10 '>
      <h1 className='text-center text-[#001746] font-semibold sm:text-4xl text-2xl'>MI Products</h1>
      <div className='sm:mt-10 mt-6 h-full w-full grid grid-cols-1 justify-items-center sm:grid-cols-4 md:grid-cols-4 gap-6' >
    {
      product.map((data,i)=>(
      
        <div className='bg-gray-200 hover:bg-white hover:shadow-lg hover:shadow-gray-500 transition-all px-6 py-4 '>
          <img className='w-70 border-b mx-auto' key={i} src={data.url} alt={`Product Img ${i}`} />
          <p className=' text-gray-500 text-sm pt-2'>{data.gen}</p>
          <h1 className=' text-lg ' >{data.name.toUpperCase()}</h1>
          <h2 className='text-green-700'>{data.price.toUpperCase()}</h2>
          
        </div>
         
      )
      )

    }
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Product