import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import {  HiGlobe } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='w-full dark:bg-gray-900 text-gray-300'>
      <div className='max-w-[1340px]  dark:bg-slate-900 mx-auto my-0 px-4 sm:px-6  drop-shadow-xl shadow-inner'>
        <div className=' py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-center'>
          {/* Footer Column 1 */}
          <div>
            <h2 className='text-lg font-semibold text-white mb-4'>Quick Links</h2>
            <ul className='text-sm flex flex-col items-center'>
              <Link to='/'      className="p-1 hover:text-white">Home</Link>
              <Link to='/posts' className="p-1 hover:text-white">Post</Link>
              <Link to='/about' className="p-1 hover:text-white">About</Link>
            </ul>
          </div>

          {/* Footer Column 2 */}
          <div>
            <h2 className='text-lg font-semibold text-white mb-4'>Contact Me</h2>
            {/*
            <div className='text-sm mb-2'>
              <HiOutlineMail className='text-gray-300 mr-2 inline' />
              <span className='align-middle'>example@example.com</span>
            </div>
            */}
            <div className='text-sm hover:text-white'>
              <HiGlobe size={20} className='text-gray-300 mr-2 inline' />
              <a href='https://darshanbajgain.github.io'target="_blank" rel="noopener noreferrer" className='align-middle '>darshanbajgain.github.io</a>
            </div>
          </div>

          {/* Footer Column 3 */}
          <div>
            <h2 className='text-lg font-semibold text-white mb-4'>Follow Me</h2>
            <div className='flex justify-center items-center space-x-4'>
              <a href='https://twitter.com/thearshanbajgai'target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white' title='Twitter'><FaTwitter size={22} /></a>
              <a href='https://www.linkedin.com/in/darshanbajgain/'target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white' title='LinkedIn'><FaLinkedin size={22} /></a>
              <a href='https://github.com/darshanbajgain'target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white' title='GitHub'><FaGithub size={22} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
