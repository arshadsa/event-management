import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosRequest from "../../utils/axios.service";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const { token } = useContext(AuthContext);
  console.log(token);

  useEffect(() => {
    if (token) {
      axiosRequest
        .get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          setFormData({
            name: `${data?.user.firstName} ${data?.user.lastName}`,
            email: data?.user.email,
            role: data?.user.role,
          });
        })
        .catch((error) => console.error(error));
    }
  }, [id, token]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
		console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit your form data here
    // ...
  };

  return (
    <div>
      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="container">
          <div className="py-3 w-[800px] m-auto">
            <div className="px-16 py-10 bg-white shadow-lg sm:rounded-3xl">
              <div className="w-full">
                <div className="divide-y divide-gray-200">
                  <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key, index) => (
                      <div className="mb-4" key={index}>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          <span className="input_label">{key}</span>
                        </label>
                        <input
                          type="text"
                          name={key}
                          value={formData[key]}
                          onChange={handleInputChange}
                          id={`field_${index}`}
                          className="input_control"
                        />
                      </div>
                    ))}
                    <div className="flex items-center justify-between gap-12 mt-8">
                      <button className="btn_group group w-full">
                        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                        <span className="btn w-full">Submit</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
