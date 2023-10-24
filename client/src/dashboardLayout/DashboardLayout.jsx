import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader/DashboardHeader";
import logo from "../assets/logo/logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { TfiDashboard } from "react-icons/tfi";
import { BiSolidUser, BiSolidUserCircle } from "react-icons/bi";
import { MdEvent } from "react-icons/md";



const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <TfiDashboard />,
    // subRoutes: [
    //   {
    //     path: "/multi-stape-sing-up",
    //     name: "Multi-steps Sign-up",
    //     icon: <RxDot />,
    //   },
   
    // ],
  },

  {
    path: "/dashboard/profile",
    name: "Profile",
    icon: <BiSolidUserCircle />,
  
  },

  {
    path: "/dashboard/users",
    name: "Users",
    icon: <BiSolidUser />,
   
  },
  {
    path: "/dashboard/events",
    name: " Event Requests",
    icon: <MdEvent />,
    
  },
]

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // ====================================== active menu ========================================

  const [selected, setSelected] = useState(0)



  const mainBackground = "bg-[#010a57] h-screen p-5";
  const mainFlexContainer = "flex mt-[4.7rem] md:mt-0 h-full";
  const navStyles =
    " pb-16 overflow-x-hidden hidden md:block w-[230px] xl:w-[230px] h-full";
  const navHeaderStyles =
    "bg-[#010a57] w-[230px] flex justify-between items-center pt-2 pb-5 border-b border-[#4561c0] fixed z-50 px-3";
  const logoLinkStyles =
    "router-link-active router-link-exact-active flex items-center  pl-5 intro-x w-[160px]";
  const logoImageStyles = "w-full";
  const menuIconStyles = "text-white text-4xl cursor-pointer";
  const navListStyles = "pt-20 h-[80vh] flex flex-col gap-1";
  const activeListItem = "list_item ";
  const navListItemIconContainer =
    "before_img ";
  const navListItemIcon = "text-white selected";
  const navListItemText = "text-white selected";
    "hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium dark:text-slate-300";
  const navListItemTransition =
    "transition ease-in duration-100 ml-auto mr-5 hidden xl:block";
  const nonActiveListItem = "list_item ";
  const whiteNavListItemIcon = "text-white";
  const NavListItemText = "text-white";
    "hidden xl:flex items-center w-full ml-3 text-white font-medium dark:text-slate-300";
  const mainContentArea =
    "rounded-[30px] min-w-0 min-h-[93vh] flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block h-full z-50";
  const contentInnerWrapper = "w-full py-5 px-5";





  return (
    <>
      <div className={mainBackground}>
        <div className={mainFlexContainer}>
          <nav className={navStyles} style={{ width: isOpen ? "50px" : "230px" }}>
            <div className={navHeaderStyles} type="div">
              <Link aria-current="page" to="/" className={logoLinkStyles} style={{ display: isOpen ? "none" : "block" }}>
                <img alt="logo" className={logoImageStyles} src={logo} />
              </Link>
              <HiBars3BottomLeft
                onClick={toggle}
                // style={{ marginLeft: isOpen ? "1rem" : "0" }}
                className={menuIconStyles}
              />
            </div>
            <ul className={navListStyles}>

              {
                routes.map((rout, i) => (
                  <li key={i} className={selected === i ? " active " : "list_item"} onClick={() => setSelected(i)}>
                  <Link className='menu' to={rout.path} style={{ gap: isOpen ? "20px" : "10px" }}>
                    <div className={navListItemIconContainer}>
                      <i className={navListItemIcon}>{rout.icon}</i>
                    </div>
                    <div className={navListItemText}>
                      {rout.name}
                      <div className={navListItemTransition}></div>
                    </div>
                  </Link>
                </li>
                ))
              }
            
            </ul>
          </nav>
          <div className={mainContentArea}>
            <DashboardHeader />
            <div className={contentInnerWrapper}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
