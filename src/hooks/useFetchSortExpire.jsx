import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'
import axios from 'axios'

const useFetchSortExpire = () => {
    const axiosSecure=useAxios()

    const { data ,isLoading} = useQuery({

        queryKey: ['sortExpireFood'],    
        queryFn:async () =>{          
     // const a=await axios.get(`https://foodonation.vercel.app/sortfood`,{withCredentials:true})
    const a= axiosSecure.get('/sortfood')
   
    .then(res=>res.data)
   

    return a
        }   
                      
      })
   //   console.log("sortFood",data)   
return {data,isLoading}
 
}

export default useFetchSortExpire
