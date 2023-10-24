import { Link } from "react-router-dom";
import { BiSolidHome, BiPlay } from "react-icons/bi";


const InnerBanner = ({ title, name }) => {

    return (
        <>
            <section
                className="inner_banner"
            >

                <div
                    className="relative mx-auto  px-4 py-32 sm:px-6 flex items-center justify-center lg:px-8"
                >
                    <div className="max-w-xl text-center ">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white drop-shadow-lg shadow-black">
                            {title}
                        </h1>
                        <nav className='relative z-10 py-4'>
                            <ul className='flex items-center justify-center gap-2 text-white text-base'>
                                <li className='drop-shadow-lg'><Link to="/"><BiSolidHome /></Link></li>
                                <li className='drop-shadow-lg'><BiPlay /></li>
                                <li className='drop-shadow-lg'><Link to="/" className='hover:underline'>Home</Link></li>
                                <li className='drop-shadow-lg'><BiPlay /></li>
                                <li className='drop-shadow-lg'>{name}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InnerBanner;
