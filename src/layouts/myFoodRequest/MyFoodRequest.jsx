import React from 'react'
import useFetchMyFoodRequest from '../../hooks/useFetchMyFoodRequest'
import RequestCards from '../../components/cards/RequestCards'
import Spinner from '../../components/Spinner/Spinner'


const MyFoodRequest = () => {
    const {data,isLoading}=useFetchMyFoodRequest()
    console.log(data)
    if(isLoading){
        return<Spinner/>
    }
  return (
    <div className='container mx-auto'>
         <h1 className='text-2xl font-poppins font-extrabold text-center my-3'>This Is Your Food Requests </h1>
         <hr className='h-1 bg-blue-400 w-[50%] mx-auto my-4 '/>
    
      <RequestCards datas={data}/>
      
    </div>
  )
}

export default MyFoodRequest
