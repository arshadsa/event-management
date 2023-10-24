import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AuthContext } from "../../Contexts/AuthContext";

function DynamicForm() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/eventForm/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const preItem = JSON.parse(localStorage.getItem(id)) || null;
        const updatedData = data.labels.map((label) => ({
          label: label.name,
          value: "",
          editable: false,
        }));
        const dataToSet = preItem || updatedData
        setName(data.name);
        setFields(dataToSet);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const toggleEditLabel = (index) => {
    const newFields = [...fields];
    newFields[index].editable = !newFields[index].editable;
    setFields(newFields);
  };

  const handleLabelChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].label = event.target.value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { label: `Event ${fields.length + 1}`, value: "", editable: false }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = fields.map(({ label, value }) => ({ label, value }));
    if (!user?.email) {
      localStorage.setItem(id, JSON.stringify(fields));
      return navigate("/login")
    }
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/events/request/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, labels: dataToSend }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(()=> localStorage.removeItem(id));
  };


  // useEffect(() => {
  //   document.getElementsByClassName('hidden_header', 'hidden_footer')[0].style.display= 'none'
  // }, [true]);


  return (


    <>
      <div className=" py-6 flex flex-col justify-center sm:py-12">
        <div className=" container">
          <div className=" py-3 w-[800px]  m-auto">
            <div className=" px-16 py-10 bg-white shadow-lg sm:rounded-3xl ">
              <div className="w-full">

                <div className="divide-y divide-gray-200">

                  <form onSubmit={handleSubmit} >
                    <div className="grid grid-cols-2 items-center gap-y-3 gap-x-8">
                      {fields.map((field, index) => (
                        <div className="relative z-0 w-full group" key={index}>
                          <div className="flex justify-between items-center">
                            {field.editable ? (
                              <input
                                value={field.label}
                                placeholder={field.label}
                                onChange={(e) => handleLabelChange(index, e)}
                                onBlur={() => toggleEditLabel(index)}
                                className="input_control"

                                autoFocus
                              />
                            ) : (
                              <span htmlFor="floating_email" className="input_label">{field.label}</span>
                            )}
                            <button type="button" onClick={() => toggleEditLabel(index)} className="p-1 text-blue-800  hover:text-blue-800  rounded-md ml-2">
                              <TbEdit />
                            </button>
                          </div>
                          <div className="flex justify-between items-center">

                            <input
                              value={field.value}
                              onChange={(e) => handleInputChange(index, e)}
                              id="floating_first_name" className="input_control"
                            />
                            {fields.length > 1 && (
                              <button type="button" onClick={() => removeField(index)} className="p-1 text-blue-800 hover:text-red-600 ml-2 absolute top-0 right-10">
                                <RiDeleteBin5Fill />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <button type="button" onClick={addField} className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md w-full">
                    Add Field
                  </button> */}
                    <div className="flex items-center justify-between gap-12 mt-8">
                      <button className="btn_group group w-full" onClick={addField}>
                        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0 " />

                        <span className="btn w-full"> Add Field</span>
                      </button>
                      <button type="submit" className="btn_group group w-full" >
                        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0 " />

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

    </>
  );
}

export default DynamicForm;
