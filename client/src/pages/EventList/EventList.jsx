import React, { useEffect, useState } from "react";
import { useQuery } from "react-query"
import { Link } from "react-router-dom";
import InnerBanner from "./innerBanner/InnerBanner";
import axiosRequest from "../../utils/axios.service";
import { toast } from 'react-hot-toast';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const CenteredItemList = () => {

  const [page, setPage] = useState(1);
  const fetchEventList = () => {
    return axiosRequest.get('/eventForm', {
      params: {
        page,
        limit: 10
      }
    })
  }
  // implemented react Query. please read doc for proper use 
  const { isLoading, error, isError, data } = useQuery(['eventForm-list', page], fetchEventList);
  useEffect(() => {
    if (isError) {
      toast.error(error, { id: "eventform" });
    }
  }, [isError])


  const pages = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>


      <InnerBanner />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-5">
            <div className="container mx-auto my-5 " >
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <div>

                  {data?.results.map((item) => (


                    <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2 review" key={item._id}>

                      <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                        <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                        >
                          <img src={item.image} alt="" />
                        </div>
                        <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-purple-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                      </div>

                      <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                        <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full w-full bg-gradient-to-r from-green-50 via-blue-20 to-purple-100 rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none flex justify-center flex-col gap-5">
                          <h3 className="hidden md:block font-bold text-2xl text-gray-700"> {item.name} </h3>
                          <h3 className="hidden md:block font-bold text-2xl text-gray-700"> {item.title} </h3>
                          <p className="text-gray-600 text-justify">{item.description}</p>


                          <Link to={`/EventRequest/${item._id}`} className="btn_group group w-fit" >
                            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />

                            <span className="btn "> Book Now</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  ))}

                </div>


              )}

              <nav className="mt-10 mx-auto">
                <ul class="flex">
                  <li onClick={() => setPage(i)} class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer">
                      <span class="material-icons text-sm"><MdNavigateBefore /></span>
                  </li>
                  {pages.map((_, i) => (
                    <li key={i} onClick={() => setPage(i)} class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer current">
                     {i}
                    </li>
                  ))}
                   <li onClick={() => setPage(i)} class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer">
                      <span class="material-icons text-sm"><MdNavigateNext /></span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CenteredItemList;

