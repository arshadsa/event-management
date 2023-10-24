import React from "react";
import InnerBanner from "../../components/Shared/innerBanner/InnerBanner";

const Contact = () => {
  return (
   <>
      <InnerBanner title='Contact' name='Contact' />
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">Got questions or need assistance? We're here to help!</p>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" required></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   </>
  );
}

export default Contact;
