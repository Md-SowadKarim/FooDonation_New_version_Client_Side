import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Count = () => {
    useEffect(()=>{
        Aos.init({
          duration:2000
        });
      })
  return (
    <div>
    <section className="dark:bg-[#24272b] bg-white body-font rounded-2xl">
  <div className="container px-5 py-24 mx-auto"> 
    <div className="flex flex-col text-center w-full mb-20 ">
      <h1 className="sm:text-3xl   title-font mb-4 dark:text-white text-3xl font-bold">Total Count</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Sharing food with another human being is an <br />intimate act that should not be indulged in lightly."</p>
      <hr data-aos="fade-up" className='bg-blue-500 h-1 w-[50%] mx-auto' />
      
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <h1 className='text-5xl my-2'>🍰🍕</h1>
          <h2 className="title-font font-medium text-3xl dark:text-white">77T</h2>
          <p className="leading-relaxed">Total Food</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <h1 className='text-5xl my-2'>🙍‍♂️🙎‍♀️</h1>
          <h2 className="title-font font-medium text-3xl dark:text-white">1.3K</h2>
          <p className="leading-relaxed">Total Users</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <h1 className='text-5xl my-2'>🤷‍♀️🤷‍♂️</h1>
          
          <h2 className="title-font font-medium text-3xl dark:text-white">7.2K</h2>
          <p className="leading-relaxed">Total Request</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
        <h1 className='text-5xl my-2'>🤝🤝</h1>
          <h2 className="title-font font-medium text-3xl dark:text-whitee">6.5K</h2>
          <p className="leading-relaxed">Total Delevered</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Count
