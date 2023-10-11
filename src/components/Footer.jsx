import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiGlobe } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className='w-full dark:bg-gray-900 text-gray-300'>
      <div className='max-w-[1340px]  dark:bg-slate-900 mx-auto my-0 px-4 sm:px-6  drop-shadow-xl shadow-inner'>
        <div className=' py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-center'>
          {/* Footer Column 1 */}
          <div>
            <h2 className='text-lg font-semibold text-white mb-4'>Quick Links</h2>
            <ul className='text-sm'>
              <li className='mb-2'><a href='#' className='hover:text-gray-100'>Home</a></li>
              <li className='mb-2'><a href='#' className='hover:text-gray-100'>Post</a></li>
              <li className='mb-2'><a href='#' className='hover:text-gray-100'>About</a></li>
            </ul>
          </div>

          {/* Footer Column 2 */}
          <div>
            <h2 className='text-lg font-semibold text-white mb-4'>Contact Me</h2>
            <div className='text-sm mb-2'>
              <HiOutlineMail className='text-gray-300 mr-2 inline' />
              {/*<span className='align-middle'>example@example.com</span>*/}
            </div>
            <div className='text-sm'>
              <HiGlobe className='text-gray-300 mr-2 inline' />
              <a href='#' className='hover:text-gray-300 align-middle'>www.example.com</a>
            </div>
          </div>

          {/* Footer Column 3 */}
          <div>
            <h2 className='text-lg font-semibold text-white mb-4'>Follow Me</h2>
            <div className='flex justify-center space-x-4'>
              <a href='#' className='text-gray-300 hover:text-white' title='Twitter'><FaTwitter /></a>
              <a href='#' className='text-gray-300 hover:text-white' title='LinkedIn'><FaLinkedin /></a>
              <a href='#' className='text-gray-300 hover:text-white' title='GitHub'><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
