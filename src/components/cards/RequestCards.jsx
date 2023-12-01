import React from 'react'
import RequestCard from './../card/RequestCard';

const RequestCards = ({datas}) => {
  return (
    <div className='container mx-auto'>
       
         <div className=' grid md:grid-cols-2 lg:grid-cols-3 p-2 gap-3'>
    {
      datas.map((data,idk)=><RequestCard key={idk} info={data}/>)
    }
  </div>
    </div>
   
  )
}

export default RequestCards
