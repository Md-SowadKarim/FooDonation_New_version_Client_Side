import React, { useContext, useState } from 'react'
import { useLoaderData, useNavigate,useParams } from 'react-router-dom'
import { FaCalendarDay, FaPeopleArrows, FaLocationArrow } from 'react-icons/fa';
import { AuthContext } from '../../authProvider/AuthProvider';
import { useMutation } from '@tanstack/react-query';
import useAxios from './../../hooks/useAxios';
import toast from 'react-hot-toast';
import useFetchSignleFood from './../../hooks/useFetchSignleFood';
import Spinner from './../../components/Spinner/Spinner';



const FooDetails = () => {
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxios()
    const {foodId}=useParams()
    console.log(foodId)
   const data=useLoaderData()
 // const {data,isLoading}=useFetchSignleFood(foodId)
 
 
 
    console.log(data)



    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate); // "17-6-2022"
    var time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    console.log(time)



    const {mutateAsync:requestMutation}=useMutation({
        mutationFn: async (newRequest)=>{
          const a=axiosSecure.post("/requestfood",newRequest)
          .then(res=>{
            console.log(res.data)
            toast.success("request added successfully")
          })
        // return await axios.post("https://foodonation.vercel.app/addfood",newFood,{withCredentials:true})
        // .then(res=> console.log(res.data))

          return a
        }
      })

    const handleRequestSubmit=async(e)=>{
        console.log(user)
        const form=e.target

        const aNote=form.aNote.value
        const money=form.money.value
        const foodId=form.fId.value
        
        e.preventDefault()

        const newRequest={
            foodId,
            "name":data.name,
            'imgUrl':data.imgUrl,
            "quantit":data.quantit,
            "location":data.location,
            "status":"pending",
            doner:{
                'dName': data.doner.dName,
                 'dImg': data.doner.dImg,
                 'demail':data.doner.demail
             },
            'note':data.note,           
            "date":data.date,           
            request:{
                "rName":user?.displayName,
                "rEmail":user?.email,
                "rImg":user?.photoURL,
                "rDate":currentDate,
                "rTime":time
            },
            money,
            aNote,
          
        }

try{requestMutation(newRequest)}catch(err){
console.log(err.message)
}
    navigate(-1)
       console.log(newRequest.doner.dName )
    }



  return (
    <div className='bg-white container mx-auto m-2 rounded-xl p-3 dark:bg-gray-900' >
      
<div className="max-w-lg p-3   mx-auto  bg-white border border-gray-400 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <div>
    <div className="flex gap-4 items-center p-4">
            <img className="object-cover sm:h-40 rounded-full border-blue-500 border-2" src={data.doner.dImg} alt="Avatar"/>
                <div className="flex flex-col">
                    <a href="#" className="mx-1 font-semibold max:text-2xl text-black  dark:text-gray-200" tabindex="0" role="link">{data.doner.dName}</a>
                   <span className="mx-1 text-xs text-black  dark:text-gray-300">{data.doner.demail}</span>
                 <div className='flex h-11  ml-1 gap-3  items-center'>
                    <p className=''><FaLocationArrow/></p>
                    
                    <p className='flex-grow text-xs w-[60%] max-lg:w-[50%]} text-black  dark:text-gray-200'>{data.location}</p>
                </div>
                <h1>{data.doner.demail == user?.email && "🤝 You Are The Doner Of This Food"}</h1>
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
            <h1 className='text-black dark:text-white'><FaPeopleArrows></FaPeopleArrows></h1>
            <h1 className='text-black dark:text-white'> {data.quantit} No. of person to be served 😊</h1>
            </div>
        <div className='flex ml-1  gap-3 my-3 items-center'>
        <h1 className='flex items-center gap-2 dark:text-gray-200 text-black '><FaCalendarDay/> Expire Date : </h1>
        <h1 className='text-black dark:text-gray-200'>{data.date}</h1>
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button id='rbtn' disabled={data.status == "pending"? true : data.doner.demail==user?.email? true:  false }  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>document.getElementById('my_modal_4').showModal()}>
     { data.status == "pending"? "Request is already in pending" : data.doner.demail==user?.email? " As You Are Doner So Cant Request ":  "Request Now"}
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
    </button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-4xl ">
    <div className='text-center'>
    <h3 className="font-bold text-lg">Add A new Request!</h3>
    <p className="py-4">pres ESC to ⚒ close the modal</p>
    <hr className='h-1 bg-blue-500 w-[50%] mx-auto'/>
   
    </div>
    <div className="modal-action">
    <section className="bg-white dark:bg-gray-900 container mx-auto dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
    <form onSubmit={handleRequestSubmit}  method='modal' className="modal-backdrop">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                <input readOnly defaultValue={data.name} type="text" name="nam" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Food name" required=""/>
            </div>
            <div className="sm:col-span-2">
                <label for="imgUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                <input  readOnly defaultValue={data.imgUrl} type="text" name="imgUrl" id="imgUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image Url" required=""/>
            </div>
         
            <div className="sm:col-span-2">
                <label for="fId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Id</label>
                <input readOnly type="text" defaultValue={data._id} name="fId" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
          
            <div>
                <label for="dEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donator Email</label>
                <input readOnly defaultValue={data.doner.demail} type='email' name="dEmail" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pickup Location" required=""/>
            </div> 
            <div className="w-full">
                <label for="dName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donator Name</label>
                <input readOnly type="text" defaultValue={data.doner.dName} name="dName" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
          
            <div>
                <label for="uEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                <input readOnly defaultValue={user?.email} type='email' name="uEmail" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pickup Location" required=""/>
            </div> 
            <div className="w-full">
                <label for="rDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requested Date & Time</label>
                <input readOnly type="text" defaultValue={currentDate +" | "+ time } name="rDate" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
          
            <div>
                <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                <input readOnly defaultValue={data.location} type='text' name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pickup Location" required=""/>
            </div> 
            <div className="w-full">
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                <input readOnly defaultValue={data.date} type="text"  name="date" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
            <div className="w-full">
                <label for="aNote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Note</label>
                <input type="text" defaultValue={data.note} name="aNote" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
          
            <div>
                <label for="money" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donation Amount</label>
                <input defaultValue="bangladesh" type='number' name="money" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your amount here" required=""/>
            </div> 
            
            
        </div>
        <div className='flex'> 
        <button type="submit" className="btn w-full mx-auto bg-blue-400 flex  justify-center  items-center  px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Request
        </button>
        
        </div>
      
    </form>
    <form method='modal'>
    <button className="btn w-full mx-auto bg-blue-400 flex  justify-center  items-center  px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Close
        </button>
    </form>
</div>
</section>
    </div>
  </div>
</dialog>
        
    </div>
</div>

    </div>
  )
}

export default FooDetails
