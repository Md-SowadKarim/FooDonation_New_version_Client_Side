import React from 'react'
import { FaCalendarDay,FaLocationArrow, FaPeopleArrows } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from './../../hooks/useAxios';


const RequestCard = ({info}) => {
    const axiosSecure=useAxios()
    const queryClient = useQueryClient();
    console.log(info)
//================================================================================= >>  Put Operation with tanstack query and auto reload with invalidateQueries
    const {mutateAsync:cancelRequestMutation}=useMutation({
        mutationFn: async (id)=>{
          console.log("id",  id)
          const a= axiosSecure.put(`/cancelrequest/${id}`,info)
          .then(res=> {
            toast.success("Request Canceled successfully")
          })
    
          return a
        },
        onSuccess: () => {
          queryClient.invalidateQueries(['myFoodRequest']) 
          },
      })


    const handleCancelClick=async()=>{
        try{
            await cancelRequestMutation(info._id)
            }catch(err){
                console.log(err.message)
            }
    }
  
   
  return (
    <div >
        
      <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      
      <h1 className='text-2xl font-poppins font-extrabold text-center my-3'>Doner Information </h1>
        
   
    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{info.name}</span>
            
           
           <div className="mt-4">
            <div className="flex items-center">
            <img className="object-cover h-10 rounded-full border-blue-500 border-2" src={info.doner.dImg} alt="Avatar"/>
                <div className="flex flex-col">
                    
                    <a href="#" className="mx-2 font-semibold text-black  dark:text-gray-200" tabindex="0" role="link">{info.doner.dName}</a>
                    <span className="mx-1 text-xs text-black  dark:text-gray-300">{info.doner.demail}</span>
                </div>
                
            </div>
            <div className='flex gap-2 ml-2 my-3 items-center'>
            <h1 className='text-black dark:text-white'><FaPeopleArrows></FaPeopleArrows></h1>
            <h1 className='text-black dark:text-white'> {info.quantit} No. of person to be served 😊</h1>
            </div>
        </div>
        <div className='flex ml-2 gap-3 my-3 items-center'>
        <h1 className='flex items-center gap-3 dark:text-gray-200 text-black '><FaCalendarDay/> Expire Date : </h1>
        <h1 className='text-black dark:text-gray-200'>{info.date}</h1>
        </div>
        <div className='flex ml-2 gap-3 my-3 items-center'>
        <h1 className='flex items-center gap-3 dark:text-gray-200 text-black '><FaCalendarDay/> Request Date : </h1>
        <h1 className='text-black dark:text-gray-200'>{info.request.rDate}</h1>
        </div>
        <div className='flex ml-2 gap-3 my-3 items-center'>
        <h1 className='text-black dark:text-gray-200'>✨ Status : {info.status}</h1>
        </div>
        <div className='flex h-11  ml-1 gap-3  items-center'>
        <h1 className=''><FaLocationArrow/></h1>
        <h1 className=' text-black dark:text-gray-200'> Pickup: </h1>
        <h1 className='flex-grow w-[60%] max-lg:w-[50%]} text-black  dark:text-gray-200'>{info.location}</h1>
        </div>
        
        
       
            <p className="mt-2 text-sm text-black  dark:text-gray-400">{info.note}</p>
        </div>
       {
        info.status == "delivered"? 
        <button onClick={()=>toast.error("The Food Has Been  Delivered Already")} className='btn btn-primar my-2 bg-green-500 text-white dark:border-white-2  container  mx-auto justify-center  py-2'> Delivered Successfully</button>
        :
        <button onClick={handleCancelClick} className='btn btn-primar my-2 text-white dark:border-white-2  container  mx-auto justify-center bg-blue-500 py-2'> Cancel Request</button>
        
        
       }
        
          

    </div>
   
</div>

    </div>
  )
}

export default RequestCard
