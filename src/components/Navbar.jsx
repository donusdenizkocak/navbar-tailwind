import React from "react";
import data from '../helper/data'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
 <>
        {/* Main navigation container */}
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          {/* Collapsible navigation container */}
          <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-te-collapse-item>
            {/* Logo */}
            <a className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0" href="#">
              <img src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp" style={{height: '15px'}} alt="" loading="lazy" />
            </a>
            {/* Left navigation links */}
            <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
             
            {data.map((item, index) => (
                                (item.navchildren ?   (<li className="mb-4 lg:mb-0 lg:pr-2 relative" data-te-nav-item-ref key={index}>
                                     <button
        class="w-full text-left flex items-center outline-none focus:outline-none"
      >
        <span class="pr-1 flex-1"><Link  className="mega-menu-link  p-2 rounded-md" to={item.nlink}>{item.navtext} </Link></span>
        <span class="mr-auto">
          <svg
            class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
                                      {  <ul  className="class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32>
                                          {item?.navchildren?.map((event, index) => (
                                            <li className="hidden hover:block  text-gray-600 hover:text-blue-600    top-56" key={index}>
                                              <Link  className="mega-menu-link bg-amber-200" to={event.nlink}>{event.navtext} </Link>
                                                                    
                                               <ul className="nav-content2 items-center justify-center space-y-8  md:space-x-6 md:space-y-0">
                                                  {event.navchildren?.map((child, index) => (
                                                     <li className="text-gray-600 hover:text-blue-600" key={index}>
                                                       <Link  className="mega-menu-link my-1" to={child.nlink}>{child.navtext} </Link>
                                                      </li>
                                                   ))}
                                               </ul>                                       
                                        </li>
                                    ))}
                                </ul>}
                             </li>):  (<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref key={index}>
                                      <Link  className="mega-menu-link  p-2 rounded-md" to={item.nlink}>{item.navtext} </Link></li>)      )              
                            ))}             
              {/* <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                {/* Dashboard link */}
                {/* <a className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400" href="#" data-te-nav-link-ref>Dashboard</a>
              </li>                         */} 
            </ul>
          </div>       
        </div>
      </nav>
 </>
);
};

export default Navbar;
