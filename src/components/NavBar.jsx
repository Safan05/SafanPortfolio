import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
const NavBar = () => {
    return ( 
        <>
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center logo">
               <Link to="/"> <img className='mx-2 w-10' src={logo} alt='logo'/> </Link> 
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
               <a href='https://www.linkedin.com/in/abdallah-safan-021483278'> <FaLinkedin/> </a>
               <a href='https://github.com/Safan05'> <FaGithub/></a>
               <a href='https://www.instagram.com/abdallah._.safan?igsh=dnJ0MnBsZzA4cjQw'> <FaInstagram/></a>
               <a href='https://www.facebook.com/profile.php?id=100074788631712&mibextid=ZbWKwL'> <FaFacebook/></a>
            </div>
        </nav>
        </>
     );
}
 
export default NavBar;