import React, { useContext, useState } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import useAxios from '../../hooks/useAxios'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom';

const AddFood = () => {
    

    const axiosSecure=useAxios()
    const {user}=useContext(AuthContext)
    const [status,setStatus]=useState("Available")
    const [date,setDate]=useState()
    const handleChange=(e)=>{
        setStatus(e.target.value)
        console.log(e.target.value)
    }
    const handleDateChange=(e)=>{
        console.log(e.target.value)
        setDate(e.target.value)
    }

    const {mutateAsync:addFoodrMutation}=useMutation({
        mutationFn: async (newFood)=>{
          const a=axiosSecure.post("/addfood",newFood)
          .then(res=>{
            console.log(res.data)
            toast.success("product added successfully")
          })
        // return await axios.post("https://foodonation.vercel.app/addfood",newFood,{withCredentials:true})
        // .then(res=> console.log(res.data))

          return a
        }
      })

    const handleAddSubmit=async(e)=>{
        console.log(user)
        const form=e.target

        const name2=form.nam.value
        const name=name2.toLowerCase()
        const imgUrl=form.imgUrl.value
        const quantity=form.price.value
        const quantit=parseInt(quantity)
        const location=form.location.value
        const note=form.note.value
        console.log(name,imgUrl,quantity,location,note)
       // const date=form.date.value
        e.preventDefault()

        const newFood={
            name,
            imgUrl,
            quantit,
            location,
            status:"available",
            doner:{
                'dName': user.displayName,
                 'dImg': user.photoURL,
                 'demail':user.email
             },
            note,
            date,
          
        }

try{addFoodrMutation(newFood)}catch(err){
console.log(err.message)
}
    
       console.log(newFood.doner.dName )
    }

  return (
    <div>
    <section className="bg-white dark:bg-gray-900 container mx-auto dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">Add a new Food</h2>
    <form onSubmit={handleAddSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                <input defaultValue="Mango" type="text" name="nam" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Food name" required=""/>
            </div>
            <div className="sm:col-span-2">
                <label for="imgUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                <input defaultValue="https://i.postimg.cc/Gp26BSkq/mango.jpg" type="text" name="imgUrl" id="imgUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image Url" required=""/>
            </div>
         
            <div className="w-full">
                <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                <input type="number" defaultValue="4" name="price" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
          
            <div>
                <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                <input defaultValue="Dhaka, Bangladesh" type='text' name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pickup Location" required=""/>
            </div> 
            
              <div>
                <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select defaultValue={status} onChange={handleChange} id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Status</option>
                    <option defaultValue="Available">Available</option>
                   
                </select>
            </div>
            <div className="w-full">
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                <input type="date" onChange={handleDateChange} name="date" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="no. of person to be served.)" required=""/>
            </div>
            <div className="sm:col-span-2">
                <label for="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Note</label>
                <textarea defaultValue="This is really a very good food to eat" id="note" name='note' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Additional Note Here..."></textarea>
            </div>
        </div>
        <button type="submit" className="bg-blue-400 inline-flex  items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Add Food
        </button>
    </form>
</div>
</section>
  </div>
  )
}

export default AddFood
