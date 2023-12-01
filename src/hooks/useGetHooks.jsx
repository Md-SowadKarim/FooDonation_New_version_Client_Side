import React, { useEffect, useState } from 'react'

const useGetHooks = () => {
 
    const [products,setProducts] = useState([])

    useEffect(()=>{

        fetch(`https://foodonation.vercel.app/sortdata`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setProducts(data)
        })

    },[])
    

    return products;
}

export default useGetHooks


// const a= axiosSecure.get('/sortexpirefood')
// .then(res=>res.data)
// .then(res=>{
//     setProducts(res.data)
//     setLoading(false)
// })