import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaBook, FaXmark } from "react-icons/fa6"
import logo from "../assets/logo.png"
import { AuthContext } from '../contexts/AuthProvider';
import { MdLogin } from "react-icons/md";
import { BsFillSignIntersectionFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const { user } = useContext(AuthContext);

    //toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    //navItems
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },

    ]

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center gap-8 text-base'>
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><img src={logo} className='inline-block size-9 rounded-2xl bg-slate-100' alt="" /> Bookify</Link>

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) =>
                                <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                            )
                        }
                    </ul>
                    {/* menu button for large devices*/}
                    <div className="relative inline-block text-left" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            aria-expanded={isOpen ? 'true' : 'false'}
                            aria-haspopup="true"
                        >
                            Login
                        </button>

                        {/* Dropdown content */}
                        {isOpen && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <div className="py-1" role="none">
                                    <a
                                        href="/login"
                                        className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-gray-900 flex items-center"
                                        role="menuitem"
                                    >
                                        <MdLogin className='mr-2 font-bold'/> Login
                                    </a>
                                    <a
                                        href="/sign-up"
                                        className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-gray-900 flex items-center"
                                        role="menuitem"
                                    >
                                        <BsFillSignIntersectionFill className='mr-2' /> Signup
                                    </a>
                                    <a
                                        href="/logout"
                                        className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-gray-900 flex items-center"
                                        role="menuitem"
                                    >
                                        <BiLogOut className='mr-2' /> Logout
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* menu button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"} `}>
                    {
                        navItems.map(({ link, path }) =>
                            <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar