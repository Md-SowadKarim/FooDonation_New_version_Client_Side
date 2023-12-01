import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import useFeatureData from '../../hooks/useFeatureData'
import Spinner from '../../components/Spinner/Spinner';
import FeatureCards from '../../components/cards/FeatureCards';
import Slider from '../../components/slider/Slider';
import Count from '../count/Count';
import Review from './../review/Review';
import Gallary from '../gallary/Gallary';

const Home = () => {
  const {data,isLoading}=useFeatureData()
  console.log(data)
  console.log(isLoading)
  if(isLoading){
    return <Spinner/>
  }
  return (
   < div className='bg-gray-200 dark:bg-gray-950 container mx-auto flex flex-col '>
    <Slider/>
    <div className="flex flex-col text-center w-full my-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-poppins Dark:text-white">Feature Foods</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-poppins">No one has ever become poor by giving.</p>
      <hr data-aos="fade-up" className='bg-blue-500 h-1 w-[40%] mx-auto' />
      
    </div>
    <FeatureCards datas={data}/>
    {
      data.length == 6 && 
      <Link className='flex' to="/availablefood">
    <button className='btn btn-primar my-4 text-white dark:border-white dark:text-white w-1/2  mx-auto  bg-blue-500 py-2'> Show All</button>
    </Link>
    }
    {
      data.length === 0 && 
      <div>
        <h1 className='text-black dark:text-gray-200 text-2xl font-poppins font-extrabold text-center my-3'>there is no data to show, add some first </h1>
        <Link className='flex' to="/addfood">
      <button className='btn btn-primar my-4 text-white dark:border-white dark:text-white w-1/2  mx-auto  bg-blue-500 py-2'> Add first</button>
      </Link>
      </div>
    }
    
  <Count/>
  <Gallary/>
  <Review/>



    
   </div>
  )
}

export default Home
