import React from 'react';
import Lottie from "lottie-react";
import SpinnerLottie from "./spinner-loader.json";
const Spinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie  animationData={SpinnerLottie} loop={true} ></Lottie>
        </div>
    );
};

export default Spinner