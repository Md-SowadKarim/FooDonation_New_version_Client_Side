import React, { useEffect } from 'react'
import FeatureCard from './../card/FeatureCard';
import Aos from 'aos'
import 'aos/dist/aos.css'
import empty from "../../assets/empty-box.gif"


const FeatureCards = ({datas}) => {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  })
    console.log(datas)
    if(datas.length==0){
      return <div className='mx-auto flex justify-center my-3'>
        <img className='rounded-2xl h-100' src={empty} alt="" />
      </div>
    }
  return (
    <div>
       
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 p-2 gap-3'>
    {
      datas.map((data,idk)=><FeatureCard key={idk} info={data}/>)
    }
  </div>
    </div>
    
  )
}

export default FeatureCards
