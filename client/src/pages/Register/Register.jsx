import React, { useEffect } from 'react';
import logBg from '../../assets/Event/form_bg3.jpg';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {


    // useEffect(() => {
    //     document.getElementsByClassName('hidden_footer')[0].style.display= 'none'
    //   }, []);


    return (
        <>

            <section className="log_bg ">
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

                        <div className="w-full p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold text-center">Register Now</h1>
                            <form  action="" className="space-y-6">
                            <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block dark:text-gray-400">Full Name</label>
                                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 flex-grow mb-2 bg-[#1608080f] transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:border-violet-500 " />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                                    <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 flex-grow mb-2 transition duration-200 bg-[#1608080f] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:border-violet-500 " />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="number" className="block dark:text-gray-400">Number</label>
                                    <input type="number" name="number" id="number" placeholder="Number" className="w-full px-4 py-3  flex-grow  h-12 mb-2 transition duration-200 bg-[#1608080f] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:border-violet-500 " />
                                   
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
                          
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">already have an account?
                                <Link rel="noopener noreferrer" to='/login' className="underline text-sky-600 font-semibold"> Login</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Register