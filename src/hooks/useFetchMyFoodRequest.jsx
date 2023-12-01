import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../authProvider/AuthProvider'

const useFetchMyFoodRequest = () => {
    const{user}=useContext(AuthContext)
    const axiosSecure=useAxios()

    const { data ,isLoading} = useQuery({

        queryKey: ['myFoodRequest'],    
        queryFn:async () =>{    
                
     // const a=await axios.get(`https://foodonation.vercel.app/sortfood`,{withCredentials:true})
    const a= axiosSecure.get(`/myfoodrequest/${user?.email}`)
   
    .then(res=>res.data)
   

    return a
        }   
                      
      })
    //  console.log("Manage My Food ",data)   
return {data,isLoading}
 
}

export default useFetchMyFoodRequest