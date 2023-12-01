import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useFetchSignleFood from './../../hooks/useFetchSignleFood';
import Spinner from '../../components/Spinner/Spinner';
import useFetchSingleRequest from '../../hooks/useFetchSingleRequest';
import { FaCalendarDay, FaLocationArrow, FaPeopleArrows } from 'react-icons/fa';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from './../../hooks/useAxios';
import { toast } from 'react-hot-toast';

const ManageSingleFood = () => {
  const queryClient=useQueryClient()
const  navigate=useNavigate()
  const axiosSecure=useAxios()
    const {foodId}=useParams()
   const {data,isLoading}=useFetchSingleRequest(foodId)
    console.log(data)

    const {mutateAsync:deliverFoodrMutation}=useMutation({
      mutationFn: async (d)=>{
        const a=axiosSecure.put(`/deliverfood/${data._id}`,d)
        .then(res=>{
      //    console.log(res.data)
          toast.success("Food delivered successfully")
        })
      // return await axios.post("https://foodonation.vercel.app/addfood",newFood,{withCredentials:true})
      // .then(res=> console.log(res.data))

        return a
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['manageMyFood']) 
        },
    })

const handleDeliverClick=async()=>{ 
  console.log("clicke")
try{deliverFoodrMutation(data)}catch(err){
    console.log(err.message)
}
navigate(-1)
}







    if(isLoading){
        return <Spinner/>
    }
  return (
    <div className='container mx-auto'>
<h1 className='text-2xl font-poppins font-extrabold my-3 text-center'> The Food Is Requested By This User</h1>
<hr className='h-1 bg-blue-400 w-[50%] mx-auto my-3'/>
<div className='bg-white container mx-auto m-2 rounded-xl p-3 dark:bg-gray-900' >
  
      
      <div className="max-w-lg p-3   mx-auto  bg-white border border-gray-400 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <h1 className='text-2xl font-poppins font-extrabold text-center my-3'>Requester Information </h1>
          <div>
          <div className="flex gap-4 items-center p-4">
                  <img className="object-cover sm:h-40 rounded-full border-blue-500 border-2" src={data.request.rImg} alt="Avatar"/>
                      <div className="flex flex-col">
                          <a href="#" className="mx-1 font-semibold max:text-2xl text-black  dark:text-gray-200" tabindex="0" role="link">{data.doner.dName}</a>
                         <span className="mx-1 text-xs text-black  dark:text-gray-300">{data.doner.demail}</span>
                       <div className='flex h-11  ml-1 gap-3  items-center'>
                          <p className=''><FaLocationArrow/></p>
                          
                          <p className='flex-grow text-xs w-[60%] max-lg:w-[50%]} text-black  dark:text-gray-200'>{data.location}</p>
                      </div>
                      </div>
      
                  </div>
          </div>
          <a href="#">
              <img className="rounded-t-lg" src={data.imgUrl} alt="" />
          </a>
          <div className="p-5">
          
              <a href="#">
                  <h5 className="mb-2 ml-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
              </a>
              <h1 className=' my-2 text-black dark:text-white'>✨ Status : {data.status}</h1>
              <div className='flex gap-2 ml-1 items-center'>
                  <h1 className='text-black dark:text-white'><FaPeopleArrows></FaPeopleArrows
                  ></h1>
                  <h1 className='text-black dark:text-white'> {data.quantit} No. of person to be served 😊</h1>
                  </div>
              <div className='flex ml-1  gap-3 my-3 items-center'>
              <h1 className='flex items-center gap-2 dark:text-gray-200 text-black '><FaCalendarDay/> Expire Date : </h1>
              <h1 className='text-black dark:text-gray-200'>{data.date}</h1>
              </div>
              <div className='flex ml-1  gap-3 my-3 items-center'>
              <h1 className='flex items-center gap-2 dark:text-gray-200 text-black '><FaCalendarDay/> Requested Date :  </h1>
              <h1 className='text-black dark:text-gray-200'>{data.request.rDate} | {data.request.rTime}</h1>
              </div>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleDeliverClick}>
           Deliver Now 
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
          </button>
          </div>
          </div>
          </div>


    </div>
  )
}

export default ManageSingleFood
