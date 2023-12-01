import React from 'react'
import Carousel from 'react-elastic-carousel'
import ek from "../../assets/image/11.jpg"
import dui from "../../assets/image/22.jpg"
import tin from "../../assets/image/33.jpg"



const Slider = () => {
  
    return (
        <div>
              <div class="carousel w-full rounded-xl">
                <div id="slide1" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${ek})`}}>
                        <div class="hero-overlay bg-opacity-80"></div>
                        <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={ek} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">"Sharing food with another human being is an intimate act that should not be indulged in lightly." </h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">- M.F.K. Fisher</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${dui})`}}>
                        <div class="hero-overlay bg-opacity-80"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={dui} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">"There is no exercise better for the heart than reaching down and lifting people up."</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">- John Holmes</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${ek})`}}>
                        <div class="hero-overlay bg-opacity-80"></div>
                        <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={ek} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">"Never underestimate the power of food. It has the ability to bring people together and make them feel cherished."</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black "> - Nadeem Aslam</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                  </div>
               
                </div>
              </div>
        </div>
      )
  
}

export default Slider
