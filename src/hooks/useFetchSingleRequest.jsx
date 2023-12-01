import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'
import axios from 'axios'

const useFetchSingleRequest = (foodId) => {
    const axiosSecure=useAxios()
console.log("signleFood ",foodId)
    const { data ,isLoading} = useQuery({

        queryKey: ['singleRequest'],    
        queryFn:async () =>{    
                
     // const a=await axios.get(`https://foodonation.vercel.app/sortfood`,{withCredentials:true})
    const a= axiosSecure.get(`/singlerequest/${foodId}`)
   
    .then(res=>res.data)
   

    return a
        }   
                      
      })
      console.log("single search food",data)   
return {data,isLoading}
 
}

export default useFetchSingleRequest