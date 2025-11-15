import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {womens} from '../model/mens'

const WomenSquad = () => {
 return (
    <div>
    <Navbar/>
    <div className='sm:pt-30 pt-24  h-full sm:px-34 px-6 sm:mb-18 mb-10 '>
      <h1 className='text-center text-[#001746] font-semibold sm:text-4xl text-2xl'>Women's Squad</h1>
      <div className='sm:mt-10 mt-6 h-full w-full grid grid-cols-1 justify-items-center sm:grid-cols-4 md:grid-cols-4 gap-6' >
    {
      womens.map((data,i)=>(
      
        <div className='bg-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:bg-white transition-all px-6 py-4 '>
          <img className='w-70 border-b' key={i} src={data.url} alt={`Playe Img ${i}`} />
          <h1 className='text-center font-semibold pt-2 text-xl' >{data.name.toUpperCase()}</h1>
          <h2 className='text-center' >{data.role.toUpperCase()}</h2>
          
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

export default WomenSquad