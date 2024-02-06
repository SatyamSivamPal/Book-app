import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider.jsx"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import google from '../assets/google-logo.svg'
import github from '../assets/github.svg'


const Logout = () => {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        console.log("hello from logoout");
        logout().then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Logout successful!',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                navigate('/')
              })
        }).catch((error) => {

        })
    }
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <img className="w-24 h-24 mx-auto mb-4" src={logo} alt="logo" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">Logout Page</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">Are you sure you want to logout?</p>
                <button onClick={handleLogout} className="block w-full text-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300">Logout</button>
                <Link to="/" className="block w-full text-center mt-4 text-blue-600 hover:underline dark:text-gray-500">Back to Home</Link>
            </div>
        </div>
    );
}

export default Logout;
