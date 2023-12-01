import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'
import axios from 'axios'

const useFeatureData = () => {
    const axiosSecure=useAxios()

    const { data ,isLoading} = useQuery({

        queryKey: ['featureFood'],    
        queryFn:async () =>{          
    //  const a= axios.get(`https://foodonation.vercel.app/featurefood`,{withCredentials:true})
      const a= axiosSecure.get('/featurefood')
         .then(res=>res.data)
        

         return a
        }                    
      })
//      console.log("query",data)  
return {data,isLoading}
 
}

export default useFeatureData
