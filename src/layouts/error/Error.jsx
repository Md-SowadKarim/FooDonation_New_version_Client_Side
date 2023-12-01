import React from 'react'
import { Link } from 'react-router-dom'
import err from "../../assets/404.gif"

const Error = () => {
  return (
    <div>
     <div className='mx-auto w-[50%] text-center  '>
           <img className='w-full rounded-2xl' src={err} alt="" />

            <h2 className='text-5xl text-center font-bold'>
              4O4  NOT FOUND
            </h2>
            <Link
            to="/"><button className='btn btn-primary w-[50%] m-4 bg-blue-500'>Go Home</button>
          </Link>
         

        </div>
        
    </div>
  )
}

export default Error
