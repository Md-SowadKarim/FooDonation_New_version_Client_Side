import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../authProvider/AuthProvider'
import useAxios from './useAxios'

const useUsers = () => {
  const {user}=useContext(AuthContext)
  const axiosSecure=useAxios()
  console.log(user?.email)

    const { data ,isLoading} = useQuery({
                queryKey: ['user'],
              
                queryFn:async () =>{
                   
              //  const a= axios.get(`http://localhost:5000/user`,{withCredentials:true})
              const a=axiosSecure.get('/user')
                 .then(res=>res.data)
                //  const b= axios.get("http://localhost:5000/user")
                //  .then(res=>res.data)
                // return {a,b}

                
                return a
                }
                             
              })
        //      console.log(isLoading)
        //   console.log(data)
  return {data,isLoading}
}

export default useUsers
