import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'
import axios from 'axios'

const useFetchAll = () => {
    const axiosSecure=useAxios()

    const { data ,isLoading} = useQuery({

        queryKey: ['allFood'],    
        queryFn:async () =>{          
     // const a=await axios.get(`https://foodonation.vercel.app/sortfood`,{withCredentials:true})
    const a= axiosSecure.get('/allfood')
   
    .then(res=>res.data)
   

    return a
        }   
                      
      })
  //    console.log("allfood",data)   
return {data,isLoading}
 
}

export default useFetchAll
