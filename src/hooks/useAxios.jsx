import axios from 'axios'
import React, { useEffect } from 'react'

const axiosSecure=axios.create({
    baseURL: 'https://foodonation.vercel.app',
    withCredentials:true
})

const useAxios = () => {
// useEffect(()=>{
//     axiosSecure.interceptors.response.use(res=>{
//         return res
//     }),error =>{
//         console.log('interceptor error', error.response)
//     };
// })

  return axiosSecure;
  
}

export default useAxios
