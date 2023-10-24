import React, { useState } from "react";
import logBg from "../../assets/Event/form_bg3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axiosRequest from "../../utils/axios.service";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";
import { BiSolidHome } from "react-icons/bi";

const Register = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const inputStyles =
        "w-full px-4 py-3 flex-grow mb-2 bg-[#1608080f] transition duration-200 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:border-violet-500 ";
    const buttonStyles = "btn_group group w-full block block_btn";
    const btnSpanStyles =
        "absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0";
    const btnTextStyles = "btn w-full block";

    // State variables for form data and validation errors
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form data (add your validation logic here)
        const validationErrors = {};

        if (!formData.userName) {
            validationErrors.userName = "First Name is required";
        }

        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match";
        }

        // If there are validation errors, set them in the state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // If no errors, you can submit the form data here
            try {
                // If no errors, you can submit the form data here using axiosRequest
                const response = await axiosRequest.post("/user/signup", formData); // Adjust the API endpoint
                console.log("Form submitted:", response);
                if(response?.success == true) {
                    console.log('inside success');
                    login(response?.user, response?.user?.token);
                    navigate('/');
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        }


    };

    const isValidEmail = (email) => {
        // Add your email validation logic here
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Handle input changes and update form data
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <section className="log_bg ">
                <div className="container h-full px-6 lg:py-24 md:py-16 sm:py-8 py-8">
                    <div className="inner_box">
                        <div className="mb-12 md:mb-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 saml_img relative">
                            <img src={logBg} className="w-full h-full object-cover" alt="Phone image" />

                            <Link to='/'  class="backHome">
                               <BiSolidHome />
                            </Link>
                        </div>

                        <div className="w-full p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                            <h1 className="text-2xl font-bold text-center">Register Now</h1>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="firstName" className="block dark:text-gray-400">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="yourName"
                                        id="yourName"
                                        placeholder="Your Name"
                                        className={inputStyles}
                                        value={formData.userName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
                                    )}
                                </div>
                                
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="email" className="block dark:text-gray-400">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className={inputStyles}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block dark:text-gray-400">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        className={inputStyles}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                    )}
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="confirmPassword" className="block dark:text-gray-400">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        className={inputStyles}
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                    )}
                                </div>
                               
                                <button type="submit" className={buttonStyles}>
                                    <span className={btnSpanStyles} />
                                    <span className={btnTextStyles}>Register</span>
                                </button>
                            </form>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link
                                    rel="noopener noreferrer"
                                    to="/login"
                                    className="underline text-sky-600 font-semibold"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;