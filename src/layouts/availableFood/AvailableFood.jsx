import React, { useState } from 'react'
import useFetchSortExpire from '../../hooks/useFetchSortExpire'
import Spinner from './../../components/Spinner/Spinner';
import FeatureCards from '../../components/cards/FeatureCards';
import useFetchAll from './../../hooks/useFetchAll';
import { toast } from 'react-hot-toast';
import useFetchSearch from '../../hooks/useFetchSignleFood';
import empty from "../../assets/empty-box.gif"
import axios from 'axios';
import { Link } from 'react-router-dom';


const AvailableFood = () => {
  const [srt,setSrt]=useState(false)
  const [src,setSrc]=useState(false)
  const [all,setAll]=useState(true)
  const [srcData,setSrcData]=useState()
  const [srcLoading,setSrcLoading]=useState(false)
 
 // const {data:srcData,isLoading:srcLoading}=useFetchSearch(fName)
  const {data:sortData,isLoading:sortLoading}=useFetchSortExpire()
   const {data:allData,isLoading:allLoading}=useFetchAll()
  
  // console.log(allData)
  
  //  console.log(sortData)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const name2=name.toLowerCase()
      console.log("name", name2)
       if(name2){
        setSrc(true)
        setSrt(false)
        setAll(false)
        setSrcLoading(true)
          
      const a=await axios.get(`https://foodonation.vercel.app/searchfood?name=${name2}`,{withCredentials:true})
      .then(res=>{
        setSrcData(res.data)
        setSrcLoading(false)
      })
      
    }  

       }
    
    const handleSortClick=()=>{
      setSrt(true)
      setSrc(false)
      setAll(false)
      toast.success("data Sorted Successfully")
    }
    if(sortLoading){
      return <Spinner/>
    }
    if(allLoading){
      return <Spinner/>
    }
    if(srcLoading){
      return <Spinner/>
    }
    if(allData.length==0){
      return <div className='mx-auto  my-3'>
        <img className='rounded-2xl mx-auto' src={empty} alt="" />
        
      
      <div>
        <h1 className='text-black dark:text-gray-200 text-2xl font-poppins font-extrabold text-center my-3'>there is no data to show, add some first </h1>
        <Link className='flex' to="/addfood">
      <button className='btn btn-primar my-4 text-white dark:border-white dark:text-white w-1/2  mx-auto  bg-blue-500 py-2'> Add first</button>
      </Link>
      </div>
    
      </div>
    }
   
  return (
    <div className='bg-gray-200 dark:bg-gray-950 container mx-auto'>
        <div className='my-3 max-md:flex-col flex justify-around  '>
        
          <form className='flex max-md:w-full items-center justify-center gap-3 my-5' onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
            <button className='btn btn-primary bg-blue-400' type='submit'>Search</button>
            </form>
         
           
            <button onClick={handleSortClick} className='btn btn-primary my-5 bg-blue-400'>Sort By Expire Date</button>
        </div>
        <div className='text-center text-xl text-black dark:text-gray-300 font-bold font-poppins'>
        {
          srt? <h1 className='uppercase'>this is your sorted result 🍔</h1> : src? <h1 className='uppercase'> this is your searching result 🍕</h1> : <h1 className='uppercase'>this is your all product 🍰</h1>
        }
        <hr className='h-1 bg-blue-400 w-[40%] my-5 mx-auto'/>
        </div>

       



        {
          srt && <FeatureCards datas={sortData}/>
        }
        {
           src && <FeatureCards datas={srcData}/>
        }
        {
          all && <FeatureCards datas={allData}/>
        }
      {
        srcData && <div className=' text-center'>
          <h1  className='text-black dark:text-gray-200 text-2xl font-poppins font-extrabold text-center my-3'>opps sorry there is no data with this name </h1>
          <button className='btn btn-primary my-3' onClick={()=>window.location.reload()}> see all foods </button>
        </div>
      }
      
   
     
    </div>
  )
}

export default AvailableFood
