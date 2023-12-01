import React from 'react'
import { FaCalendarDay,FaLocationArrow, FaPeopleArrows } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeatureCard = ({info}) => {
    console.log(info)
   // const {_id,name,imgUrl,quantit,location,status,doner,note,date}=info
   // console.log(Object.keys(info).join(","))
  // console.log(info)
   
  return (
    <div >
      <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <h1 className='text-black dark:text-white'> {info.status} </h1>
    <img className="object-cover w-full h-64 " src={info.imgUrl} alt="Article"/>
    
    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{info.name}</span>
            <div className='flex gap-2 ml-1 items-center'>
            <h1 className='text-black dark:text-white'><FaPeopleArrows></FaPeopleArrows></h1>
            <h1 className='text-black dark:text-white'> {info.quantit} No. of person to be served 😊</h1>
            
            
            </div>
           
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">A Single Bite Can Save Someones Life</a>
            <div className="mt-4">
            <div className="flex items-center">
            <img className="object-cover h-10 rounded-full border-blue-500 border-2" src={info.doner.dImg} alt="Avatar"/>
                <div className="flex flex-col">
                    
                    <a href="#" className="mx-2 font-semibold text-black  dark:text-gray-200" tabindex="0" role="link">{info.doner.dName}</a>
                    <span className="mx-1 text-xs text-black  dark:text-gray-300">{info.doner.demail}</span>
                </div>
                
            </div>
        </div>
        <div className='flex ml-2 gap-3 my-3 items-center'>
        <h1 className='flex items-center gap-3 dark:text-gray-200 text-black '><FaCalendarDay/> Expire Date : </h1>
        <h1 className='text-black dark:text-gray-200'>{info.date}</h1>
        </div>
        <div className='flex h-11  ml-1 gap-3  items-center'>
        <h1 className=''><FaLocationArrow/></h1>
        <h1 className=' text-black dark:text-gray-200'> Pickup: </h1>
        <h1 className='flex-grow w-[60%] max-lg:w-[50%]} text-black  dark:text-gray-200'>{info.location}</h1>
        </div>
        
        
       
            <p className="mt-2 text-sm text-black  dark:text-gray-400">{info.note}</p>
        </div>
        <Link to={`/foodetails/${info._id}`}>
        <button className='btn btn-primar my-2 text-white dark:border-white-2  container  mx-auto justify-center bg-blue-500 py-2'> View Details</button>
        </Link>
          

    </div>
   
</div>

    </div>
  )
}

export default FeatureCard
