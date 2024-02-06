import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider.jsx"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import google from '../assets/google-logo.svg'
import github from '../assets/github.svg'

const Signup = () => {
    const { createUser, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
    const [error, setError] = useState("error");
    const navigate = useNavigate();
   

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password).then((userCredential) => {
            //signed up
            const user = userCredential.user;
            Swal.fire({
                title: 'Success!',
                text: 'Sign-up successful! Welcome to our platform',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                navigate('/')
              })

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setError(errorMessage)
            })

    }

    const handleGoogle = () => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            Swal.fire({
                title: 'Success!',
                text: 'Sign-up successful! Welcome to our platform',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                navigate('/')
              })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setError(errorMessage)
        })
    }

    const handleGithub = () => {
        loginWithGithub().then((result) => {
            const user = result.user;
            Swal.fire({
                title: 'Success!',
                text: 'Sign-up successful! Welcome to our platform',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                navigate('/')
              })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setError(errorMessage)
        })
    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 size-9 rounded-xl mr-3" src={logo}  alt="logo" />
                        Bookify
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
                                Sign up 
                            </h1>
                            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6" >
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
                                    Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-gray-500"> Login here</Link>
                                </p>
                            </form>
                            <hr />
                            <div className='flex w-full items-center flex-col mt-5 gap-3'>
                                    <button onClick={handleGoogle} className='block w-full bg-sky-500 hover:bg-gray-500 rounded-lg text-white'><img src={google} alt="" className='w-12 h-12  inline-block' />Login with Google</button>
                            </div>
                            <div className='flex w-full items-center flex-col mt-5 gap-3'>
                                    <button onClick={handleGithub} className='block w-full bg-sky-500 hover:bg-gray-500 rounded-lg text-white'><img src={github} alt="" className='w-12 h-12  inline-block' />Login with GitHub</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup