import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartCount, toggleCartVisibility }) {
  return (
    <div className='m-0 rounded border-b-2 shadow-lg border-stone-300 h-32 flex items-center justify-center hover:border-stone-300 transition-all duration-100 ease-in-out'>
      
      <nav className='m-5'>
        <ul className='flex space-x-10'>
          <div className='sm:grid sm:grid-cols-2 sm:gap-0 md:grid md:grid-cols-2 md:gap-52 lg:grid lg:grid-cols-2 lg:gap-96'>
            <div>
              <li className='sm:w-14 md:w-20 lg:w-24 border-2 border-green-20 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-110 delay-150 bg-sky-500'>
                <button className='w-full'>
                  <Link to="/" className="text-gray-100 sm:text-xs md:text-sm lg:text-base sm:p-1 md:p-2 lg:p-3">
                    Home
                  </Link>
                </button>
              </li>
            </div>

            <div className='flex space-x-10'>
              <li className='border-2 border-green-20 w-24 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-110 delay-150 bg-sky-500'>
                <button>
                  <Link to="/store" className="text-gray-100 m-7">Store</Link>
                </button>
              </li>

              <li className='border-2 border-green-20 w-24 rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-110 delay-150 bg-sky-500'>
                <button>
                  <Link to="/about" className="text-gray-100 m-7">About</Link>
                </button>
              </li>
            </div>
          </div>
        </ul>
      </nav>

      <div className="relative flex items-center cursor-pointer" onClick={toggleCartVisibility}>
        <svg className='h-12 w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default NavBar;
