import React, { useEffect } from 'react';
import logBg from '../../assets/Event/form_bg3.jpg';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GoHome } from "react-icons/go";

const Login = () => {

    // useEffect(() => {
    //     document.getElementsByClassName('hidden_footer')[0].style.display = 'none'
    // }, []);


    return (
        <>

            <section className="log_bg">
                <div className="container h-full px-6 lg:py-24 md:py-16 sm:py-8 py-8">
                    <div className="inner_box">
                        {/* <!-- Left column container with background--> */}
                        <div className="mb-12 md:mb-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 saml_img relative">
                            <img
                                src={logBg}
                                className="w-full h-full  object-cover"
                                alt="Phone image"
                            />
                            <Link to='/'  class="backHome">
                               <GoHome />
                            </Link>
                        </div>

                        <div className="w-full h-full p-8 space-y-3 rounded-xl dark:text-gray-100">
                            <h1 className="text-2xl font-bold text-center">Login</h1>
                            <form action="" className="space-y-6">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block dark:text-gray-400">Username</label>
                                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 flex-grow mb-2 transition duration-200 bg-[#1608080f] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:border-violet-500 " />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3  flex-grow  h-12 mb-2 transition duration-200 bg-[#1608080f] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:border-violet-500 " />
                                    <div className="flex justify-end text-xs dark:text-gray-400">
                                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                    </div>
                                </div>
                                <button
                                    className="btn_group group w-full block block_btn"
                                >
                                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />

                                    <span className="btn w-full block">
                                        Login
                                    </span>
                                </button>
                            </form>
                            <div className="flex items-center pt-4 space-x-1">
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                                <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                {/* <button aria-label="Log in with Google" className="p-3 rounded-sm">
                                    <FcGoogle />
                                </button> */}
                                <button className="relative px-5 py-2 font-medium text-white group">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#221ca0] group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                                    <span className="relative flex justify-center items-center gap-6">  <FcGoogle />Login with </span>
                                </button>

                            </div>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                                <Link rel="noopener noreferrer" to='/register' className="underline text-sky-600 font-semibold"> Sign up</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Login