import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'
import axios from 'axios'

const useFetchSignleFood = (foodId) => {
    const axiosSecure=useAxios()

    const { data ,isLoading} = useQuery({

        queryKey: ['singleFood'],    
        queryFn:async () =>{    
            console.log("signleFood ",foodId)
     // const a=await axios.get(`https://foodonation.vercel.app/sortfood`,{withCredentials:true})
    const a= axiosSecure.get(`/foodetails/${foodId}`) 
   
    .then(res=>res.data)
   

    return a
        }   
                      
      })
   //   console.log("searchFood",data)   
return {data,isLoading}
 
}

export default useFetchSignleFood