import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../authProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
  const navigate=useNavigate()
  const{logOut,user}=useContext(AuthContext)



  //================================================================== >> dunamic logo
const location = useLocation(); 
const dt=location.pathname
const split = dt.split('/')
const tt=split[1]
var d
if(tt){
 d=" | "+tt
}

// ================== =============================== ====================== >> dark and light mood setting

  const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light");
useEffect(()=>{
  console.log("use",theme)
  localStorage.setItem("theme",theme)
  if(theme==="dark"){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
    
  }
  Aos.init({
    duration:2000
  });
})

 const handleThemeClick=()=>{
  console.log("clicked")
  if(theme == "light"){
        console.log(theme)
        setTheme("dark")
       }else{
          console.log(theme)
          setTheme("light")
        }
 }

// =================== ==================================== ====================== >> navigation routhe setting
    const menu = (
        <>
          <li>
            
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            
            <NavLink to="/addfood">Add Food</NavLink>
          </li>
          <li>
          
            <NavLink to="/availablefood">Available Food</NavLink>
          </li>
          <li>
          
            <NavLink to="/myfoodrequest">My Food Request</NavLink>
          </li>
          <li>
           
            <NavLink to="/managemyfood">Manage My Food</NavLink>
          </li>
          
        </>
      );

//============================================================= >> logout button clicked in menu bar
      const handleLogoutClick = () => {
        logOut();
        navigate("/login");
        toast.success('Logout Sucessfully');
      };


    return (
        <div className="navbar container h-[110px] rounded-xl mx-auto bg-white dark:bg-gray-900">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" ml-3 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu}
                <div className='mr-5 my-1 bg-blue-500 px-3 py-2 rounded-xl' onClick={handleThemeClick}>
    {
      theme == "light" ? <h1><FaMoon/></h1> : <h1><FaSun/></h1>
    }
  </div> 
  {/* ============================================================= >> showing user name with condition in navbar  */}
                {user?.email ? (
                <div className='flex items-center gap-2'>
                    <div>
                  <h1 className='uppercase'>
                  {user.displayName}
                  </h1>
    {/* ============================================================= >> showing user photo with condition in navbar  */}                
                    </div>
                    {
                      user.photoURL &&  
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                      <img src={user.photoURL}  />
                     </div>
                     </label> 
                    }
                     
                    <button className="btn btn-sm  btn-primary" onClick={handleLogoutClick}>
                  Logout
                </button>   
                
                </div>
             
            ) : (
                <Link to="/login">
                <button className="flex justify-start btn btn-sm  btn-secondary">Login</button>
              </Link>
            )}
              </ul>
              
            </div>
            <a className="btn btn-ghost font-poppins font-bold normal-case lg:text-sm text-xl xl:text-xl  text-blue-500">Foo-D-onation <br /> {d} <hr data-aos="fade-up" className='h-1 bg-blue-500 w-[80%]'/></a>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}
            </ul>
          </div>
          <div className="max-md:hidden md:navbar-end">
          <label className="swap swap-rotate">
 
  
  <div className='mr-5 bg-blue-500 px-3 py-2 rounded-xl' onClick={handleThemeClick}>
    {
      theme == "light" ? <h1><FaMoon/></h1> : <h1><FaSun/></h1>
    }
  </div>
  
  
 
</label>
          {user?.email ? (
                <div className='flex max-md:pl-5 md:items-center gap-2'>
                    <div>
                  <h1 className='uppercase'>
                  {user.displayName}
                  </h1>
                    </div>
                    {
                      user.photoURL &&  
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                      <img src={user.photoURL}  />
                     </div>
                     </label> 
                    }
                     
                    <button className="btn btn-sm  btn-primary" onClick={handleLogoutClick}>
                  Logout
                </button>   
                </div>
             
            ) : (
                <Link to="/login">
                <button className="btn btn-sm  btn-secondary">Login</button>
              </Link>
            )}
          </div>
        </div>
      );
    };

export default Navbar