import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import scrollLogo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import useWindowScroll from "../../hooks/useWindowScroll";
import { BiMenu } from "react-icons/bi";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";

const Header = () => {
  const scroll = useWindowScroll();
  const { user, logout } = useContext(AuthContext);

  //  windows scroll add class

  // const headerRef = useRef(null);

  // const handleSticky = () => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 60 ||
  //       document.documentElement.scrollTop > 60
  //     ) {
  //       headerRef.current?.classList.add("sticky_header");
  //     } else {
  //       headerRef.current?.classList.remove("sticky_header");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleSticky();

  //   return () => window.removeEventListener("scroll", handleSticky);
  // });

  //// responsive mobile menu open

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
    console.log("toggle");
  };

  //   const changeThemHeaderColor = [
  //     '/eventrequest',
  //     '/login',
  //     '/register',
  //     '/verify'
  // ]
  // ${changeThemHeaderColor.includes(location.pathname) && 'themHeader'}
  // console.log(location.pathname);

  return (
    <>
      <header
        className={`bg-transparent fixed top-0 left-0 w-full transition py-5 z-[111] h-fit hidden_header ${
          scroll > 50 && "onscroll"
        } `}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-8 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 w-40" to="/">
                <img src={logo} alt="" className="logo" />
                <img src={scrollLogo} alt="" className="scroll_logo" />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav
                aria-label="Global"
                className={`hidden_mobile md:block ${
                  isActive ? "menu_box" : ""
                }`}
              >
                <ul className="flex items-center gap-6 text-base">
                  <li>
                    {/* <Link className="menu_item" to="/about">
                      About
                    </Link> */}
                    <Link to='/about' className='menu_item'>About</Link>
                  </li>

                  <li>
                    {/* <Link className="menu_item" to="/career">
                      
                    </Link> */}
                      <Link to='/career' className='menu_item'>Careers</Link>

                  </li>
                  <li>
                    <Link className="menu_item" to="/services">
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link className="menu_item" to="/projects">
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link className="menu_item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="menu_item" to="/eventlist">
                      Event List
                    </Link>
                  </li>
                  <li>
                    <Link className="menu_item" to="/eventformdevelope">
                      EFD
                    </Link>
                  </li>
                  <li>
                    <Link className="menu_item" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap">
                  {user ? (
                    <button onClick={()=>logout()} className="btn_group group">
                      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />

                      <span className="btn">Logout</span>
                    </button>
                  ) : (
                    <Link to="/login" className="btn_group group">
                      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#4f9fe2] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />

                      <span className="btn">Login</span>
                    </Link>
                  )}
                </div>

                <div className="hidden_menubar">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 "
                    onClick={toggleClass}
                  >
                    <BiMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
