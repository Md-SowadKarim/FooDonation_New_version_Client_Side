import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ek from "../../assets/image/1.png"
import dui from "../../assets/image/2.png"
import tin from "../../assets/image/3.png"
import char from "../../assets/image/4.png"
import pach from "../../assets/image/5.png"

const Gallary = () => {
    useEffect(()=>{
        Aos.init({
          duration:2000
        });
      })
  return (
    <div>
         <div className="flex flex-col text-center w-full mb-20 ">
      <h1 className="sm:text-3xl   title-font mb-4 dark:text-white text-3xl font-bold"><span className="relative text-yellow-300 ">The </span> Food Gallary</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Sharing food with another human being is an <br />intimate act that should not be indulged in lightly."</p>
      <hr data-aos="fade-up" className='bg-blue-500 h-1 w-[50%] mx-auto' />

      
    </div>

    
    <div className='p-3'>
        <div className="relative flex items-center justify-center w-full dark:text-gray-50">
	
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={ek} alt="Image 1" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={dui}  alt="Image 2" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={tin}  alt="Image 3" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={char}  alt="Image 4" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={pach}  alt="Image 5" />
		</div>
	</div>
	
</div>
    </div>
    </div>
   
  )
}

export default Gallary
