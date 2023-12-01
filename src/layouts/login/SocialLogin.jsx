import React, { useContext } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const { googleLogin } = useContext(AuthContext); 
  const handleLogin = (log) => {
    log().then((res) => {
      console.log(res)
      toast.success('login Successfully');
      navigate(location?.state ? location.state: '/')
    });
  };
  return (
    <div>
      <div >
        <button
          onClick={() => handleLogin(googleLogin)}
          type="submit"
          className="w-full text-white bg-red-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Google Sign in
        </button>
       
      </div>
    </div>
  );
}

export default SocialLogin
