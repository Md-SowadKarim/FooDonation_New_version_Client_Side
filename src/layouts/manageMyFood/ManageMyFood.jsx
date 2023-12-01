import React from 'react'
import useFetchManageMyFood from '../../hooks/useFetchManageMyFood'
import Spinner from './../../components/Spinner/Spinner';
import  DataTable  from 'react-data-table-component';
import { FaAddressBook, FaCalendarDay, FaLocationArrow, FaPeopleArrows } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxios from './../../hooks/useAxios';
import toast from 'react-hot-toast';
import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';
 

const ManageMyFood = () => {
  const queryClient = useQueryClient();
  const axiosSecure=useAxios()
    const {data,isLoading}=useFetchManageMyFood()
   // console.log(data)
   const {mutateAsync:deleteFoodMutation}=useMutation({
    mutationFn: async (id)=>{
      console.log("id",  id)
      const a= axiosSecure.delete(`/deletefood/${id}`)
      .then(res=> {
        toast.success("Food Deleted successfully")
      })

      return a
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['manageMyFood']) 
      },
  })
const handdleDelete=async(id)=>{
  console.log(id)
  try{
    await deleteFoodMutation(id)
    }catch(err){
        console.log(err.message)
    }

}



    const columns = [
    {
        name: 'Title/Image ',
        selector: row => (
          <div className='p-1 '>
           <div className="flex items-center">
                <div className="flex flex-col text-center justify-center">                   
                <img className="object-cover mx-auto w-20 rounded-xl border-black border-2" src={row.imgUrl} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-black" tabindex="0" role="link">{row.name.toUpperCase()}</a>
                   </div>
                
            </div>
          </div>
        )
    },
    {
        name: 'Expire/Quantity',
        selector: row => (
          <div className=''>
        <div className='flex  gap-3 my-3 items-center'>
        <h1 className='flex items-center gap-3  text-black '><FaCalendarDay/></h1>
        <h1 className='text-black '>{row.date}</h1>
        </div>
        <div className='flex  gap-3 my-3 items-center'>
        <h1 className='text-black '>✨ {row.status}</h1>
        </div>
        <div className='flex gap-2  items-center'>
            <h1 className='text-black '><FaPeopleArrows></FaPeopleArrows></h1>
            <h1 className='text-black '> Quantity {row.quantit}  😊</h1>
            </div>
       
          </div>
        )
    },
    {
      name: 'Edit',
      selector: row => (
          <div >
            <Link to={`/foodupdate/${row._id}`}>
             <button className='btn btn-primary' onClick={e=> console.log("its clicked the edit button")}>Edit</button>
             </Link>
          </div>
          )
  },
  {
    name: 'Delete',
    selector: row => (
      <div>
      <button className="btn btn-primary" onClick={()=>document.getElementById(`${row._id}`).showModal()}>Delete</button>
<dialog id={row._id} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-white text-lg">Hello!</h3>
    <p className="py-4 text-xl text-red-400 ">Would you like to delete this food ? ✂✂</p>
    <div className="modal-action">
      
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
         <button className='btn btn-primary mr-5' onClick={()=>handdleDelete(row._id)}>Yes</button>
        <button className='btn btn-primary'>No</button>
      </form>
    </div>
  </div>
</dialog>
        
      </div>
      )
},{
 name:"Doner",
 selector :row=>(
  <div>
    <div className="flex items-center">
                <div className="flex flex-col text-center justify-center">                   
                <img className="object-cover mx-auto w-10 rounded-full border-blue-500 border-2" src={row.doner.dImg} alt="Avatar"/>
           
                    <a href="#" className="mx-2 font-semibold text-black" tabindex="0" role="link">{row.doner.dName}</a>
                   </div>
                
            </div>
  </div>
 )
},
{
  name: 'Manage',
  selector: row => (
    <div>
      {
        row.status == "available"?  
        <button className='btn btn-primary' onClick={()=>toast.error("there is no request for this food")}>Manage</button>
        :
        <Link to={`/singlefoodetails/${row._id}`}>
       <button className='btn btn-primary' onClick={()=>console.log("pending manage clicked")}>Manage</button>
       </Link>
      }
      
    </div>
    )
},
];



    if(isLoading){
      return (
        <div className='container mx-auto'>
            <h1 className= '  font-extrabold font-poppins text-2xl'>This Is Manage My Food  Page</h1>
        <Spinner/>
        </div>
        
    )}
  return (
    <div className='container mx-auto space-y-3 p-5 rounded-lg text-center'>
      <h1 className= '  font-extrabold font-poppins text-2xl'>This Is Manage My Food  Page</h1>
      <hr className='h-1 mb-3 w-[50%] mx-auto bg-blue-500'/>
     <DataTable className=' bg-red-600 dark:bg-gray-900'
            columns={columns}
            data={data}
        />
          
           
           
    </div>
  )
}

export default ManageMyFood
