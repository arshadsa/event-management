import React from "react";
import axiosRequest from "../../utils/axios.service";
import toast from "react-hot-toast";

const Table = ({ data }) => {
  const handleMakeAdmin = async (event, email) => {
    event.preventDefault();
    console.log(email);
    try {
      const res = await axiosRequest.patch(`/user/control/${email}`, {
        role: "admin",
      });
      toast.success(res.data.message, { id: "user" });
    } catch (error) {
      toast.error(error.response?.data?.message, { id: "user" });
    }
  };

  const handleDelete = async (event, email) => {
    event.preventDefault();
    console.log(email);
    axiosRequest
      .delete(`/user/delete/${email}`)
      .then((res) => {
        toast.success(res.data.message, { id: "user" });
      })
      .then(() => window.location.reload())
      .catch((error) => {
        toast.error(error.response?.data?.message, { id: "user" });
      });
    // reload the page
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Make Admin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                    <td>
                      <button
                        onClick={() => handleMakeAdmin(event, item.email)}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        Make Admin
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(event, item.email)}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
